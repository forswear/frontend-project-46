#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { load } from "js-yaml";

function parseFile(filepath) {
  const ext = path.extname(filepath);
  const data = fs.readFileSync(filepath, "utf-8");

  switch (ext) {
  case ".json":
    return JSON.parse(data);
  case ".yml":
  case ".yaml":
    return load(data);
  default:
    throw new Error(`Неподдерживаемый формат: ${ext}`);
  }
}

export default parseFile;