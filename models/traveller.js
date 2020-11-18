const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDist = this.journeys.reduce((totalDist, journey) => {
    return totalDist += journey.distance;
  },0)
  return totalDist;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // const travelTypes = [];
  // return this.journeys.filter((journey) => {
  //   return travelTypes.push(journey[transport]);
  // })
  // return travelTypes;
// };
return this.journeys.map((journey) => journey.transport).filter((value, index, self) => self.indexOf(value) === index)
};


module.exports = Traveller;
