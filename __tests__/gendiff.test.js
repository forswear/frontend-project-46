import path from "path";
import { fileURLToPath } from "url";
import { gendiff } from "../bin/gendiff.js"; // Убедитесь, что путь указан правильно

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, "..", "__fixtures__", filename);

describe("gendiff", () => {
  test("должен обрабатывать добавление нового ключа", () => {
    const filepath1 = getFixturePath("file1.json");
    const filepath2 = getFixturePath("file2.json");
    const result = gendiff(filepath1, filepath2, "json");
    expect(result).toContain("+ verbose: true");
  });
      
  test("должен обрабатывать удаление ключа", () => {
    const filepath1 = getFixturePath("file1.json");
    const filepath2 = getFixturePath("file2.json");
    const result = gendiff(filepath1, filepath2, "json");
    expect(result).toContain("- proxy: \"123.234.53.22\"");
  });
      
  test("должен обрабатывать изменение значения ключа", () => {
    const filepath1 = getFixturePath("file1.json");
    const filepath2 = getFixturePath("file2.json");
    const result = gendiff(filepath1, filepath2, "json");
    expect(result).toContain("- timeout: 50");
    expect(result).toContain("+ timeout: 20");
  });
});
