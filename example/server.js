const {
  getStatus,
  openingHours,
  availableForPickup,
  getPackageWeight,
  destinationAsAddress,
} = require(`bpost`);

const ID = `323267009691651472`;

getStatus(ID).then(r => console.log(r)); // 📋 {"name":"processing", "status":"active", …}

openingHours(ID, `monday`).then(r => console.log(r.open, r.close)); // 📋 "07:00", "19:00"

availableForPickup(ID).then(r => console.log(r)); // 📋 `true` or `false` according to  availibilty.

getPackageWeight(ID).then(r => console.log(r)); // 📋 2000 (returned in metric grams))

destinationAsAddress(ID).then(r => console.log(r)); // 📋 "Pathoekeweg 73, 8000 Brugge"
