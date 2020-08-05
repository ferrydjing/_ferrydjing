# \_ferrydjing

常用工具方法合集

## 方法列表

### log

自定义 console.log，根据环境为 production 时会重置为空函数

#### 引入版本

0.0.1

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

0.0.5

#### 参数

- [num] \(Number): 需要截断的数字
- [len] \(Number): 保留的小数长度（默认为 2）

#### 返回值

返回截断后的数字
