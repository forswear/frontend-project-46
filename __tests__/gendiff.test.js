import { generateDiff } from '../src/index.js';
import fs from 'fs';
import path from 'path';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readContent('expectedStylish.txt');
const expectedPlain = readContent('expectedPlain.txt');
const expectedJson = readContent('expectedJson.txt');

const testFormats = ['json', 'yml'];

describe('generateDiff', () => {
  test('should generate correct diff for flat JSON files', () => {
    const file1 = JSON.parse(readFixture('file1.json'));
    const file2 = JSON.parse(readFixture('file2.json'));
    const expectedDiff = readFixture('expectedDiff.txt');

    const result = generateDiff(file1, file2, 'default');
    expect(result).toBe(expectedDiff);
  });
});
