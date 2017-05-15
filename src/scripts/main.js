import {
  candidateInfo,
  candidatePositions,
  questions
} from './data';

// Set up the responsive iframe
var pymChild = new pym.Child();
pymChild.sendHeight();

var voterPosition = [];
var voterSimilarities = [];
var currentQuestion = 0;
var numberOfQuestions = questions.length;
// Maximum distance is the longest diagonal of a hypercube. Sigh, I know.
// You just want four times the square root of the number of questions
// var maximumDistance = 4 * Math.sqrt(10);
var maximumDistance = 12;
var winningID;

var calculateSimilarities = function calculateSimilarities () {
  console.log("Voter position:");
  console.log(voterPosition);
  let i = 0;
  while (i < candidatePositions.length) {
    var similarity = calculateDistance(candidatePositions[i].position, voterPosition);
    var percentage = Math.round(( 1 - ( similarity / maximumDistance ) ) * 100);
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
  console.log(voterSimilarities);
};

var calculateDistance = function calculateDistance (pointOne, pointTwo) {
  if (pointOne.length === pointTwo.length) {
    var totalForRooting = 0;
    let dimension = 0;
    while (dimension < pointOne.length) {
      let difference = pointOne[dimension] - pointTwo[dimension]
      totalForRooting = totalForRooting + (difference * difference);
      dimension++;
    };
    var distance = Math.sqrt(totalForRooting);
    return distance;
  };
};

function goToQuestion(number) {
  // Next Question operation
  if (number === numberOfQuestions) {
    calculateSimilarities();
    winningID = voterSimilarities[0].id;
    displayResults();
  } else {
    jQuery(".VC-question-options").empty();
    var currentQuestionArray = questions[currentQuestion];
    jQuery(".VC-question-number").text((currentQuestion + 1) + "/" + numberOfQuestions);
    jQuery(".VC-question-body").text(currentQuestionArray.question);
    for (let option in currentQuestionArray.options) {
      jQuery(".VC-question-options").append(
        "<p><input type='radio' name='answer'" +
        "value='" + currentQuestionArray.options[option] + "'>" +
        option +
        "</input></p>");
    };
    pymChild.sendHeight();
  };
};

function displayResults () {
  jQuery(".VC-question-panel").fadeOut(
    "slow",
    function() {
      const secondID = voterSimilarities[1].id;
      const secondPercentage = voterSimilarities[1].percentage;
      const secondName = candidateInfo[secondID].name;
      const thirdID = voterSimilarities[2].id;
      const thirdPercentage = voterSimilarities[2].percentage;
      const thirdName = candidateInfo[thirdID].name;
      jQuery(".VC-results-name").text(candidateInfo[winningID].name);
      jQuery(".VC-results-similarity").text(
        "You are " + voterSimilarities[0].percentage + "% similar."
      );
      jQuery(".VC-results-slogan").text("Slogan: " + candidateInfo[winningID].slogan);
      jQuery(".VC-results-faction").text("Factional allegiance: " + candidateInfo[winningID].faction);
      jQuery(".VC-results-summary").text(`You were also close to ${secondName} (${secondPercentage}%) and ${thirdName} (${thirdPercentage}%).`);
      jQuery(".VC-results-panel").fadeIn();
      pymChild.sendHeight();
    }
  );
};

function submitAnswer () {
  var selectedValue = jQuery("input[name='answer']:checked").val();
  if (!selectedValue) {
    jQuery(".VC-alert").slideToggle().text("Pick an answer first");
    pymChild.sendHeight();
    return false;
  } else {
    voterPosition.push(parseInt(selectedValue));
    jQuery(".VC-alert").hide()
    pymChild.sendHeight();
    currentQuestion = currentQuestion + 1;
    return goToQuestion(currentQuestion);
  };
};


//var summary = "You were " + voterSimilarities[0].percentage + "% similar to " +
//              candidateInfo[winningID].name + ". Vote for them.";
//jQuery(".VC-question-body").html(summary);

jQuery(document).ready( function () {
  //var theObject = questions[currentQuestion].options;
  //console.log(theObject);
  //var theKeys = Object.keys(theObject);
  //console.log(theKeys);
  //for (let key of theKeys) {
    //var theOption = theObject[key];
    //console.log(theOption);
  //};

  goToQuestion(0);
  jQuery("#VC-submit-button").click(function() {
    submitAnswer();
  });
});
