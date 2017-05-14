// src/scripts/calculateSimilarities.js
import { candidatePositions } from './data';

var calculateSimilarities = function calculateSimilarities () {
  let i = 0;
  while (i < candidatePositions.length) {
    similarity = calculateDistance(candidatePositions[i].position, voterPosition);
    percentage = Math.round(( 1 - ( similarity / maximumDistance ) ) * 100);
    voterSimilarities.push({
      id: candidatePositions[i].id,
      similarity: similarity,
      percentage: percentage
    });
    i++;
  };
  voterSimilarities.sort( function(a,b) {
    return a.similarity - b.similarity;
  });
};

export default calculateSimilarities;
