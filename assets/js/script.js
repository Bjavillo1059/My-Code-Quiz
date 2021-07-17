
var questions = [ // Variable with an object and array for questions to JavaScript Quiz
    {   question: "Arrays in Javascript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    rightAnswer: "all of the above"
},
{
    question: "When writing an array, what do you enclose the array with?",
    choices: ["curly brackets", "parentheses", "quotes", "square-brackets"],
    rightAnswer: "square brackets"
},
{   
    question: "What symbol is used to make a comment on JavaScript?",
    choices: ["forward slashes", "back slashes", "semi-colons", "asteriks"],
    rightAnswer: "forward slashes"
},
{
    question: "When setting variables, which would you use for the right syntax?",
    choices: ["variables", "store", "var", "const"],
    rightAnswer: "var"
},
{
    question: "What is an Array?",
    chocies: ["A special varibale, that holds more than one value at a time.", "A variable that can store a single value at one time.", "A tutorial explaining the clarification of a source.", "An Arithmetic operator that can perform arithmatic equations."],
    rightAnswer: "A special variable, that holds more than one value at a time"
},
{
    question: "There are three languages that a developer must learn HTML, CSS, and JavaScript, what is JavaScript used for?",
    choices: ["to define content of a webpage", "to specify the layout of a webpage", "to program the behavior of a webpage", "to have a menu always display on the left"],
    rightAnswer: "to program the behavior of a webpage"
},
{
    question: "What two keywords provide Block Scope in JavaScript?",
    choices: ["var, function", "let, const", "class, id", "const, else"],
    rightAnswer: "let, const"
},
{
    question: "What does JavaScript use in programming you want a data type that can only have one of two values?",
    choices: ["function", "string", "boolean", "number"],
    rightAnswer: "boolean"
},
{
    question: "What does the operator !== mean?",
    choices: ["not equal", "not equal value or not equal type", "greater than", "equal type and equal value"],
    rightAnswer: "not equal value or not equal type"
},
{
    question: "Select the different kinds of for loops:",
    choices: ["for", "for/of", "do/while", "while", "all of the above"],
    rightAnswer: "all of the above"
}
];

// Variable declaration for querySelcetors of the html
var countDown = 120; // countdown gives 12 seconds per question
var holdInterval = 0; // hold interval time
var deductTime = 10; // deducts 10 seconds for wrong answer
var createUl = document.createElement("ul"); // creates a new ul element

// Variable declaration to query the DOM
var timer = document.querySelector(".timer"); // div timer 
var questionsList = document.querySelector(".questionsList"); // figure class of questiosList
var wrapper = document.querySelector("#wrapper"); // section id
var startTimer = document.querySelector("#generate") // start buttom query


// Variable Declaration
var score = 0; // score starts at 0
var questionListing = 0; // the order of the questionListing is from 0-9

// Variable Declaration
var correctAnswers = ["Awesome, that is correct.  The answer is: ", "Excellent! the correct answer is: ", "Good Job, the answer is: "];
var answerCorrect = 0;
var wrongAnswers = [ "Ding ding ding, wrong!  The answer is: ", "Try again! the correct answer is: ", "Error, you selcted wrong.  The answer is: "]
var answerWrong = 0;



// function renderLastRegistered() 
   // var score = localStorage.getItem("highscore")
   // userScoreSpan.innerHTML = score


// This event will trigger when the button is clicked
startTimer.addEventListener("click", function (event) {
    if (holdInterval === 0) { //set to zero so check for zero
        holdInterval = setInterval(function () {
            countDown--;
            timer.innerHTML = "Current Time: " + countDown;
        
            if (countDown <= 0) {
                clearInterval(holdInterval);
                allComplete();
                currentTime.textContent = "You ran out of time!";
            }
        }, 1000);
    }
    render(questionListing);
});

// renders the questions and choices to the page
function render(questionListing) {  
    questionsList.innerHTML = "";  // clears data existing previously
    createUl.innerHTML = "";  // creates an unorderlist
    // for loop that cycles through the array of questions
    for (let i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionListing].question;
        var userChoice = questions[questionListing].choices;
        questionsList.textContent = userQuestion;
    };
    // renders a new question for each set of question choices
    userChoice.forEach(function (createNew) {
        var listItem = document.createElement("li");
        listItem.textContent = createNew;
        questionsList.appendChild(createUl);
        createUl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    });
// localStorage.setItem("highscore", scores)
}

// comparing user choices to answers selected
function compare(compareElement) {
    var compareElement = compareElement.target;

    if (compareElement.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "userAnswer");
            // compares the users answer to the correct one and will wither add a point or deduct time
        if (compareElement.textContent == questions[questionListing].rightAnswer) {
            score++;
            console.log(score)
            // render text congratulating the correct answer
            createDiv.innerHTML = correctAnswers + questions[questionListing].rightAnswer;
        } else {
            // deduct 10 seconds for wrong answers
            countDown = countDown - deductTime;
            // renders with wrong answer text and gives the correct answer to the question
            createDiv.innerHTML = wrongAnswers + questions[questionListing].rightAnswer;
        }
    }
    // determines which number question the user is on
    questionListing++;

    // when running out of time create a closing text with score and answer list
    if (questionListing >= questions.length) {
        allComplete();
        // text to be created with data populated by user
        createDiv.textContent = "You have reach the end of the quiz! " + "Your total score " + score + "and " + questions.length + "Correct!!!";
    } else {
        render(questionListing);
    }
    // creates div with text of completion and score
    questionsList.appendChild(createDiv);
}