
// Is It Safe? Quiz



// ---------- QUIZ QUESTIONS ----------

const questions = [

    {
        question:
            "Someone you don't know sends you a link saying that you won an iPhone. What should you do?",

        answers: [
            "Click the link immediately",
            "Share the link with your friends",
            "Do not click it and verify the information first"
        ],

        correct: 2,

        explanation:
            "This could be a phishing scam. Unknown links can lead to fake websites, stolen passwords or malware."
    },


    {
        question:
            "You receive an email asking for your school password. What should you do?",

        answers: [
            "Send the password",
            "Ignore the request and report it to a trusted teacher or adult",
            "Reply asking why they need it"
        ],

        correct: 1,

        explanation:
            "You should never share your password through email or messages. Report suspicious requests to a trusted adult."
    },


    {
        question:
            "Which password is the strongest?",

        answers: [
            "john123",
            "password2026",
            "J@9k!Lm#72Qx"
        ],

        correct: 2,

        explanation:
            "A strong password should be difficult to guess and should use a combination of different characters."
    },


    {
        question:
            "Someone is bullying you through social media. What is the safest response?",

        answers: [
            "Insult them back",
            "Save evidence, block them and tell a trusted adult",
            "Share their messages publicly"
        ],

        correct: 1,

        explanation:
            "Save evidence, block the person and ask a trusted adult, teacher or appropriate support service for help."
    },


    {
        question:
            "You are using a public computer. What should you do before leaving?",

        answers: [
            "Leave your account logged in",
            "Save your password in the browser",
            "Log out of your accounts"
        ],

        correct: 2,

        explanation:
            "Always log out of your accounts when using a shared or public computer."
    }

];


// ---------- QUIZ VARIABLES ----------

let currentQuestion = 0;
let score = 0;


// ---------- HTML ELEMENTS ----------

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const feedbackElement =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("next-button");

const questionNumberElement =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const progressFill =
    document.getElementById("progress-fill");

const resultElement =
    document.getElementById("result");

const finalScoreElement =
    document.getElementById("final-score");

const cyberLevelElement =
    document.getElementById("cyber-level");

const restartButton =
    document.getElementById("restart-button");


// ---------- SHOW QUESTION ----------

function showQuestion() {

    const question =
        questions[currentQuestion];


    questionElement.textContent =
        question.question;


    questionNumberElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    scoreElement.textContent =
        `Score: ${score}`;


    answersElement.innerHTML = "";


    feedbackElement.classList.add("hidden");

    nextButton.classList.add("hidden");


    // Update progress bar

    const progress =
        ((currentQuestion) / questions.length) * 100;

    progressFill.style.width =
        `${progress}%`;


    // Create answer buttons

    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");


        button.classList.add("answer-button");


        button.textContent =
            answer;


        button.addEventListener(
            "click",
            () => selectAnswer(index)
        );


        answersElement.appendChild(button);

    });

}


// ---------- CHECK ANSWER ----------

function selectAnswer(selectedAnswer) {

    const question =
        questions[currentQuestion];


    const answerButtons =
        document.querySelectorAll(".answer-button");


    // Prevent selecting multiple answers

    answerButtons.forEach(button => {

        button.disabled = true;

    });


   if (selectedAnswer === question.correct) {

    score += 10;

    answerButtons[selectedAnswer].classList.add(
        "correct-answer"
    );

    feedbackElement.innerHTML =
        `<strong>✅ Correct!</strong><br>${question.explanation}`;

} else {

    answerButtons[selectedAnswer].classList.add(
        "wrong-answer"
    );

    answerButtons[question.correct].classList.add(
        "correct-answer"
    );

    feedbackElement.innerHTML =
        `<strong>❌ Not quite.</strong><br>${question.explanation}`;

}


    feedbackElement.classList.remove("hidden");


    scoreElement.textContent =
        `Score: ${score}`;


    nextButton.classList.remove("hidden");

}


// ---------- NEXT QUESTION ----------

nextButton.addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            showResult();

        }

    }
);


// ---------- SHOW RESULT ----------

function showResult() {

    document.querySelector(".quiz-card")
        .classList.add("hidden");


    resultElement.classList.remove("hidden");


    progressFill.style.width = "100%";


    finalScoreElement.textContent =
        `You scored ${score} out of ${questions.length * 10} points.`;


    let level;


    if (score >= 40) {

        level = "🏆 CyberSmart";

    } else if (score >= 30) {

        level = "🛡️ Cyber Defender";

    } else if (score >= 20) {

        level = "🔎 Cyber Explorer";

    } else {

        level = "🌱 Cyber Beginner";

    }


    cyberLevelElement.textContent =
        `Your Cyber Level: ${level}`;

}


// ---------- RESTART QUIZ ----------

restartButton.addEventListener(
    "click",
    () => {

        currentQuestion = 0;

        score = 0;


        resultElement.classList.add("hidden");


        document.querySelector(".quiz-card")
            .classList.remove("hidden");


        showQuestion();

    }
);


// ---------- START QUIZ ----------

showQuestion();