# ea [![Build Status][travis-image]][travis-url]

  > Arrays, objects and strings reverse iterator

  [ea][ea] - module for direct iterations

## Install

```sh
npm install --save each-reverse
```

```sh
component install andrepolischuk/each-reverse
```

## API

### eachReverse(array, fn)

  Iterate array

```js
eachReverse([10, 11, 12], function(value, index) {

});
```

### eachReverse(object, fn)

  Iterate object

```js
eachReverse(user, function(value, key) {

});
```

### eachReverse(string, fn)

  Iterate string

```js
eachReverse('hello', function(value, key) {

});
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/each-reverse
[travis-image]: https://travis-ci.org/andrepolischuk/each-reverse.svg?branch=master

[ea]: https://github.com/andrepolischuk/ea
