import { Command } from "commander";
import parseFile from "./parser.js";
import _ from "lodash";

const program = new Command();

program.version("0.1.0", "-v, --version", "output the version number");

program.option("-f, --format [type]", "output format");

program.description("Compares two configuration files and shows a difference.");

program.arguments("<filepath1> <filepath2>");

program.action((filepath1, filepath2) => {
  try {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);

    console.log(`Comparing files: ${filepath1} and ${filepath2}`);
    console.log("Differences:");
    console.log(generateDiff(data1, data2, program.format));
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});


function generateDiff(data1, data2) {
  const differences = [];

  const allKeys = new Set([...Object.keys(data1), ...Object.keys(data2)]);
  const sortedKeys = _.sortBy(Array.from(allKeys));

  sortedKeys.forEach(key => {
    if (data1[key] !== data2[key]) {
      if (data1[key] !== undefined) {
        differences.push(`- ${key}: ${JSON.stringify(data1[key])}`);
      }
      if (data2[key] !== undefined) {
        differences.push(`+ ${key}: ${JSON.stringify(data2[key])}`);
      }
    } else {
      differences.push(`  ${key}: ${JSON.stringify(data1[key])}`);
    }
  });

  return differences.join("\n");
}


// Экспорт функции gendiff
export function gendiff(filepath1, filepath2, format) {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  return generateDiff(data1, data2, format);
}

// Экспорт функции для запуска из командной строки
export function runCLI() {
  if (process.argv.length < 4) {
    console.error("Error: missing required arguments 'filepath1' and 'filepath2'");
    process.exit(1);
  }
  program.parse(process.argv);
}

if (program.opts().help) {
  program.outputHelp();
}