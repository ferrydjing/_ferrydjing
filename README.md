# @ferrydjing/utils

常用工具方法合集

## 安装方式

```shell
# npm
npm install @ferrydjing/utils --save

# 或者yarn
yarn add @ferrydjing/utils
```

## 引用方式

```js
// 方式一
import { log } from '@ferrydjing/utils'

// 方式二
const { log } = require('@ferrydjing/utils')

// 方式三
// 通过script方式引入 dist/_fdj.iife.js，通过这种方式引入会在window对象上加入_fdj对象，所有的方法、对象都可以通过_fdj.使用
```

## 方法列表

### log

自定义 console.log，根据环境为 production 时会重置为空函数

#### 引入版本

`0.0.1`

#### 使用说明

```js
/**
 * @desc                自定义 console.log，根据环境为 production 时会重置为空函数
 * @params              参数同console.log
 * @return              undefined
 **/
import { log } from '@ferrydjing/utils'

// 使用方式
let a = 'hello'
log('msg', a)
```

### isEmpty

判断对象/数字/字符串是否为空

#### 引入版本

`0.0.1`

#### 使用说明

```js
// 引入方式
import { isEmpty } from '@ferrydjing/utils'

/**
 * @desc                判断对象/数字/字符串是否为空
 * @params              接收参数
 *    @obj              (String,Object, Array)
 * @return              为空返回true,否则返回false
 **/
const a = {},
  b = [],
  c = '',
  d = { name: 'dd' }

const ret = isEmpty(a) // true
const ret2 = isEmpty(b) // true
const ret3 = isEmpty(c) // true
const ret4 = isEmpty(d) // false
```

### typeCheck

判断传入的对象的类型， 或者判断类型是否为某个类型

#### 引入版本

`0.0.1`

#### 使用说明

```js
// 引入方式
import { typeCheck } from '@ferrydjing/utils'

/**
 * @desc                判断传入的对象的类型， 或者判断类型是否为某个类型
 *                      支持的类型有 string, number, array, boolean, symbol, undefined, null, function, date, regexp, error, document, window, object
 * @params              接收参数
 *    @obj              (String,Object, Array)
 *    @type             String,可选， 需要判断对象是否为某个类型时传入()
 * @return
 *                      1. 没有传入 type 的时候返回对应的类型
 *                      2. 传入 type 时候返回否为对应类型(true/false)
 **/
const a = {},
  b = [],
  c = '',
  d = { name: 'dd' }

console.log(typeCheck(a)) // object
console.log(typeCheck(b)) // array
console.log(typeCheck(c)) // string
console.log(typeCheck(d, 'object')) // true
```

### toCutDecimals

截断传入数字的小数位, 不会进行四舍五入的操作

#### 支持版本

`0.0.5`

#### 使用说明

```js
// 引入方式
import { toCutDecimals } from '@ferrydjing/utils'
/**
 * @desc               截断传入数字的小数位
 * @params             参数说明
 *      @num           待处理的数字
 *      @len           截断长度，默认为2
 * @return             返回截断后的数字
 **/

const a = 1.3332

console.log(toCutDecimals(a)) // 1.33
console.log(toCutDecimals(a, 1)) // 1.3
```

### toPercent

将小数转换为百分比的字符串，处理后的接口保留 2 位小数

#### 支持版本

`0.0.5`

#### 使用说明

```js
// 引入方式
import { toPercent } from '@ferrydjing/utils'
/**
 * @desc               将小数转换为百分比的字符串
 * @params             参数说明
 *      @num           待处理的数字
 * @return             返回百分比的字符串
 **/

const a = 0.3332,
  b = 0

console.log(toPercent(a)) // 33.32%
console.log(toPercent(b)) // 0
```

### encodeBase64

将对象加密为 base64

#### 支持版本

`0.0.11`

#### 使用说明

```js
// 引入方式
import { encodeBase64 } from '@ferrydjing/utils'

/**
 * @desc               转换base64方法
 * @params             参数说明
 *      @obj           待处理的对象
 * @return             返回base64字符串
 **/

const a = { b: 11 },
  b = 'hello'

const str = encodeBase64(a) // eyJiIjoxMX0=
const str1 = encodeBase64(b) // ImhlbGxvIg==
```

### decodeBase64

解析 base64 字符串

#### 支持版本

`0.0.11`

#### 使用说明

```js
// 引入方式
import { decodeBase64 } from '@ferrydjing/utils'

/**
 * @desc               解析base64字符串
 * @params             参数说明
 *      @obj           待处理的对象
 * @return             返回base64字符串
 **/

const obj = decodeBase64('eyJiIjoxMX0=') // {b:11}
const str = decodeBase64('ImhlbGxvIg==') // hello
```

## 对象列表

### store

封装的 storage 方法

### 支持版本

`0.0.8`

#### 使用说明

```js
// 引用方式
import { store } from '@ferrydjing/utils'

// localstorage 使用

/**
 *  @desc              获取localStorage
 *  @params            参数说明
 *        @key         需要获取的key
 *        @isBase64    布尔值，非必填，是否是base64
 *  @return            返回值
 *        @result      (对应值/null) 失败或者不存在返回null, 成功为对应值
 **/
let result = store.get('item')
let result = store.get('item', true)

/**
 *  @desc             设置localStorage
 *  @params           参数说明
 *       @key         需要设置的key
 *       @value       key对应的值
 *       @isBase64    布尔值，非必填，是否是base64
 *  @return           返回值说明
 *       @result      (true/false) 成功为true，失败为false
 * */
let result = store.set('item', 'item')
let result = store.set('item', 'item', true)

// sessionstorage 使用

/**
 *  @desc              获取sessionStorage
 *  @params            参数说明
 *        @key         需要获取的key
 *        @isBase64    布尔值，非必填，是否是base64
 *  @return            返回值
 *        @result      (对应值/null) 失败或者不存在返回null, 成功为对应值
 **/
let result = store.session.get('item')
let result = store.session.get('item', true)

/**
 *  @desc             设置sessionStorage
 *  @params           参数说明
 *       @key         需要设置的key
 *       @value       key对应的值
 *       @isBase64    布尔值，非必填，是否是base64
 *  @return           返回值说明
 *       @result      (true/false) 成功为true，失败为false
 * */
let result = store.session.set('item', 'item')
let result = store.session.set('item', 'item', true)
```
