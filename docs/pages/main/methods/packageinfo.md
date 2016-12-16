---
title: Package Info
permalink: packageinfo
sidebar: main
---
## `#getPackageWeight`

### Description
`bpost.getPackageWeight()` will return the weight of a package in grams.
It requires one passed parameter `id` returns the data with the `weightInGrams: …` value in the API response.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Number>`|

### Usage
```js
import { getPackageWeight } from 'bpost';

getPackageWeight(`323267009691651472`).then(res => res);
```

### Output
```js
400
```

## `#identifier`

### Description
`bpost.identifier()` will return the internal identifier for track & trace.
It requires one passed parameter `id` and returns the data with the `key.id: …` value in the API response.

{% include note.html
  content='This result of this method should rarely be used in an application and should only be used as a reference when communicating with bpost directly.<br> It is not to be confused with the item identifier you pass to the module/method which represents the barcode/id of a package/'
%}

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Number>`|

### Usage
```js
import { identifier } from 'bpost';

identifier(`323267009691651472`).then(res => res);
```

### Output
```js
776158581
```

## `#deliveryMethod`

### Description
`bpost.deliveryMethod()` will return the requested delivery method for a package.
It requires one passed parameter `id` and returns the data with the `requestedDeliveryMethod: …` value in the API response, formatted into a lowercase string.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<String>`|

### Usage
```js
import { deliveryMethod } from 'bpost';

deliveryMethod(`323267009691651472`).then(res => res);
```

### Output
```js
'Postal Point'
```

## `#hasRetourOptions`

### Description
`bpost.hasRetourOptions()` will return if a package is eligible for returning to sender, in the form of a boolean.
It requires one passed parameter `id` and returns the data with the `retourOrBackToSender: …` value in the API response.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Boolean>`|

### Usage
```js
import { hasRetourOptions } from 'bpost';

hasRetourOptions(`323267009691651472`).then(res => res);
```

### Output
```js
true // mirrored from API response
false // mirrored from API response
```

## `#receiver`

### Description
`bpost.receiver()` will return data with recipient details.
It requires one passed parameter `id` and returns the data with the `receiver: {…}` value in the API response.

It supports an optional parameter `formatted` to, instead of the full object, return a formatted string. This defaults to false when the parameter is omitted.

### Spec

|Parameters|Return type|
|---|---|
|`(id: String)`|`Promise<Object>`|
|`(id: String, formatted?: Boolean)`|`Promise<String>`|

### Usage
```js
import { receiver } from 'bpost';

receiver(`323267009691651472`).then(res => res);
receiver(`323267009691651472`, true).then(res => res);
```

### Output
```js
// without formatted param passed
{
  name: "MAEKELBERGH THIBAULT",
  countryCode: "BE",
  postcode: "8000",
  municipality: "BRUGGE"
}

// with formatted passed as true
'MAEKELBERGH THIBAULT, 8000 BRUGGE, BE'
```
