# omit-empty
[![NPM version](https://img.shields.io/npm/v/@mikepol/omit-empty.svg?style=flat)](https://www.npmjs.com/package/@mikepol/omit-empty) [![NPM downloads](https://img.shields.io/npm/dm/@mikepol/omit-empty.svg?style=flat)](https://npmjs.org/package/@mike1pol/omit-empty) [![Build Status](https://img.shields.io/travis/mike1pol/omit-empty.svg?style=flat)](https://travis-ci.org/mike1pol/omit-empty)

Recursively omit empty properties from an object. Omits empty objects, arrays, strings or zero.

## Install
```npm i -s @mikepol/omit-empty```

## Usage

```
import omitEmpty from '@mike1pol/omit-empty';

omitEmpty({a: 'a', b: ''});
//=> {a: 'a'}

omitEmpty({a: 'a', b: {c: 'c', d: ''}});
//=> {a: 'a', b: {c: 'c'}

omitEmpty({a: ['a'], b: []});
//=> {a: ['a']}

omitEmpty({a: 0, b: 1});
//=> {a: 0, b: 1}

// set the `noZero` flag
omitEmpty({a: 0, b: 1}, true);
//=> {b: 1}
```

## Tests

```npm install && npm test```
