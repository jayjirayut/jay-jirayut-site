import fs from 'node:fs';
import path from 'node:path';

const nextDirectory = path.join(process.cwd(), '.next');

try {
  fs.rmSync(nextDirectory, { recursive: true, force: true });
} catch (error) {
  console.error('Failed to clear .next before starting dev server.');
  throw error;
}
