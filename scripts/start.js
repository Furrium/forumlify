#!/usr/bin/env node
// Forumlify 启动入口
// 从 config.js 读取 SERVER_HOST / SERVER_PORT（可选），未配置时用默认值：
//   host = 环境变量 HOST > config.SERVER_HOST > '0.0.0.0'
//   port = 环境变量 PORT > config.SERVER_PORT > 3000
const { spawn } = require('child_process');
const CONFIG = require('../config');

const host = process.env.HOST || CONFIG.SERVER_HOST || '0.0.0.0';
const port = process.env.PORT || CONFIG.SERVER_PORT || 3000;

const args = ['start', '-H', host, '-p', String(port)];
const child = spawn(require.resolve('next/dist/bin/next'), args, {
  stdio: 'inherit',
  env: { ...process.env, HOSTNAME: host, PORT: String(port) },
});

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 0);
});
