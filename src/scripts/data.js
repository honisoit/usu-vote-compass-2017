// src/scripts/data.js
var candidateInfo = {
   "1": {
      "name": "Adam Torres",
      "slogan": "Up and Adam",
      "colour": "",
      "faction": "National Labor Students (Labor Left)",
      "pageURL": "https://www.facebook.com/adamforboard/"
   },
   "2": {
      "name": "Alexander Shu",
      "slogan": "We want Shu",
      "colour": "",
      "faction": "Independent",
      "pageURL": "https://www.facebook.com/WeWantShu/"
   },
   "3": {
      "name": "Caitlin McMenamin",
      "slogan": "Choose Caitie",
      "colour": "",
      "faction": "Sydney Labor Students (Labor Left)",
      "pageURL": "https://www.facebook.com/ChooseCaitie/"
   },
   "4": {
      "name": "Claudia Gulbransen-Diaz",
      "slogan": "Harder, Better, Faster, Stronger",
      "colour": "",
      "faction": "Student Unity (Labor Right)",
      "pageURL": "https://www.facebook.com/CLAUDIAforUSU/"
   },
   "5": {
      "name": "Erika Salmon",
      "slogan": "Upstream with Salmon",
      "colour": "",
      "faction": "Independent Liberal",
      "pageURL": "https://www.facebook.com/UpstreamWithSalmon/"
   },
   "6": {
      "name": "Hengjie Sun",
      "slogan": "Hengjie Sun Get Things Done",
      "colour": "",
      "faction": "Independent",
      "pageURL": "https://www.facebook.com/Hengjie-Sun-Get-things-done-Hengjie-For-USU-Board-1756389244672799/"
   },
   "7": {
      "name": "Jacob Masina",
      "slogan": "Team Jacob",
      "colour": "",
      "faction": "Liberal",
      "pageURL": "https://www.facebook.com/TEAMJACOBFORUSU/"
   },
   "8": {
      "name": "Liliana Tai",
      "slogan": "Don't Be Silly, Vote For Lili",
      "colour": "",
      "faction": "Independent",
      "pageURL": "https://www.facebook.com/Lili4USU/"
   },
   "9": {
      "name": "Sally Yang",
      "slogan": "Select Sally",
      "colour": "",
      "faction": "Independent",
      "pageURL": "#"
   },
   "10": {
      "name": "Zhixian Wang",
      "slogan": "Yas Zhixian",
      "colour": "",
      "faction": "Independent",
      "pageURL": "https://www.facebook.com/yaszhixianforusu"
   }
}

var candidatePositions = [
  {"id":1,"position":[1,5,5,5,5,2,5,5,4]},
  {"id":2,"position": [5,3,3,4,3,1,4,4,4]},
  {"id":3,"position": [1,5,5,2,5,1,5,2,2]},
  {"id":4,"position": [1,5,3,1,3,1,2,5,4]},
  {"id":5,"position":[1,1,1,1,1,5,1,3,1]},
  {"id":6,"position": [5,3,3,1,3,1,4,3,1]},
  {"id":7,"position": [1,1,2,5,1,5,1,3,2]},
  {"id":8,"position":[5,4,4,3,3,1,5,1,4]},
  {"id":9,"position":[5,3,3,1,3,1,4,2,3]},
  {"id":10,"position":[3,3,3,3,3,3,3,3,3]}
];

var questions = [
 {
   "question": "Would you vote for a candidate who is a member of a campus political faction?",
   "options": {"Yes":1, "No":5}
 },
 {
   "question": "Should the USU restrict extreme right-wing films, like the Red Pill, from being shown on campus?",
   "options": {"Definitely not":1, "Probably not":2, "Neutral":3, "Probably":4, "Definitely":5}
 },
 {
   "question": "How much do you value the USU pursuing a progressive agenda?",
   "options": {"I'd prefer the exact opposite":1, "I don't value it":2, "I don't care":3, "I value it":4, "I REALLY value it":5}
 },
 {
   "question": "How important is it to you that Board Directors have experience running USU clubs or events?",
   "options": {"Not important at all":1, "Not very important":2, "Netural":3, "Important":4, "Very important":5}
 },
 {
   "question": "Should the USU prioritise giving free ACCESS cards to students who cannot afford them?",
   "options": {"Definitely not":1, "Probably not":2, "Neutral":3, "Probably":4, "Definitely":5}
 },
 {
   "question": "Should the USU prioritise getting large chain stores, like McDonalds, on campus?",
   "options": {"The USU shouldn't pursue large chains":1, "It doesn't matter":3, "It should be a priority":4, "Large chains should be the top priority":5}
 },
 {
   "question": "Should the USU begin introducing more quotas for marginalised groups, like queer students or international students?",
   "options": {"Definitely not":1, "Probably not":2, "Neutral":3, "Probably":4, "Definitely":5}
 },
 {
   "question": "The USU should prioritise making their parties better.",
   "options": {"Definitely not":1, "Probably not":2, "Neutral":3, "Probably":4, "Definitely":5}
 },
 {
   "question": "Do you agree that a Board Director should act in the interests of students, even if it means breaking their legal duties to the board?",
   "options": {"Strongly disagree":1, "Somewhat disagree":2, "Neutral":3, "Somewhat agree":4, "Strongly Agree": 5}
 }
]

var candidateInfo2016 = {
  "1": { "name":"Cam Hawkins", "slogan":"Captain Hawkins", "pageURL":"https://www.facebook.com/HawkThePlank"},
  "2": { "name":"Courtney Thompson", "slogan":"Count on Courtney", "pageURL":"https://www.facebook.com/Count-On-Courtney-Courtney-Thompson-for-Union-Board-1572147623115552"},
  "3": { "name":"Dom Bondar", "slogan":"Is Dom. Is Good.", "pageURL":"https://www.facebook.com/dombondarforunionboard"},
  "4": { "name":"Esther Shim", "slogan":"Shimmy on Board", "pageURL":"https://www.facebook.com/ShimmyonBoard"},
  "5": { "name":"Grace Franki", "slogan":"Embrace Grace", "pageURL":"https://www.facebook.com/embracegraceforusu"},
  "6": { "name":"James Gibson", "slogan":"No More Games Just Vote James", "pageURL":"https://www.facebook.com/JustVoteJames"},
  "7": { "name":"Sam Kwon", "slogan":"Give a Damn, Vote Sam", "pageURL":"https://www.facebook.com/DamnSam4Board"},
  "8": { "name":"Vanessa Song", "slogan":"V for Vanessa", "pageURL":"https://www.facebook.com/VforVanessaUSU"}
}

var candidatePositions2016 = [
  {"id":1,"position":[5,2,4,5,1,1,3,5,4,4]},
  {"id":2,"position":[3,5,4,5,4,1,4,5,4,5]},
  {"id":3,"position":[3,5,1,1,5,5,1,1,4,2]},
  {"id":4,"position":[5,5,4,2,4,2.5,5,3,4,4]},
  {"id":5,"position":[5,3,4,4,4,4,5,3,4,2]},
  {"id":6,"position":[1,2,5,1,1,1,2,1,5,3]},
  {"id":7,"position":[1,2,4,4,5,3,5,3,4,4]},
  {"id":8,"position":[1,4,3,3,5,1,4,5,2,4]}
];

var questions2016 = [
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
