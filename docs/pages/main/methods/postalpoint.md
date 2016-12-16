---
title: Postal Point
permalink: postalpoint
sidebar: main
---
## `#sourcePostalPoint`

### Description
`bpost.sourcePostalPoint()` will return the name of the postal point where the sender drops off the package.
It requires one passed parameter `id` returns the data for the `location.en` key proceeding the `"key":"received.domestic-corner"` pair.

It supports [multi-language returns](/multilanguage), either [constructed with a session](/constructing) or passed directly as a parameter.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<String>`|
|`(id: String, ?en: String)`|`Promise<String>`|

### Usage
```js
import { sourcePostalPoint } from 'bpost';

sourcePostalPoint(`323267009691651472`).then(res => res);
sourcePostalPoint(`323267009691651472`, 'nl').then(res => res);
```

### Output
```js
'PP PRESS SHOP WAASLAND'
```

## `#destinationPostalPoint`

### Description
`bpost.destinationPostalPoint()` will return the name of the postal point chosen as destination.
It requires one passed parameter `id` returns the data with the `events.deliveryPoint.name.en: …` value in the API response.

It supports [multi-language returns](/multilanguage), either [constructed with a session](/constructing) or passed directly as a parameter.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<String>`|
|`(id: String, ?lang: String)`|`Promise<String>`|

### Usage
```js
import { destinationPostalPoint } from 'bpost';

destinationPostalPoint(`323267009691651472`).then(res => res);
destinationPostalPoint(`323267009691651472`, `nl`).then(res => res);
```

### Output
```js
'POSTPUNT OCTA+ BRUGGE'
```

## `#destinationAsAddress`

### Description
`bpost.destinationAsAddress()` will return a formatted string containing the address of the destination postal point.
It requires one passed parameter `id` returns the data with the `deliveryPoint.en: …` value in the API response.

It supports [multi-language returns](/multilanguage), either [constructed with a session](/constructing) or passed directly as a parameter.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<String>`|
|`(id: String, ?lang: String)`|`Promise<String>`|

### Usage
```js
import { destinationAsAddress } from 'bpost';

destinationAsAddress(`323267009691651472`).then(res => res);
destinationAsAddress(`323267009691651472`, nl).then(res => res);
```

### Output
```js
'Pathoekeweg 74, 8000 Brugge'
```

## `#openingHours`

### Description
`bpost.openingHours()` will return the opening and closing hours the destination postal point on a given day.
It requires two passed parameters `id` and `day` and returns the data with the `deliveryPoint.openingSchedules: {…}` value in the API response.


### Spec

|Parameters|Return type|
|---|---|
|`(id: String, day: String)`|`Promise<Object>`|

### Usage
```js
import { openingHours } from 'bpost';

openingHours(`323267009691651472`, 'monday').then(res => res);
```

### Output
```js
{
  open: "07:00",
  close: "19:00",
}
```

## `#destinationCoordinate`

### Description
`bpost.destinationCoordinate()` will return a 2D lat long coordinate for the destination postal point.
It requires one passed parameter `id` returns the data with the `deliveryPoint.latitude: …` and `deliveryPoint.longitude: …` values in the API response, formatted as an object.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Object>`|

### Usage
```js
import { destinationCoordinate } from 'bpost';

destinationCoordinate(`323267009691651472`).then(res => res);
```

### Output
```js
{
  longitude: 3.21387,
  latitude: 51.23154,
}
```
