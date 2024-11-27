/* eslint-disable no-case-declarations */
import _ from 'lodash';

const symbols = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
  nested: ' ',
};

const indentSize = 4;
const identOutsize = 2;

const makeIndent = (depth) => {
  const str = ' ';
  return str.repeat(depth * indentSize - identOutsize);
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
  const indent = makeIndent(depth);
  const nextIndent = makeIndent(depth + 1);

  switch (value.type) {
    case 'added':
    case 'deleted':
    case 'unchanged':
      const symbol = symbols[value.type];
      const { key } = value;
      const strValue = stringify(value.value, depth);
      return `${indent}${symbol} ${key}: ${strValue}`;

    case 'changed':
      const deletedSymbol = symbols.deleted;
      const addedSymbol = symbols.added;
      const keyChanged = value.key;
      const strValueBefore = stringify(value.valueBefore, depth);
      const strValueAfter = stringify(value.valueAfter, depth);
      return `${indent}${deletedSymbol} ${keyChanged}: ${strValueBefore}\n${indent}${addedSymbol} ${keyChanged}: ${strValueAfter}`;

    case 'nested':
      const nestedKey = value.key;
      const children = value.children.map((val) => getStylishFormat(val, depth + 1)).join('\n');
      return `${indent}  ${nestedKey}: {\n${children}\n${nextIndent} }`;

    default:
      throw new Error(`Unknown type: ${value.type}`);
  }
};

export default (diff) => `{\n${diff.map((value) => getStylishFormat(value, 1)).join('\n')}\n}`;
