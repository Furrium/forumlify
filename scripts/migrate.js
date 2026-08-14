const fs = require('node:fs/promises');
const path = require('node:path');
const { Pool } = require('pg');

const migrationsDir = path.join(__dirname, '..', 'migrations');
if (!process.env.DATABASE_URL && !process.env.PGHOST) {
  console.error('DATABASE_URL or PGHOST is required to run migrations.');
  process.exit(1);
}

async function migrate() {
  const pool = new Pool();
  const client = await pool.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        filename TEXT PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);

    const files = (await fs.readdir(migrationsDir))
      .filter(file => /^\d+.*\.sql$/.test(file))
      .sort();

    const applied = await client.query('SELECT filename FROM schema_migrations');
    const appliedFiles = new Set(applied.rows.map(row => row.filename));

    for (const filename of files) {
      if (appliedFiles.has(filename)) continue;

      const sql = await fs.readFile(path.join(migrationsDir, filename), 'utf8');
      console.log(`Applying migration ${filename}`);
      await client.query('BEGIN');
      try {
        await client.query(sql);
        await client.query(
          'INSERT INTO schema_migrations (filename) VALUES ($1)',
          [filename]
        );
        await client.query('COMMIT');
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      }
    }

    console.log('Database migrations are up to date.');
  } finally {
    client.release();
    await pool.end();
  }
}

migrate().catch(error => {
  console.error('Database migration failed:', error);
  process.exit(1);
});
