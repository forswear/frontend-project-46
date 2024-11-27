import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const filejson1 = getFixturePath('file1.json');
const filejson2 = getFixturePath('file2.json');
const fileyaml1 = getFixturePath('file1.yaml');
const fileyaml2 = getFixturePath('file2.yaml');

test.each([
  {
    file1: filejson1, file2: filejson2, expectResult: readFile('result_stylish.txt').trim(),
  },
  {
    file1: fileyaml1, file2: fileyaml2, format: 'stylish', expectResult: readFile('result_stylish.txt').trim(),
  },
  {
    file1: filejson1, file2: filejson2, format: 'stylish', expectResult: readFile('result_stylish.txt').trim(),
  },
  {
    file1: filejson1, file2: filejson2, format: 'json', expectResult: readFile('result_json.txt').trim(),
  },
  {
    file1: fileyaml1, file2: fileyaml2, format: 'json', expectResult: readFile('result_json.txt').trim(),
  },
  {
    file1: filejson1, file2: filejson2, format: 'plain', expectResult: readFile('result_plain.txt').trim(),
  },
  {
    file1: fileyaml1, file2: fileyaml2, format: 'plain', expectResult: readFile('result_plain.txt').trim(),
  },

])('gendiff %s, %s', ({
  file1, file2, format, expectResult,
}) => {
  expect(genDiff(file1, file2, format)).toBe(expectResult);
});
