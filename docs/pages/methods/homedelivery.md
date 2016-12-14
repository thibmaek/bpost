---
layout: method
---
#### homeDeliveryOptions.js
__bpost#availableFrom()__
> Object: returns the earliest time and day that a package can be picked up after absence

__bpost#availableTo()__
> Object: returns the latest time and day that a package can be picked up after absence

__bpost#availableFromTo()__
> String: returns a formatted string stating the period (in days) a package can be picked up after absence
(e.g `"Available from 2016-11-23 to 2016-12-07"`)

__bpost#attemptedDelivery()__
> Object: returns the time and day that delivery was attempted but receiver was absent

__bpost#actualDelivery()__
> Object: returns the time and day when a package was picked up from the postal point, receiving the absently delivered package
