const assert = require('assert')
const qs = require('qs')
const {
  log,
  typeCheck,
  isEmpty,
  toCutDecimals,
  toPercent,
  decodeBase64,
  encodeBase64,
  store
} = require('../dist/lib.cjs')

function testLog() {
  log('hello')
}

function testTypeCheck() {
  assert.equal(typeCheck({}), 'object')
  assert.equal(typeCheck([]), 'array')
  assert.equal(typeCheck(''), 'string')
}

function testIsEmpty() {
  assert.equal(isEmpty({}), true)
  assert.equal(isEmpty([]), true)
  assert.equal(isEmpty([1]), false)
  assert.equal(isEmpty(''), true)
  assert.equal(isEmpty({ aa: 1 }), false)
}

function testToCutDecimals() {
  assert.equal(toCutDecimals(1.3332), 1.33)
  assert.equal(toCutDecimals(1.3332, 1), 1.3)
}

function testToPercent() {
  assert.equal(toPercent(0.3332), '33.32%')
  assert.equal(toPercent(0), 0)
}

testLog()
testTypeCheck()
testIsEmpty()
testToCutDecimals()
testToPercent()

log('完成测试')
