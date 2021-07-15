// Variable declaration for querySelcetors of the html
var countDown = 120; // countdown gives 12 seconds per question
var holdInterval = 0; // hold interval time
var deduct = 10; // deducts 10 seconds for wrong answer
var createUl = document.createElement("ul"); // creates a new ul element

// Variable declaration to query the DOM
var timer = document.querySelector(".timer");
var startTimer = document.querySelector(".start");
var questions = document.querySelector(".questionList");
var wrapper = document.querySelector("#wrapper");


// Variable Declaration
var score = 0;
var questionIndex =0;

var questions = [ // Variable with an object and array for questions to JavaScript Quiz
    {   banner: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        rightAnswer: "all of the above"
    },
    {
        banner: "When writing an array, what do you enclose the array with?",
        choices: ["curly brackets", "parentheses", "quotes", "square brackets"],
        rightAnswser: "square brackets"
    },
    {   
        banner: "What symbol is used to make a comment on JavaScript?",
        choices: ["forward slashes", "back slashes", "semi-colons", "asteriks"],
        rightAnswer: "forward slashes"
    },
    {
        banner: "When setting variables, which would you use for the right syntax?",
        choices: ["variables", "store", "var", "const"],
        rightAnswer: "var"
    },
    {
        banner: "What is an Array?",
        chocies: ["A special varibale, that holds more than one value at a time.", "A variable that can store a single value at one time.", "A tutorial explaining the clarification of a source.", "An Arithmetic operator that can perform arithmatic equations."],
        rightAnswer: "A special variable, that holds more than one value at a time"
    },
    {
        banner: "There are three languages that a developer must learn HTML, CSS, and JavaScript, what is JavaScript used for?",
        choices: ["to define content of a webpage", "to specify the layout of a webpage", "to program the behavior of a webpage", "to have a menu always display on the left"],
        rightAnswer: "to program the behavior of a webpage"
    },
    {
        banner: "What two keywords provide Block Scope in JavaScript?",
        choices: ["var, function", "let, const", "class, id", "const, else"],
        rightAnswer: "let, const"
    },
    {
        banner: "What does JavaScript use in programming you want a data type that can only have one of two values?",
        choices: ["function", "string", "boolean", "number"],
        rightAnswer: "boolean"
    },
    {
        banner: "What does the operator !== mean?",
        choices: ["not equal", "not equal value or not equal type", "greater than", "equal type and equal value"],
        rightAnswer: "not equal value or not equal type"
    },
    {
        banner: "Select the different kinds of for loops:",
        choices: ["for", "for/of", "do/while", "while", "all of the above"],
        rightAnswer: "all of the above"
    }
];

// This event will trigger when the button is clicked
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            countDown--;
            currentTime.textContent = "Current Time: " + countDown;

            if (countDown <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "You ran out of time!";
            }
        }, 1000);
    }
    render(questionIndex);
});