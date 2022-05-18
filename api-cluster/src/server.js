import { createServer } from 'http';
const id = process.pid;

export const server = createServer((resquest, response) => {
  for (let i = 0; i < 1e7; i++);
  response.end(`handled by pid  ${id}`);
});

server.listen(3000).once('listening', () => {
  console.log(`server is running on port 3000`);
});

process.on('SIGTERM', () => {
  console.log('Server is shutting down...', new Date().toISOString());
  server.close(() => process.exit());
});
