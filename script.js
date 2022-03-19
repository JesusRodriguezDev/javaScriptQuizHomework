var start_btn = document.querySelector(".start-btn");
var questions_box = document.querySelector(".qna-box");
var start_screen = document.querySelector(".starting-screen");
var high_scores = document.querySelector(".high-scores");
var timer = document.querySelector(".timer");
var question = document.querySelector(".question");
var answers_list = document.querySelector(".answers-list");
var wrong_right = document.querySelector(".wrong-right");
var done_screen = document.querySelector(".done-screen");
var total_score = document.querySelector(".total-score");
var input_box = document.querySelector(".input-box");
var score_list = document.querySelector(".score-list");
var hs_buttons = document.querySelector(".hs-buttons");
var go_back = document.querySelector("#go-back");
var clear_hs = document.querySelector("#clear-hs");

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answer: "alerts",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ]
    },
    {
        question:"The condition in an if/else statement is enclosed within ____",
        answer:"parentheses",
        choices:[
            "quotes",
            "curly brackets",
            "parentheses",
            "square brakets"
        ]
    },
    {
        question:"Arrays in JavaScritp can be used to store ____.",
        answer:"all of the above",
        choices:[
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ]
    },
    {
        question:"String values must be closed within ____ when being assigned to variables.",
        answer:"quotes",
        choices:[
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ] 
    },
    {
        question:"A very useful too used during development and debugging for printing content to the debugger is:",
        answer:"console.log",
        choices:[
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ] 
    }
];