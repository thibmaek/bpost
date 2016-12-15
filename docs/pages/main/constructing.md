---
permalink: constructing
sidebar: main
---
# Constructing a track & trace session with bpost
With the module installed and imported/required you'll first need to construct a new instance to tell bpost which
package to track. This constructor expects 1 parameter `id` that corresponds to the id or barcode for your package:

```js
import bpost from 'bpost';

const ID = `323267009691651472`;
const pkg = bpost(ID);
```

After the module is constructed you can call methods directly on the constructor:

```js
…
const status = pkg.getStatus();
const src = pkg.sourcePostalPoint();
const weight = pkg.packageWeight();
…
```

## Destructured method imports
When you destructure your imports to only load the methods your project requires you'll need to explicitly pass the ID
to the methods each time you call one:

```js
import { getStatus, sourcePostalPoint, packageWeight } from 'bpost';

const ID = `323267009691651472`;
getStatus(ID);
sourcePostalPoint(ID);
packageWeight(ID);
```

Do note that this constructor is actually just passing along the id and doesn't actually act as a programmatic
constructor. Therefore there is nothing exposed to the global so this won't work:

```js
import bpost, { getStatus, sourcePostalPoint, packageWeight } from 'bpost';

const ID = `323267009691651472`;
bpost(ID);

// all three below will error with `cannot read … of undefined`
// because they don't share the ID passed to the above function
getStatus();
sourcePostalPoint();
packageWeight();
```
