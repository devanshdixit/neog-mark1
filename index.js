var readLineSync = require('readline-sync');

var score = 0;


function play(question,answer){
  var userAnswer = readLineSync.question(question);
  console.log("\n-------------------------------------------");
  if(userAnswer === answer){
    console.log("You are right");
    score = score + 1;
  }else{
    console.log("Man, I didn't expected this!")
     score = score - 1;
  }

  console.log("current score is",score);
  console.log("-------------------------------------------\n");
}

function welcome() {
 var userName = readLineSync.question("What's your name? ");
  console.log("\nWelcome,"+ userName);
  console.log("-------------------------------------------\n");
}

function showScores() {
  console.log("\n-------------------------------------------");
  console.log("Congratulations, your score is: ", score);
  console.log("-------------------------------------------\n");
}

var questions = [
{
  question: "Which editor I like the most?\n",
  answer: "vscode"
},
{
  question: "What blockchain is my favourite one?\n",
  answer: "Etherum"
},
{
  question: "What do I always talk about?\n",
  answer: "business"
},
{
  question: "What is my go to drink\n",
  answer: "tea"
},
{
  question: "What is my favourite movie\n",
  answer: "GodFather"
},
];

welcome();
for(var i=0 ; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
showScores()