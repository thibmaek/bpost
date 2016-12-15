---
title: Package Info
permalink: packageinfo
sidebar: main
---
#### packageInfo.js
__bpost#getPackageWeight()__
> Number: returns the package weight in grams

__bpost#deliveryMethod()__
> String: returns the requested delivery method
(e.g `"POSTAL_POINT"`)

__bpost#identifier()__
> Number: returns the internal id for package
_❗ this is different from the itemIdentifier param passed to the methods as first argument_

__bpost#hasRetourOptions()__
> Boolean: returns true when package is eligible for retour

__bpost#receiver(formatted: Boolean)__
> Object: returns data for the receiver
> String: returns a formatted string with receiver data
(eg. `"THIBAULT MAEKELBERGH, 8000 BRUGGE, BE"`)
