
// needs to have a start button - complete
// when the start button is clicked a timer starts and questions appear with multiple choice - complete
// when a question is answered another question is presented
// if a question is answered correctly a point is awarded - ?points are awarded, but is not saving to local storage?
// if a question is answered incorrectly 10 seconds is deducted from the running time - complete
// when the timer reaches 0 the game is over
// at the end of the game you can enter your initials and save your score



// src of base code // Jamierachael(19July2021)Code Quiz(javascript)[structure/compare function] //
// src of base code // mmei/Mengmei Tu(19July2021)Code Quiz(javascript)[structure/questions]

// Variable declaration to query the DOM
var timer = document.querySelector("#timer"); // div timer 
var timeEl = document.querySelector(".time")
var questionsList = document.querySelector(".questionsList"); // figure class of questiosList
var wrapper = document.querySelector("#wrapper"); // section id
var startTimer = document.querySelector("#generate") // start buttom query

// Variable declaration for global settings of the html
var countDown = 50; // countdown gives 10 seconds per question
var holdInterval = 0; // hold interval time
var deductTime = 7; // deducts 10 seconds for wrong answer
var createUl = document.createElement("ul"); // creates a new ul element


// Variable Declaration
var score = 0; // score starts at 0
var questionListing = 0; // the order of the questionListing starts at 0

// Variable Declaration
var correctAnswers = ["Awesome, that is correct.  The answer is: ", "Excellent! the correct answer is: ", "Good Job, the answer is: "];
var wrongAnswers = [ "Ding ding ding, wrong!  The answer is: ", "Try again! the correct answer is: ", "Error, you selcted wrong.  The answer is: "];


// Variable with an object and array for questions to JavaScript Quiz
var questionIndex = [ 
{
    question: "Arrays in Javascript can be used to store ____.",
    answers: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
    rightAnswer: "d. all of the above"
},        
{
    question: "When writing an array, what do you enclose the array with?",
    answers: ["a. curly brackets", "b. parentheses", "c. quotes", "d. square brackets"],
    rightAnswer: "d. square brackets"
},        
{   
    question: "What symbol is used to make a comment on JavaScript?",
    answers: ["a. forward slashes", "b. back slashes", "c. semi-colons", "d. asteriks"],
    rightAnswer: "forward slashes"
},        
{
    question: "When setting variables, which would you use for the right syntax?",
    answers: ["a. variables", "b. store", "c. var", "d. function"],
    rightAnswer: "c. var"
},
{
    question: "Select the different kinds of for loops:",
    answers: ["a. while", "b. for/of", "c. do/while", "d. all of the above"],
    rightAnswer: "d. all of the above"
}, 
{
    question: "What does the method JSON.stringify do?",
    answers: ["a. converts a js object into a JSON string", "b. parses a JSON string and returns it to a js object", "c. converts js into an array", "d. returns a js string into an object"],
    rightAnswer: "a. converts a js object into a JSON string"
},
{
    question: "When you use an array property prototype, what does it do?",
    answers: ["a. returns the function that created the Array object's prototype", "b. allows you to add properties and methods to an Array object", "c. sets or returns the number of elements in an array", "joins two or more arrays, and returns a copy of the joined arrays"],
    rightAnswer: "b. allows you to add properties and methods to an Array object"
}        
];

renderLastRegistered();

function renderLastRegistered() {
    var user = localStorage.getItem('initials')
    var userScore = localStorage.getItem('userScore')
}

var userInitials = document.querySelector("#initials").value;
var userFinal = document.querySelector("#userScore").value;


// This event will trigger when the button is clicked
startTimer.addEventListener("click", function (event) {
    if (holdInterval === 0) { //set to zero so check for zero
        holdInterval = setInterval(function () {
            countDown--;
            timer.innerHTML = "Current Time: " + countDown;
            
            if (countDown <= 0) {
                clearInterval(holdInterval);
                quizCompleted();  
                timer.innerHTML = "You ran out of time!";

            }
        }, 1000);
    }
    render(questionListing);
    console.log();
});

// make a function to stop timer at the end of the last question


// renders the questions and answers to the page
function render(questionListing) {  
    questionsList.innerHTML = "";  // clears data existing previously
    createUl.innerHTML = "";  // creates an unorderlist
    // for loop that cycles through the array of questions
    for (let i = 0; i < questionIndex.length; i++) {
        var userQuestion = questionIndex[questionListing].question;
        var userChoice = questionIndex[questionListing].answers;
        questionsList.innerHTML = userQuestion;
    }
    // renders a new question for each set of question answers
    userChoice.forEach(function (userSelect) {
        var listItem = document.createElement("li");
        listItem.innerHTML = userSelect;
        questionsList.appendChild(createUl);
        createUl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
};


// comparing user answers to rightAnswer selected
function compare(event) {
    var compareEl = event.target;
    
    if (compareEl.matches("li")) {
        
        var createDiv = $("<div>");
        createDiv.attr("id", "userAnswer");
        console.log();
        
        // compares the users answer to the correct one and will choose whether top add a point or deduct time
        if (compareEl.textContent == questionIndex[questionListing].rightAnswer) {
            score++;
            console.log(score)            
            // variables that set array to a number
            var correctIndex = Math.floor(Math.random() * correctAnswers.length)
            // render text congratulating the correct answer
            createDiv.textContent = correctAnswers[correctIndex] + questionIndex[questionListing].rightAnswer;   
        } else {
            var wrongIndex = Math.floor(Math.random() * wrongAnswers.length)
            // deduct 10 seconds for wrong answers
            countDown = countDown - deductTime;
            // renders with wrong answer text and gives the correct answer to the question
            createDiv.textContent = wrongAnswers[wrongIndex] + questionIndex[questionListing].rightAnswer;
        }
    // determines which number question the user is on
    questionListing++;
        
        // when running out of time create a closing text with score and answer list
        if (questionListing >= questionIndex.length) {
            console.log(questionListing)
            quizCompleted();
            // text to be created with data populated by user
            createDiv.textContent = "You have reach the end of the quiz! " + "Your total score is" + " " + score + " of " + "" + questionIndex.length + " Correct!!!";    
        } else {
            render(questionListing); //  renders list of questions
        }
        $("#scoreDiv").append(createDiv); // attaching the created div to scoreDiv 
    }
};

function quizCompleted() {
    questionsList.innerHTML = "";
    timer.innerHTML = "";
    
    if (countDown >= 0) {
        var userScore = $('#userScore');
        clearInterval(holdInterval);
        userScore.text("Your final score is: " + countDown);
    }
    
   // document.querySelector(".time")classlist.toggle('hidden');
}
var cardEl = $('#card');

function sendMessage() {
    timeEl.innerHTML = " Game Over! ";
    var imgEl = $('<script>');
    imgEl.attr("src", "assets/images/Game Over.PNG");
    cardEl.appendTo(imgEl);  
}