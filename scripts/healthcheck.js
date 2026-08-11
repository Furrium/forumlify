const port = process.env.PORT || 3000;
const url = `http://127.0.0.1:${port}/health/ready`;

fetch(url, { signal: AbortSignal.timeout(4000) })
  .then(response => {
    if (!response.ok) throw new Error(`readiness returned ${response.status}`);
  })
  .catch(error => {
    console.error(error.message);
    process.exit(1);
  });
