const {
  getStatus,
  openingHours,
  availableForPickup,
  getPackageWeight,
  destinationAsAddress,
} = require(`bpost`);

const currStatus = getStatus(`323267009691651472`);
console.log(currStatus); // 📋 {"name":"processing", "status":"active", …}
console.log(currStatus.knownProcessStep); // 📋 "PROCESSING" (if you just want the current step)

const hours = openingHours(`323267009691651472`, `monday`);
console.log(hours.open, hours.close); // 📋 "07:00", "19:00"

const available = availableForPickup(`323267009691651472`);
console.log(available); // 📋 `true` or `false` according to availability

const weight = getPackageWeight(`323267009691651472`);
console.log(weight); // 📋 2000 (returned in metric grams)

const postalPointAddress = destinationAsAddress(`323267009691651472`);
console.log(postalPointAddress); // 📋 "Pathoekeweg 73, 8000 Brugge"
