// src/scripts/goToQuestion.js
import { questions } from './data';

var numberOfQuestions = questions.length;

var goToQuestion = function goToQuestion(number) {
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
  };
};

export default goToQuestion;
