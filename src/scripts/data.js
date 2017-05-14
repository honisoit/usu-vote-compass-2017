// src/scripts/data.js
var candidateInfo = {
  "1": { "name":"Cam Hawkins", "slogan":"Captain Hawkins", "pageURL":"https://www.facebook.com/HawkThePlank"},
  "2": { "name":"Courtney Thompson", "slogan":"Count on Courtney", "pageURL":"https://www.facebook.com/Count-On-Courtney-Courtney-Thompson-for-Union-Board-1572147623115552"},
  "3": { "name":"Dom Bondar", "slogan":"Is Dom. Is Good.", "pageURL":"https://www.facebook.com/dombondarforunionboard"},
  "4": { "name":"Esther Shim", "slogan":"Shimmy on Board", "pageURL":"https://www.facebook.com/ShimmyonBoard"},
  "5": { "name":"Grace Franki", "slogan":"Embrace Grace", "pageURL":"https://www.facebook.com/embracegraceforusu"},
  "6": { "name":"James Gibson", "slogan":"No More Games Just Vote James", "pageURL":"https://www.facebook.com/JustVoteJames"},
  "7": { "name":"Sam Kwon", "slogan":"Give a Damn, Vote Sam", "pageURL":"https://www.facebook.com/DamnSam4Board"},
  "8": { "name":"Vanessa Song", "slogan":"V for Vanessa", "pageURL":"https://www.facebook.com/VforVanessaUSU"}
}

var candidatePositions = [
  {"id":1,"position":[5,2,4,5,1,1,3,5,4,4]},
  {"id":2,"position":[3,5,4,5,4,1,4,5,4,5]},
  {"id":3,"position":[3,5,1,1,5,5,1,1,4,2]},
  {"id":4,"position":[5,5,4,2,4,2.5,5,3,4,4]},
  {"id":5,"position":[5,3,4,4,4,4,5,3,4,2]},
  {"id":6,"position":[1,2,5,1,1,1,2,1,5,3]},
  {"id":7,"position":[1,2,4,4,5,3,5,3,4,4]},
  {"id":8,"position":[1,4,3,3,5,1,4,5,2,4]}
];

var questions = [
  {
  question: "Would you vote for a candidate who is required to vote as their political faction directs them?",
  options:	{"Yes":1, "No":5}
}, {
  question: "Do you agree that the USU should allow religious societies to exclude people with other beliefs?",
  options: {"Strongly disagree":1, "Somewhat disagree":2, "Neutral":3, "Somewhat agree":4, "Strongly Agree": 5}
}, {
  question: "How much do you value the USU pursuing environmentally friendly policies?",
  options: {"Burn all the coal":1, "Leave a light on": 2, "Don't care":3, "I like recycling":4, "Chain yourself to a coal truck":5}
}, {
  question: "How important is it to you that Board Directors have experience running USU clubs or events?",
  options: {"Not important at all":1, "Not very important":2, "Netural":3, "Important":4, "Very important":5}
}, {
  question: "Would you prefer the USU paid student employees more or reduced the cost of ACCESS cards?",
  options: {"Pay student employees": 1, "Neither":3, "Reduce the cost of ACCESS cards":5}
}, {
  question: "How much should the USU prioritise getting large chain stores, like McDonalds, on campus?",
  options: {"The USU shouldn't pursue large chains":1, "It doesn't matter":3, "It should be a priority":4, "Large chains should be the top priority":5}
}, {
  question: "Should the USU should begin introducing more quotas for marginalised groups, like queer students or people of colour?",
  options: {"Definitely not":1, "Probably not":2, "Neutral":3, "Probably":4, "Definitely":5}
}, {
  question: "The USU should prioritise making their parties better.",
  options: {"Definitely not":1, "Probably not":2, "Neutral":3, "Probably":4, "Definitely":5}
}, {
  question: "Do you agree that a Board Director should act in the interests of students, even if it means breaking their legal duties to the board?",
  options: {"Strongly disagree":1, "Somewhat disagree":2, "Neutral":3, "Somewhat agree":4, "Strongly Agree": 5}
}, {
  question: "Do you agree that the USU should fund more student art and culture, even if it is to the detriment of other initiatives?",
  options: {"Strongly disagree":1, "Somewhat disagree":2, "Neutral":3, "Somewhat agree":4, "Strongly Agree": 5}
}];

export {
  candidateInfo,
  candidatePositions,
  questions
}
