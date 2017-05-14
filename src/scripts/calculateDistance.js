// src/scripts/calculateDistance.js
var calculateDistance = function calculateDistance (pointOne, pointTwo) {
  if (pointOne.length === pointTwo.length) {
    var totalForRooting = 0;
    var dimension = 0;
    while (dimension < pointOne.length) {
      difference = pointOne[dimension] - pointTwo[dimension]
      totalForRooting = totalForRooting + (difference * difference);
      dimension++;
    };
    distance = Math.sqrt(totalForRooting);
    return distance;
  };
};

export default calculateDistance;
