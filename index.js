'use strict';

try {
  var type = require('type');
} catch (err) {
  var type = require('component-type');
}

module.exports = function(obj, fn) {
  if (type(fn) !== 'function') return;

  switch (type(obj)) {
    case 'array':
      return array(obj, fn);
    case 'object':
      if (type(obj.length) === 'number') return array(obj, fn);
      return object(obj, fn);
    case 'string':
      return string(obj, fn);
  }
};

function array(obj, fn) {
  for (var i = obj.length - 1; i >= 0; i--) {
    fn(obj[i], i);
  }
}

function object(obj, fn) {
  var keys = [];

  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      keys.push(k);
    }
  }

  for (var i = keys.length - 1; i >= 0; i--) {
    fn(obj[keys[i]], keys[i]);
  }
}

function string(obj, fn) {
  for (var i = obj.length - 1; i >= 0; i--) {
    fn(obj.charAt(i), i);
  }
}
