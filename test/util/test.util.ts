import { readFileSync } from 'fs';
import { resolve } from 'path';

const getFileBuffer = (filePath: string) => {
  const file = readFileSync(resolve(filePath))
  return file
}

export { getFileBuffer };
