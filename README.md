# omit-empty
[![NPM version](https://img.shields.io/npm/v/@mikepol/omit-empty.svg?style=flat)](https://www.npmjs.com/package/@mikepol/omit-empty) [![NPM downloads](https://img.shields.io/npm/dm/@mikepol/omit-empty.svg?style=flat)](https://npmjs.org/package/@mikepol/omit-empty) [![Build Status](https://img.shields.io/travis/mike1pol/omit-empty.svg?style=flat)](https://travis-ci.org/mike1pol/omit-empty)

Recursively omit empty properties from an object. Omits empty objects, arrays, strings or zero.

## Install
```npm i -s @mikepol/omit-empty```

## Usage

```
import omitEmpty from '@mikepol/omit-empty';

omitEmpty({a: 'a', b: ''});
//=> {a: 'a'}

omitEmpty({a: 'a', b: {c: 'c', d: ''}});
//=> {a: 'a', b: {c: 'c'}

omitEmpty({a: ['a'], b: []});
//=> {a: ['a']}

omitEmpty({a: 0, b: 1});
//=> {a: 0, b: 1}

omitEmpty({a: null, b: ''});
//=> null
```

## Tests

```npm install && npm test```
