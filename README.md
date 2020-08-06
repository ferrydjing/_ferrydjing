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

#### 参数

同 console.log

### isEmpty

判断对象/数字/字符串是否为空

#### 参数

- [obj]\(String|Object|Array): 需要判断的对象

#### 返回值

true/false

### typeCheck

判断传入的对象的类型， 或者判断类型是否为某个类型

#### 参数

- [obj]\(任意类型): 需要判断的对象
- [type]\(string): 可选， 需要判断对象是否为某个类型时传入(支持的类型有 string, number, array, boolean, symbol, undefined, null, function, date, regexp, error, document, window, object)

#### 返回值

- 没有传入 type 的时候返回对应的类型(支持的类型有 string, number, array, boolean, symbol, undefined, null, function, date, regexp, error, document, window, object)
- 传入 type 时候返回否为对应类型(true/false)

### toCutDecimals

截断传入数字的小数位

#### 支持版本

`0.0.5`

#### 参数

- [num] \(Number): 需要截断的数字
- [len] \(Number): 保留的小数长度（默认为 2）

#### 返回值

返回截断后的数字

### toPercent

将小数转换为百分比的字符串

#### 支持版本

`0.0.5`

#### 参数

- [num] \(Number): 需要转换的数字

#### 返回值

返回转换后的数字

## 对象列表

### store

封装的storage方法

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
   *  @return            返回值
   *        @result      (对应值/null) 失败或者不存在返回null, 成功为对应值
   **/
  let result = store.get('item')

  /**
   *  @desc             设置localStorage
   *  @params           参数说明
   *       @key         需要设置的key
   *       @value       key对应的值
   *  @return           返回值说明
   *       @result      (true/false) 成功为true，失败为false
   * */
  let result = store.set('item', 'item')



// sessionstorage 使用

  /**
   *  @desc              获取sessionStorage
   *  @params            参数说明
   *        @key         需要获取的key
   *  @return            返回值
   *        @result      (对应值/null) 失败或者不存在返回null, 成功为对应值
   **/
  let result = store.session.get('item')

  /**
   *  @desc             设置sessionStorage
   *  @params           参数说明
   *       @key         需要设置的key
   *       @value       key对应的值
   *  @return           返回值说明
   *       @result      (true/false) 成功为true，失败为false
   * */
  let result = store.session.set('item', 'item')

  ```