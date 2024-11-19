import fs from 'fs';
import path from 'path';
import { safeLoad } from 'js-yaml';

function parseFile(filepath) {
  const ext = path.extname(filepath);
  const data = fs.readFileSync(filepath, 'utf-8');

  switch (ext) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
    case '.yaml':
      return safeLoad(data);
    default:
      throw new Error(`Не поддерживаемый формат: ${ext}`);
  }
}

export default parseFile;