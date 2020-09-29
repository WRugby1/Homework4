//Set variables and objects//
var startButton = document.querySelector(".start-button")
var submitButton = document.querySelector(".submit-button")
submitButton.style.display = "none"
submitButton.disabled = true;
var highScoreButton = document.querySelector(".high-score-button")
highScoreButton.style.display = "none"
var score = 0
var initials = document.querySelector("#initials_input")
initials.style.display = "none"
var questionList = document.querySelector(".question-list")
var timeEl = document.querySelector(".timer")
timeEl.textContent = "Coding quiz, press start to begin"
var questionEl = document.querySelector(".question")
var btn_a = document.createElement("button");
var btn_b = document.createElement("button");
var btn_c = document.createElement("button");
var btn_d = document.createElement("button");
var QuestionNum = 0;
var selectedAns = "";
var secondsLeft = 300
var selection = ""
var questionBank = [{
    question: "Question 1",
    answers: {
        a: "Incorrect1",
        b: "Incorrect2",
        c: "Incorrect3",
        d: "correct",
    },
    correctAnswer: "d"
},
{
    question: "Question 2",
    answers: {
        a: "Incorrect",
        b: "Incorrect",
        c: "correct",
        d: "Incorrect",
    },
    correctAnswer: "c",
},
{
    question: "Question 3",
    answers: {
        a: "Incorrect",
        b: "Incorrect",
        c: "Incorrect",
        d: "correct",
    },
    correctAnswer: "d"
},
{
    question: "Question 4",
    answers: {
        a: "Incorrect",
        b: "Incorrect",
        c: "Incorrect",
        d: "correct",
    },
    correctAnswer: "d"
},
{
    question: "Question 5",
    answers: {
        a: "Incorrect",
        b: "Incorrect",
        c: "Incorrect",
        d: "correct",
    },
    correctAnswer: "d"
},
{
    question: "Question 6",
    answers: {
        a: "Incorrect",
        b: "Incorrect",
        c: "Incorrect",
        d: "correct",
    },
    correctAnswer: "d"
},
{
    question: "Question 7",
    answers: {
        a: "Incorrect",
        b: "Incorrect",
        c: "Incorrect",
        d: "correct",
    },
    correctAnswer: "d"
},
{
    question: "Question 8",
    answers: {
        a: "Incorrect",
        b: "Incorrect",
        c: "Incorrect",
        d: "correct",
    },
    correctAnswer: "d"
},
{
    question: "Question 9",
    answers: {
        a: "Incorrect",
        b: "Incorrect",
        c: "Incorrect",
        d: "correct",
    },
    correctAnswer: "d"
},
{
    question: "Question 10",
    answers: {
        a: "Incorrect",
        b: "Incorrect",
        c: "Incorrect",
        d: "correct",
    },
    correctAnswer: "d"
},
]
var initialsBank = []
var highScoreBank = []

//Timer starts
function setTime() {
    //Hide the start button and display submit answer button//
    startButton.style.display = "none"
    submitButton.style.display = "block"
    //Timer logic//
    timeEl.textContent = "Time remaining " + secondsLeft;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time remaining " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            end_of_questions()
            submitButton.style.display = "none"
            highScoreButton.style.display = "block"
            questionList.textContent = ""
        }
        else if (QuestionNum === 10) {
            clearInterval(timerInterval);
            timeEl.textContent = ""
        }
    }, 1000);
}

//Event listener for start button//
startButton.addEventListener("click", function () {
    var listItem = document.createElement("li");
    questionList.appendChild(listItem)
    // btn_a.textContent = "btn_a"
    //Event listener is option A is selected
    btn_a.addEventListener("click", function () {
        submitButton.disabled = false;
        selectedAns = "a";
    })
    listItem.appendChild(btn_a)

    var listItem2 = document.createElement("li");
    questionList.appendChild(listItem2)
    // btn_b.textContent = "btn_b"
    //Event listener is option b is selected
    btn_b.addEventListener("click", function () {
        submitButton.disabled = false;
        selectedAns = "b";
    })
    listItem2.appendChild(btn_b)

    var listItem3 = document.createElement("li");
    questionList.appendChild(listItem3)
    // btn_c.textContent = "btn_c"
    //Event listener is option C is selected
    btn_c.addEventListener("click", function () {
        submitButton.disabled = false;
        selectedAns = "c";
    })
    listItem3.appendChild(btn_c);

    var listItem4 = document.createElement("li");
    questionList.appendChild(listItem4)
    // btn_d.textContent = "btn_d"
    //Event listener is option D is selected
    btn_d.addEventListener("click", function () {
        submitButton.disabled = false;
        selectedAns = "d";
    })
    listItem4.appendChild(btn_d);

    setTime();
    showNextQuestion();
}
)

//Event listener for submit high score button//
submitButton.addEventListener("click", function () {
    if (selectedAns == questionBank[QuestionNum].correctAnswer) {
        score++;
    } else {
        secondsLeft -= 10
    }

    selectedAns = ""
    submitButton.disabled = true;

    QuestionNum++;
    if (QuestionNum < questionBank.length) {
        showNextQuestion();
    } else {
        end_of_questions();
    }
})

function storeData() {
    localStorage.setItem("initials", JSON.stringify(initialsBank))
    localStorage.setItem("high score", highScoreBank)
}

function showNextQuestion() {
    questionEl.textContent = questionBank[QuestionNum].question

    btn_a.textContent = questionBank[QuestionNum].answers.a.toString()
    btn_b.textContent = questionBank[QuestionNum].answers.b.toString()
    btn_c.textContent = questionBank[QuestionNum].answers.c.toString()
    btn_d.textContent = questionBank[QuestionNum].answers.d.toString()
}

function end_of_questions() {
    submitButton.style.display = "none"
    questionList.style.display = "none"
    highScoreButton.style.display = "block"
    initials.style.display = "block"
    questionEl.textContent = "Your Score: " + score + "/10"
}

highScoreButton.addEventListener("click", function () {
    var initialsText = initials.value.trim();
    initialsBank.push(initialsText)
    initials.textContent = ""

    highScoreBank.push(score)

    storeData();

    location.reload();
})