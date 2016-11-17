# bpost

JavaScript API wrapper for bpost track &amp; trace

[![NPM](https://img.shields.io/npm/v/bpost.svg?style=flat-square)](https://www.npmjs.com/package/bpost)
[![David](https://img.shields.io/david/thibmaek/bpost.svg?style=flat-square)](https://david-dm.org/thibmaek/bpost)
[![Travis](https://img.shields.io/travis/thibmaek/bpost/master.svg?style=flat-square)](https://travis-ci.org/thibmaek/bpost)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add bpost (--dev)

or npm

	npm install bpost (--save-dev)


If you don't use a package manager, you can [access `bpost` via unpkg (CDN)](https://unpkg.com/bpost/), download the source, or point your package manager to the url.

`bpost` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `bpost` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/bpost/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/bpost) on your page. The UMD builds make `bpost` available as a `window.bpost` global variable.

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).

### Usage

### setup

```js
// es native
import bpost from 'bpost';

// CommonJS
const bpost = require('bpost');
```

### methods

### Examples

see [`example`](example/script.js) folder or the [runkit](https://runkit.com//gen) example

### License

[MIT](LICENSE)
