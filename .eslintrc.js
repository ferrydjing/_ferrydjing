module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        camelcase: 0,
    // 强制 getter 函数中出现 return 语句
    "getter-return": [2, { allowImplicit: true }],
    // 禁止在循环中出现 await
    "no-await-in-loop": 2,
    // 禁用 console
    "no-console": 0,
    // 强制数组方法的回调函数中有 return 语句
    "array-callback-return": 1,
    // 强制把变量的使用限制在其定义的作用域范围内
    "block-scoped-var": 1,
    // 指定程序中允许的最大环路复杂度
    complexity: [1, { max: 200 }],
    // 要求 return 语句要么总是指定返回的值，要么不指定
    "consistent-return": 0,
    // 强制所有控制语句使用一致的括号风格
    curly: 1,
    // 要求 switch 语句中有 default 分支
    "default-case": 1,
    // 强制在点号之前和之后一致的换行
    "dot-location": 1,
    // 强制尽可能地使用点号
    "dot-notation": [1, { allowPattern: "^[a-z]+(_[a-z]+)+$" }],
    // 要求使用 === 和 !==
    eqeqeq: [1, "always", { null: "ignore" }],
    // 要求 for-in 循环中有一个 if 语句
    "guard-for-in": 1,
    // 禁用 alert、confirm 和 prompt
    "no-alert": 1,
    // 禁用 arguments.caller 或 arguments.callee
    "no-caller": 1,
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    "no-div-regex": 1,
    // 禁止 if 语句中 return 语句之后有 else 块
    "no-else-return": 1,
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    "no-eq-null": 1,
    // 禁用 eval(),除非间接调用
    "no-eval": [1, { allowIndirect: true }],
    // 禁止扩展原生类型
    "no-extend-native": 1,
    // 禁止不必要的 .bind() 调用
    "no-extra-bind": 1,
    // 禁用不必要的标签
    "no-extra-label": 1,
    // 禁止数字字面量中使用前导和末尾小数点
    "no-floating-decimal": 1,
    // 禁止使用类似 eval() 的方法
    "no-implied-eval": 1,
    // 禁止 this 关键字出现在类和类对象之外
    "no-invalid-this": 0,
    // 禁用 __iterator__ 属性
    "no-iterator": 1,
    // 禁用标签语句
    "no-labels": 1,
    // 禁用不必要的嵌套块
    "no-lone-blocks": 1,
    // 禁止在循环中出现 function 声明和表达式
    "no-loop-func": 1,
    // 禁止使用多个空格
    "no-multi-spaces": 1,
    // 禁止使用多行字符串
    "no-multi-str": 1,
    // 禁止使用 new 以避免产生副作用
    "no-new": 1,
    // 禁止对 Function 对象使用 new 操作符
    "no-new-func": 1,
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    "no-new-wrappers": 1,
    // 禁止在字符串中使用八进制转义序列
    "no-octal-escape": 1,
    // 禁止对 function 的参数进行重新赋值
    // 'no-param-reassign': 1,
    // 禁用 __proto__ 属性
    "no-proto": 1,
    // 禁止在 return 语句中使用赋值语句
    "no-return-assign": 1,
    // 禁用不必要的 return await
    "no-return-await": 1,
    // 禁止使用 javascript: url
    "no-script-url": 1,
    // 禁止自身比较
    "no-self-compare": 1,
    // 禁用逗号操作符
    "no-sequences": 1,
    // 禁止抛出异常字面量
    "no-throw-literal": 1,
    // 禁用一成不变的循环条件
    "no-unmodified-loop-condition": 1,
    // 禁止出现未使用过的表达式
    "no-unused-expressions": 1,
    // 禁止不必要的 .call() 和 .apply()
    "no-useless-call": 1,
    // 禁止不必要的字符串字面量或模板字面量的连接
    "no-useless-concat": 1,
    // 禁止多余的 return 语句
    "no-useless-return": 1,
    // 禁用 void 操作符
    "no-void": 1,
    // 禁用 with 语句
    "no-with": 1,
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    "prefer-promise-reject-errors": 0,
    // 禁止使用不带 await 表达式的 async 函数
    "require-await": 1,
    // 要求 IIFE 使用括号括起来
    "wrap-iife": [1, "inside"],
    // 要求或禁止 “Yoda” 条件
    yoda: 1,
    // 禁止 catch 子句的参数与外层作用域中的变量同名
    "no-catch-shadow": 1,
    // 禁止将标识符定义为受限的名字
    "no-shadow-restricted-names": 1,
    // 禁止将变量初始化为 undefined
    "no-undef-init": 1,
    // 禁止在变量定义之前使用它们
    "no-use-before-define": 1,
    // 在数组开括号后和闭括号前强制换行
    "array-bracket-newline": 1,
    // 强制数组方括号中使用一致的空格
    "array-bracket-spacing": [1, "always", { singleValue: false }],
    // 强制数组元素间出现换行
    "array-element-newline": 1,
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    "block-spacing": 1,
    // 强制在代码块中使用一致的大括号风格,
    "brace-style": 1,
    // 要求或禁止末尾逗号
    "comma-dangle": 1,
    // 强制在逗号前后使用一致的空格
    "comma-spacing": 1,
    // 强制使用一致的逗号风格
    "comma-style": 1,
    // 强制在计算的属性的方括号中使用一致的空格
    "computed-property-spacing": 0,
    "computed-property-even-spacing": 0,
    // 要求或禁止文件末尾存在空行
    "eol-last": 1,
    // 要求或禁止在函数标识符和其调用之间有空格
    "func-call-spacing": 1,
    // 强制在函数括号内使用一致的换行
    "function-paren-newline": 0,//[1, "multiline"],
    // 强制隐式返回的箭头函数体的位置
    "implicit-arrow-linebreak": 1,
    // 强制使用一致的缩进
    indent: [1, 2],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    "key-spacing": 1,
    // 强制在关键字前后使用一致的空格
    "keyword-spacing": 1,
    // 强制行注释的位置
    "line-comment-position": 1,
    // 要求在注释周围有空行
    "lines-around-comment": 0,
    // 强制可嵌套的块的最大深度
    "max-depth": 1,
    // 强制函数定义中最多允许的参数数量
    "max-params": 1,
    // 强制对多行注释使用特定风格
    "multiline-comment-style": 0,
    // 要求或禁止在三元操作数中间换行
    "multiline-ternary": 0,
    // 要求构造函数首字母大写
    "new-cap": 1,
    // 要求调用无参构造函数时有圆括号
    "new-parens": 1,
    // 要求方法链中每个调用都有一个换行符
    "newline-per-chained-call": 1,
    // 禁用 Array 构造函数
    "no-array-constructor": 1,
    // 禁用按位运算符
    "no-bitwise": 1,
    // 禁用 continue 语句
    "no-continue": 1,
    // 禁止在代码后使用内联注释
    "no-inline-comments": 0,
    // 禁止 if 作为唯一的语句出现在 else 语句中
    "no-lonely-if": 1,
    // 	禁止混合使用不同的操作符
    "no-mixed-operators": 1,
    // 	禁止连续赋值
    "no-multiple-empty-lines": 1,
    // 禁用嵌套的三元表达式
    "no-nested-ternary": 1,
    // 禁用 Object 的构造函数
    "no-new-object": 1,
    // 禁用行尾空格
    "no-trailing-spaces": 1,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-unneeded-ternary": 1,
    // 禁止属性前有空白
    "no-whitespace-before-property": 1,
    // 强制大括号内换行符的一致性
    "object-curly-newline": [1, { multiline: true }],
    // 强制将对象的属性放在不同的行上
    "object-property-newline": 1,
    // 要求或禁止在可能的情况下使用简化的赋值操作符
    "operator-assignment": 1,
    // 强制操作符使用一致的换行符
    "operator-linebreak": 1,
    // 要求或禁止在可能的情况下使用简化的赋值操作符
    "quote-props": [1, "as-needed", { numbers: true }],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [1, "single"],
    // 要求或禁止使用分号代替 ASI
    semi: [1, "never"],
    // 强制在块之前使用一致的空格
    "space-before-blocks": 1,
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [1, { named: "never" }],
    // 强制在圆括号内使用一致的空格
    "space-in-parens": 1,
    // 要求操作符周围有空格
    "space-infix-ops": 1,
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": 1,
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": 1,
    // 强制在 switch 的冒号左右有空格
    "switch-colon-spacing": 1,
    // 要求箭头函数体使用大括号
    "arrow-body-style": [1, "as-needed"],
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": [1, "as-needed"],
    // 强制箭头函数的箭头前后使用一致的空格
    "arrow-spacing": 1,
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    "no-confusing-arrow": 0,
    // 禁止重复模块导入
    "no-duplicate-imports": 1,
    // 禁止在对象中使用不必要的计算属性
    "no-useless-computed-key": 1,
    // 禁用不必要的构造函数
    "no-useless-constructor": 1
    }
}