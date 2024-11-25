import fs from "fs";
import path from "path";
import genDiff from "../src/index.js";

const fileExt = [".json", ".yaml"];

const resultStylish = fs.readFileSync(
  path.resolve(process.cwd(), "__fixtures__/result_stylish.txt"),
  "utf-8",
);

test.each(fileExt)("testing different file options", (extension) => {
  const fileBefore = `__fixtures__/file1${extension}`;
  const fileAfter = `__fixtures__/file2${extension}`;
  const actual1 = genDiff(fileBefore, fileAfter, "stylish");
  expect(actual1).toEqual(resultStylish);
});