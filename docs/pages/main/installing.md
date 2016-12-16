---
title: Installing the module
layout: page
permalink: installing
sidebar: main
---
The module is offered on the npm registry and as a minified js ES5 build. The latter is available on unpkg. The
recommended way to install bpost is trough the package managers npm or yarn:

```console
yarn install (-D) bpost
npm install --save(-dev) bpost
```

bpost comes as a javascript module in various format. It's recommended to use it as an ES module since this will one day
become standard. Otherwise it's also available as a CommonJS module for Browserify and Node and as a regular UMD build
so you can import it in the browser. Below is the corresponding syntax and additional information about each build.

## ES module (es)
ES modules are the next best thing for using modules in Javascript. This will be the official standard once browsers and
runtimes begin to adopt it. It has an easy syntax:

```js
import bpost from 'bpost';
```

Besides importing as the `bpost` namespace you can also destructure seperate methods from bpost, since all methods are
declared as properties on the main file:

```js
import { getStatus, sourcePostalPoint, packageWeight } from 'bpost';
// will only import these three functions
```

ES modules are only implemented in some environments. Environments that do not support using `import` need to either use
another module loader or transpile the ES modules down to supported syntax with Babel.

## CommonJS (cjs)
CommonJS is a module loader which was adopted early on in the modern Javascript revolution. This is the officially
supported module loader in Node.js. To use this in the browser you need a build tool like Webpack, Gulp or bundler like
Browserify.

```js
const bpost = require('bpost');
// or destructured (node >=v6.x.x):
const { getStatus, sourcePostalPoint, packageWeight } = require('bpost');
```

## Universal Module Definition (umd)
UMD will expose a new property bpost to the global object (`window.bpost` for browsers, `global.bpost` for non DOM
envs), making it accessible to call all methods directly. UMD builds are hosted on unpkg or trough the `npm run
build:umd` task. They generally need to be imported with `<script>` tags

```html
<script src='dist/bpost.min.js'></script>
<script>
  var status = bpost('id').getStatus();
</script>
```
