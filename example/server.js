const bpost = require(`bpost`);

const pkg = bpost(`323267009691651472`);

pkg.getStatus().then(r => console.log(r)); // 📋 {"name":"processing", "status":"active", …}

pkg.openingHours(`monday`).then(r => console.log(r.open, r.close)); // 📋 "07:00", "19:00"

pkg.availableForPickup().then(r => console.log(r)); // 📋 `true` or `false` according to  availibilty.

pkg.getPackageWeight().then(r => console.log(r)); // 📋 2000 (returned in metric grams))

pkg.destinationAsAddress().then(r => console.log(r)); // 📋 "Pathoekeweg 73, 8000 Brugge"
