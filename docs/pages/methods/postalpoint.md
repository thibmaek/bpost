---
layout: method
---
#### postalPointOptions.js
__bpost#sourcePostalPoint()__
> String: returns the English name for the postal point where your package is delivered by the sender

__bpost#destinationPostalPoint()__
> String: returns the English name for the postal point where your package is delivered for the recipient

__bpost#destinationAsAddress()__
> String: returns a formatted string with the complete destination address
(eg. `"Pathoekeweg 73, 8000 Brugge"`)

__bpost#openingHours(day: String)__
> Object: returns opening and closing times on the given day
(eg. `{ open: "07:00", close: "19:00" }`)

__bpost#destinationCoordinate()__
> Object: returns a 2D lat long coordinate of the destination
(eg. `{ "longitude": 3.21387, "latitude": 51.23154, }`)
