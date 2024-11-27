import _ from 'lodash';

const symbols = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
  nested: ' ',
};

const identSize = 4;
const identOffse = 2;

const makeIndent = (depth) => {
  const str = ' ';
  return str.repeat(depth * identSize - identOffse);
};

const stringify = (value, depth = 1) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const getKeys = keys.map(
    (key) => `${makeIndent(depth + 1)}  ${key}: ${stringify(
      value[key],
      depth + 1,
    )}`,
  );
  return `{\n${getKeys.join('\n')}\n  ${makeIndent(depth)}}`;
};

const getStylishFormat = (value, depth = 1) => {
  switch (value.type) {
    case 'added':
    case 'deleted':
    case 'unchanged': {
      const indent = makeIndent(depth);
      const { key } = value;
      const formattedValue = stringify(value.value, depth);
      return `${indent}${symbols[value.type]} ${key}: ${formattedValue}`;
    }

    case 'changed': {
      const indent = makeIndent(depth);
      const { key } = value;
      const oldValue = stringify(value.valueBefore, depth);
      const newValue = stringify(value.valueAfter, depth);

      return (
        `${indent}${symbols.deleted} ${key}: ${oldValue}\n`
        + `${indent}${symbols.added} ${key}: ${newValue}`
      );
    }

    case 'nested': {
      const indent = makeIndent(depth);
      const children = value.children
        .map((child) => getStylishFormat(child, depth + 1))
        .join('\n');

      return `${indent}  ${value.key}: {\n${children}\n${indent}} }`;
    }

    default:
      throw new Error(`Unknown type: ${value.type}`);
  }
};

export default (diff) => `{\n${diff.map((value) => getStylishFormat(value, 1)).join('\n')}\n}`;
