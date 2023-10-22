"use strict";
let favouriteTransportation = [];
favouriteTransportation.push(["motorcycle", "Kawasaki"]);
favouriteTransportation.push(["car", "Lamborghini"]);
favouriteTransportation.push(["helicopter", "Appache"]);
favouriteTransportation.forEach(([transport, brand]) => {
    console.log(`I would like to own a ${brand} ${transport}.`);
});
