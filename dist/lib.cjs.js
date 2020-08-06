'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var calc = _interopDefault(require('js-calculation'));

const log$1 = (...msg) => {
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
    if (res === type.toLowerCase()) {
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

const toCutDecimals = (num, len = 2) => {
  num += '';
  if (num.indexOf('.') !== -1) {
    let arr = num.split('.');
    if (arr[1].length < len) {
      return arr.join('.') * 1
    } else {
      arr[1] = arr[1].substr(0, len);
      while (arr[1].length) {
        if (arr[1][arr.length - 1] === '0') {
          arr[1] = arr[1].substr(0, arr[1].length - 1);
        } else {
          break
        }
      }
      if (arr[1].length > 0) {
        return arr.join('.') * 1
      } else {
        return arr[0] * 1
      }
    }
  } else {
    return num * 1
  }
};

const toPercent = (point) => {
  if (typeof point === 'string' && !Number(point)) return point
  if (point === 0) return 0
  let str = toCutDecimals(calc(`${point} 100 *`));
  str += '%';
  return str
};

const session = {
  get(key) {
    let res = null;
    try {
      if (sessionStorage.getItem(key)) {
        res = JSON.parse(sessionStorage.getItem(key));
      }
    } catch (error) {
      log(error);
    }
    return res
  },
  set(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true
    } catch (error) {
      log(error);
      return false
    }
  }
};

const store = {
  get: (key) => {
    let res = null;
    try {
      if (localStorage.getItem(key)) {
        res = JSON.parse(localStorage.getItem(key));
      }
    } catch (error) {
      log$1(error);
    }
    return res
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true
    } catch (error) {
      log$1(error);
      return false
    }
  },
  session
};

exports.isEmpty = isEmpty;
exports.log = log$1;
exports.store = store;
exports.toCutDecimals = toCutDecimals;
exports.toPercent = toPercent;
exports.typeCheck = typeCheck;
