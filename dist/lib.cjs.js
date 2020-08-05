'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const log = (...msg) => {
  if (process && process.env && process.env.NODE_ENV !== 'production') {
    console.log(...msg);
  }
};

const typeCheck = (obj, type) => {
  const map = {
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Symbol]': 'symbol',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Function]': 'function',
    '[object Date]': 'date',
    '[object Array]': 'array',
    '[object RegExp]': 'regexp',
    '[object Error]': 'error',
    '[object HTMLDocument]': 'document',
    '[object global]': 'window',
    '[object Object]': 'object'
  };
  const tsc = Object.prototype.toString.call;
  const res = map[tsc(obj)] || 'undefined';
  if (type && map[tsc(obj)] === 'string') {
    if (res === toLower(type)) {
      return true
    } else {
      return false
    }
  }
  return res
};

const isEmpty = (obj) => {
  if (typeCheck(obj) === 'array' && obj.length === 0) {
    return true
  } else if (typeCheck(obj) === 'object' && JSON.stringify(obj) === '{}') {
    return true
  } else if (typeCheck(obj) === 'string' && obj === '') {
    return true
  } else {
    return false
  }
};

exports.isEmpty = isEmpty;
exports.log = log;
exports.typeCheck = typeCheck;
