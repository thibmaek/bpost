---
title: Home Delivery
permalink: homedelivery
sidebar: main
---
## `#availableFrom`

### Description
`bpost.availableFrom()` will return the earliest timestamp that a package is availble for pickup.
It requires one passed parameter `id` returns the data with the `earliestAvailableTime: {…}` value in the API response.

{% include warning.html
  content='This method is only available if the recipient was absent on first delivery attempt.<br> It will return `undefined` if the recipient was present at first delivery attempt.'
%}

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Object>`|

### Usage
```js
import { availableFrom } from 'bpost';

availableFrom(`323267009691651472`).then(res => res);
```

### Output
```js
{
  time: "11:00",
  day: "2016-11-23"
}
```

## `#availableTo`

### Description
`bpost.availableTo()` will return the latest timestamp that a package can be picked up.
It requires one passed parameter `id` returns the data with the `latestAvailableTime: {…}` value in the API response.

{% include warning.html
  content='This method is only available if the recipient was absent on first delivery attempt.<br> It will return `undefined` if the recipient was present at first delivery attempt.'
%}

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Object>`|

### Usage
```js
import { availableTo } from 'bpost';

availableTo(`323267009691651472`).then(res => res);
```

### Output
```js
{
  time: "22:00",
  day: "2016-12-07"
}
```

## `#availableFromTo`

### Description
`bpost.availableFromTo()` will return a formatted string containing the period (in days) that a package is available for pickup after absence.
It requires one passed parameter `id` returns a combined data for the values of `earliestAvailableTime.day` and `latestAvailableTime.day` in the API response.

{% include warning.html
  content='This method is only available if the recipient was absent on first delivery attempt.<br> It will return `undefined` if the recipient was present at first delivery attempt.'
%}

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<String>`|

### Usage
```js
import { availableFromTo } from 'bpost';

availableFromTo(`323267009691651472`).then(res => res);
```

### Output
```js
'Available from 2016-11-23 to 2016-12-07'
```

## `#attemptedDelivery`

### Description
`bpost.attemptedDelivery()` will return the timestamp for the first delivery attempt in which recipient was absent.
It requires one passed parameter `id` returns the data with the `attemptedDeliveryTime: {…}` value in the API response.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Object>`|

### Usage
```js
import { attemptedDelivery } from 'bpost';

attemptedDelivery(`323267009691651472`).then(res => res);
```

### Output
```js
{
  time: "12:28",
  day: "2016-11-22"
}
```

## `#actualDelivery`

### Description
`bpost.actualDelivery()` will return the timestamp for when the package was picked up at the postal point after absence.
It requires one passed parameter `id` returns the data with the `actualDeliveryTime: {…}` value in the API response.

{% include warning.html
  content='This method is only available if a package is picked up after first delivery attempt.<br> It will return `undefined` if the recipient was present at first delivery attempt or if the package is yet to be picked up at the postal point.'
%}

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Object>`|

### Usage
```js
import { actualDelivery } from 'bpost';

actualDelivery(`323267009691651472`).then(res => res);
```

### Output
```js
{
  time: "13:37",
  day: "2016-11-23"
}
```
