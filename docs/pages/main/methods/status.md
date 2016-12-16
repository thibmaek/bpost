---
title: Getting active status
permalink: status
sidebar: main
---
## `#getStatus`

### Description
`bpost.getStatus()` will search for the currently active step in the delivery process of the package.
It requires one passed parameter `id` and returns the data with the `status: 'active'` value in the API response.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Object>`|

### Usage
```js
import { getStatus } from 'bpost';

getStatus(`323267009691651472`).then(res => res);
```

### Output
```js
{
  knownProcessStep: "PICKED_UP_IN_POST_POINT_INTERNATIONAL",
  label: {
    detail: "inPostPoint",
    main: "pickedUp",
  },
  name: "delivered",
  status: "active",
}
```
