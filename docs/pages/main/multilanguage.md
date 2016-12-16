---
title: Multi-language data returns
permalink: multilanguage
sidebar: main
---
It is possible to preset a language to get support for mulitple languages.
When constructing a session just pass a language as a string to the second parameter:

```js
import bpost from 'bpost';

const ID = `323267009691651472`;
const pkg = bpost(ID, `nl`);
```

{% include important.html
  content='There are currently three languages available: `en`, `nl` and `fr`'
%}

{% include warning.html
  content='Not every method supports this feature. Be sure to check the documentation for the method!'
%}

Constructing like this will make sure that every method that offers support for multi-language data returns will return it in the chosen language. When you don't pass a language while constructing, bpost will default to English (by under the hood passing `lang = 'en'` as a default parameter).

Do note that while there is support bpost mostly doesn't actually translate them in their backend, thus even though setting your language other than English will always result in the same response. This feature was mainly implemented to be future-proof if they ever decide to translate the values for the language keys.

## Methods
It's also possible to use this when using methods separately trough destructured imports:

```js
import { destinationAsAddress } from 'bpost';

const ID = `323267009691651472`;
destinationAsAddress(ID, `nl`);
```
