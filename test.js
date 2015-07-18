'use strict';

var eachReverse = require('./');
var assert = require('assert');

var user = {
  name: 'Petr',
  age: 25
};

describe('eachReverse(obj, fn)', function() {
  it('should return reverse index', function() {
    var vals = [];

    eachReverse(user, function(val, key) {
      vals.push(key);
    });

    assert.deepEqual(['age', 'name'], vals);
  });

  it('should return reverse key/value pairs', function() {
    var vals = [];

    eachReverse(user, function(val, key) {
      vals.push([key, val]);
    });

    assert.deepEqual([['age', 25], ['name', 'Petr']], vals);
  });
});

var cities = [
  'Moscow',
  'Peterburg',
  'Novgorod'
];

describe('eachReverse(arr, fn)', function() {
  it('should return reverse index', function() {
    var vals = [];

    eachReverse(cities, function(val, i) {
      vals.push(i);
    });

    assert.deepEqual([2, 1, 0], vals);
  });

  it('should return reverse values', function() {
    var vals = [];

    eachReverse(cities, function(val) {
      vals.push(val);
    });

    assert.deepEqual(['Novgorod', 'Peterburg', 'Moscow'], vals);
  });
});

var hello = 'hello';

describe('eachReverse(str, fn)', function() {
  it('should return reverse values', function() {
    var vals = [];

    eachReverse(hello, function(val) {
      vals.push(val);
    });

    assert.deepEqual(['o', 'l', 'l', 'e', 'h'], vals);
  });
});
