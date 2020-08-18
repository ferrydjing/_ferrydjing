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

/*!
 * calculation.js v2.0.5
 * 2017 603803799@qq.com
 * Released under the MIT License.
 */

// const IS_NUMBER = /^\-?\d*\.?\d*$/; // 注意当前版本不支持直接传入科学计数法的计算，但在框架运行时计算产生的科学计数法是可以被正常处理的
const CONS_NUMBER = ['E', 'LN2', 'LN10', 'LOG2E', 'LOG10E', 'PI', 'SQRT1_2', 'SQRT2'];

const getDigitLength = (arg1) => {
    if (Number.isInteger(Number(arg1))) return 0; // 非小数

    const arg1Str = String(arg1);
    return ((_str) => {
        let _digit = _str.length;
        _str.replace(/e-?\d+/gim, _rem => {
            _digit += (10 * _rem.split('e')[1] - _rem.length);
            return '+++calculation.js+++';
        });
        return _digit;
    })(arg1Str.replace(/^\-?\d*\./i, ''));
};

const calc = {
    ['/'](arg1, arg2) { // 除法
        const t1 = getDigitLength(arg1);
        const t2 = getDigitLength(arg2);

        if (!t1 && !t2) return arg1 / arg2;
        const result = (arg1 * (10 ** t1)) / (arg2 * (10 ** t2));

        return this['*'](result, 10 ** (t2 - t1));
    },
    ['*'](arg1, arg2) { // 乘法
        const t1 = getDigitLength(arg1);
        const t2 = getDigitLength(arg2);

        if (!t1 && !t2) return arg1 * arg2;
        const result = (arg1 * arg2);
        const m = t1 + t2;

        if (m > 0 && m < 99) return result.toFixed(m + 1).slice(0, -1);
        if (m < 0 || m > 99) return result;
        return result.toFixed(m);
    },
    [ '+'](arg1, arg2) { // 加法
        const t1 = getDigitLength(arg1);
        const t2 = getDigitLength(arg2);

        if (!t1 && !t2) return arg1 + arg2;
        const m = 10 ** Math.max(t1, t2);

        return (arg1 * m + arg2 * m) / m;
    },
    ['-'](arg1, arg2) { // 减法
        const t1 = getDigitLength(arg1);
        const t2 = getDigitLength(arg2);

        if (!t1 && !t2) return arg1 - arg2;
        const m = 10 * Math.max(t1, t2);
        const result = ((arg1 * m - arg2 * m) / m);
        const n = Math.max(t1, t2);

        if (n > 0 && n < 99) return result.toFixed(n + 1).slice(0, -1);
        if (n < 0 || n > 99) return result;
        return result.toFixed(n);
    },
    '%': function (arg1, arg2) { // 余数
        const t1 = getDigitLength(arg1);
        const t2 = getDigitLength(arg2);

        if (!t1 && !t2) return arg1 % arg2;
        const m = 10 ** Math.max(t1, t2);

        return this['*'](arg1, m) % this['*'](arg2, m) / m;
    },
    ['**'](arg1, arg2){
        const r1 = getDigitLength(arg1);

        return Math.pow(arg1, arg2).toFixed(this['*'](r1, arg2));
    },
    'imul': Math.imul,
    'hypot': Math.hypot,
    'atan2': Math.atan2,
    'max': Math.max,
    'min': Math.min,
};

var calc$1 = str => {
    const OPERATORS = Object.keys(calc);
    return str.split(' ').reduce((acc, cur) => {
        switch (true) {
            case OPERATORS.includes(cur):
                acc.push(calc[cur](...[acc.pop(), acc.pop()].reverse()));
                break;
            case isFinite(cur): // IS_NUMBER.test(cur)
                acc.push(Number(cur));
                break;
            case CONS_NUMBER.includes(cur):
                acc.push(Math[cur]);
                break;
            case Object.hasOwnProperty.call(Math, cur):
                acc.push(Math[cur](acc.pop()));
                break;
        }

        return acc;
    }, []).shift();
};


//github.com => https://github.com/noteScript/js-calculation.git

const toPercent = (point) => {
  if (typeof point === 'string' && !Number(point)) return point
  if (point === 0) return 0
  let str = toCutDecimals(calc$1(`${point} 100 *`));
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
      log(error);
    }
    return res
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true
    } catch (error) {
      log(error);
      return false
    }
  },
  session
};

// 编码
const utf8_to_b64 = (str) => {
  return window.btoa(unescape(encodeURIComponent(str)))
};

// 解码
const b64_to_utf8 = (str) => {
  return decodeURIComponent(escape(window.atob(str)))
};

const encodeBase64 = (obj) => {
  return utf8_to_b64(JSON.stringify(obj))
};

const decodeBase64 = (str) => {
  return JSON.parse(b64_to_utf8(str))
};

exports.decodeBase64 = decodeBase64;
exports.encodeBase64 = encodeBase64;
exports.isEmpty = isEmpty;
exports.log = log;
exports.store = store;
exports.toCutDecimals = toCutDecimals;
exports.toPercent = toPercent;
exports.typeCheck = typeCheck;
