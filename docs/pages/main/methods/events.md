---
title: Getting package events
permalink: events
sidebar: main
---
## `#droppedOffBySender`

### Description
`bpost.droppedOffBySender()` will return information when the package is dropped off by the sender at sender's source postal point.
It requires one passed parameter `id` and returns the data with the `key: 'received.domestic-corner',` value in the API response.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Object>`|

### Usage
```js
import { droppedOffBySender } from 'bpost';

droppedOffBySender(`323267009691651472`).then(res => res);
```

### Output
```js
{
  date: "2016-11-09",
  irregularity: false,
  key: "received.domestic-corner",
  location: {
    en: "PP PRESS SHOP WAASLAND",
    fr: "PP PRESS SHOP WAASLAND",
    nl: "PP PRESS SHOP WAASLAND",
  },
  time: "18:04",
}
```

## `#availableForPickup`

### Description
`bpost.availableForPickup()` will return if a package is available for pickup by the recipient.
It requires one passed parameter `id` and returns a true or false if the object with `knownProcessStep: 'AVAILABLE_IN_POST_POINT_INTERNATIONAL'` has `obj.status === 'active'` in the API response.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Boolean>`|

### Usage
```js
import { availableForPickup } from 'bpost';

availableForPickup(`323267009691651472`).then(res => res);
```

### Output
```js
true // when processOverview.processSteps.status === 'active'
false // when processOverview.processSteps.status !== 'active'
```
