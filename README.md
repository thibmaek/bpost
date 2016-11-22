# bpost

JavaScript API wrapper for bpost track &amp; trace

[![NPM](https://img.shields.io/npm/v/bpost.svg?style=flat-square)](https://www.npmjs.com/package/bpost)
[![David](https://img.shields.io/david/thibmaek/bpost.svg?style=flat-square)](https://david-dm.org/thibmaek/bpost)
[![Travis](https://img.shields.io/travis/thibmaek/bpost/master.svg?style=flat-square)](https://travis-ci.org/thibmaek/bpost)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

## Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add bpost (--dev)

or npm

	npm install bpost (--save-dev)


If you don't use a package manager, you can [access `bpost` via unpkg (CDN)](https://unpkg.com/bpost/), download the source, or point your package manager to the url.

`bpost` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `bpost` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/bpost/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/bpost) on your page. The UMD builds make `bpost` available as a `window.bpost` global variable.

This module was created using the magnificent [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).

## Usage

### setup

```js
// es native
import bpost from 'bpost';

// CommonJS
const bpost = require('bpost');
```

### methods
__bpost#getStatus(id: String)__
> Object: returns the currently active step

__bpost#droppedOffBySender(id: String)__
> Object: returns information when package has been received at source postal point

__bpost#availableForPickup(id: String)__
> Boolean: returns true when package is available for pickup

__bpost#getPackageWeight(id: String)__
> Number: returns the package weight in grams

__bpost#deliveryMethod(id: String)__
> String: returns the requested delivery method
(e.g `"POSTAL_POINT"`)

__bpost#identifier(id: String)__
> Number: returns the internal id for package
_❗ this is different from the itemIdentifier param passed to the methods as first argument_

__bpost#sourcePostalPoint(id: String)__
> String: returns the English name for the postal point where your package is delivered by the sender

__bpost#destinationPostalPoint(id: String)__
> String: returns the English name for the postal point where your package is delivered for the recipient

__bpost#destinationAsAddress(id: String)__
> String: returns a formatted string with the complete destination address
(eg. `"Pathoekeweg 73, 8000 Brugge"`)

__bpost#openingHours(id: String, day: String)__
> Object: returns opening and closing times on the given day
(eg. `{ open: "07:00", close: "19:00" }`)

__bpost#destinationCoordinate(id: String)__
> Object: returns a 2D lat long coordinate of the destination
(eg. `{ "longitude": 3.21387, "latitude": 51.23154, }`)


## Examples

see the [`examples`](example/) folder or the [runkit](https://runkit.com/thibmaek/bpost) example

### Contributing
We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### License

The code is available under the [MIT](LICENSE) license.
