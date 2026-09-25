
// ---------- QUESTIONS ----------

const challengeQuestions = [

    {
        question:
            "What should you do if you receive a suspicious link?",

        answers: [
            "Click it to see where it goes",
            "Ignore it and verify the source",
            "Share it with friends",
            "Enter your password"
        ],

        correct: 1,

        explanation:
            "Never click suspicious links. Check the source first."
    },


    {
        question:
            "Which password is the safest?",

        answers: [
            "12345678",
            "myname2026",
            "P@7x!Kq#92Lm",
            "password"
        ],

        correct: 2,

        explanation:
            "Strong passwords use different types of characters and are difficult to guess."
    },


    {
        question:
            "What is phishing?",

        answers: [
            "A type of computer game",
            "A method used to trick people into giving information",
            "A way to protect a computer",
            "A social media application"
        ],

        correct: 1,

        explanation:
            "Phishing uses fake messages or websites to trick people into revealing information."
    },


    {
        question:
            "What personal information should you avoid sharing publicly?",

        answers: [
            "Your favourite colour",
            "Your favourite sport",
            "Your home address and passwords",
            "Your favourite movie"
        ],

        correct: 2,

        explanation:
            "Sensitive information such as passwords and home addresses should be kept private."
    },


    {
        question:
            "What should you do when using a public computer?",

        answers: [
            "Save your password",
            "Leave your account open",
            "Log out before leaving",
            "Share your account"
        ],

        correct: 2,

        explanation:
            "Always log out of your accounts when using a shared or public computer."
    },


    {
        question:
            "What is malware?",

        answers: [
            "Malicious software",
            "A strong password",
            "A search engine",
            "A social network"
        ],

        correct: 0,

        explanation:
            "Malware is software designed to damage systems or steal information."
    },


    {
        question:
            "What should you do if someone cyberbullies you?",

        answers: [
            "Insult them back",
            "Share their private information",
            "Save evidence and ask for help",
            "Delete all your accounts"
        ],

        correct: 2,

        explanation:
            "Save evidence, block the person and tell a trusted adult or teacher."
    },


    {
        question:
            "Why should you use two-factor authentication?",

        answers: [
            "It makes your screen brighter",
            "It adds another layer of account security",
            "It makes your internet faster",
            "It removes your password"
        ],

        correct: 1,

        explanation:
            "Two-factor authentication adds an extra security step when signing in."
    },


    {
        question:
            "What is the safest action when an online stranger asks for your personal information?",

        answers: [
            "Give them the information",
            "Ask for their information first",
            "Do not share it and tell a trusted adult",
            "Send them your password"
        ],

        correct: 2,

        explanation:
            "Do not share personal information with strangers online. Ask a trusted adult for help."
    },


    {
        question:
            "What should you do before downloading a file?",

        answers: [
            "Download it immediately",
            "Check whether the source is trusted",
            "Send it to friends",
            "Disable your antivirus"
        ],

        correct: 1,

        explanation:
            "Only download files from trusted and reliable sources."
    }

];



// ---------- VARIABLES ----------

let challengeCurrent = 0;

let challengeScore = 0;



// ---------- HTML ELEMENTS ----------

const challengeQuestion =
    document.getElementById(
        "challenge-question"
    );


const challengeAnswers =
    document.getElementById(
        "challenge-answers"
    );


const challengeFeedback =
    document.getElementById(
        "challenge-feedback"
    );


const challengeNext =
    document.getElementById(
        "challenge-next"
    );


const challengeScoreElement =
    document.getElementById(
        "challenge-score"
    );


const challengeNumber =
    document.getElementById(
        "challenge-question-number"
    );


const challengeProgress =
    document.getElementById(
        "challenge-progress-fill"
    );


const challengeCard =
    document.querySelector(
        ".challenge-card"
    );


const challengeResult =
    document.getElementById(
        "challenge-result"
    );


const challengeFinalScore =
    document.getElementById(
        "challenge-final-score"
    );


const challengeLevel =
    document.getElementById(
        "challenge-level"
    );


const challengeMessage =
    document.getElementById(
        "challenge-message"
    );


const challengeRestart =
    document.getElementById(
        "challenge-restart"
    );



// ---------- SHOW QUESTION ----------

function showChallengeQuestion() {

    const question =
        challengeQuestions[
            challengeCurrent
        ];


    challengeQuestion.textContent =
        question.question;


    challengeNumber.textContent =
        `Question ${challengeCurrent + 1} of ${challengeQuestions.length}`;


    challengeScoreElement.textContent =
        `Score: ${challengeScore}`;


    challengeAnswers.innerHTML = "";


    challengeFeedback.classList.add(
        "hidden"
    );


    challengeNext.classList.add(
        "hidden"
    );


    const progress =
        (challengeCurrent /
            challengeQuestions.length) * 100;


    challengeProgress.style.width =
        `${progress}%`;



    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.classList.add(
                "challenge-answer"
            );


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () =>
                    selectChallengeAnswer(
                        index
                    )
            );


            challengeAnswers.appendChild(
                button
            );

        }
    );

}



// ---------- CHECK ANSWER ----------

function selectChallengeAnswer(
    selectedAnswer
) {

    const question =
        challengeQuestions[
            challengeCurrent
        ];


    const buttons =
        document.querySelectorAll(
            ".challenge-answer"
        );


    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );


   if (
    selectedAnswer ===
    question.correct
) {

    challengeScore += 10;


    buttons[selectedAnswer].classList.add(
        "correct-answer"
    );


    challengeFeedback.innerHTML =
        `<strong>✅ Correct!</strong><br>${question.explanation}`;

} else {

    buttons[selectedAnswer].classList.add(
        "wrong-answer"
    );


    buttons[question.correct].classList.add(
        "correct-answer"
    );


    challengeFeedback.innerHTML =
        `<strong>❌ Incorrect.</strong><br>${question.explanation}`;

}


    challengeFeedback.classList.remove(
        "hidden"
    );


    challengeScoreElement.textContent =
        `Score: ${challengeScore}`;


    challengeNext.classList.remove(
        "hidden"
    );

}



// ---------- NEXT QUESTION ----------

challengeNext.addEventListener(
    "click",
    () => {

        challengeCurrent++;


        if (
            challengeCurrent <
            challengeQuestions.length
        ) {

            showChallengeQuestion();

        } else {

            showChallengeResult();

        }

    }
);



// ---------- SHOW RESULT ----------

function showChallengeResult() {

    challengeCard.classList.add(
        "hidden"
    );


    challengeResult.classList.remove(
        "hidden"
    );


    challengeProgress.style.width =
        "100%";


    challengeFinalScore.textContent =
        `You scored ${challengeScore} out of 100 points.`;



    if (challengeScore >= 90) {

        challengeLevel.textContent =
            "🏆 CyberSmart";


        challengeMessage.textContent =
            "Excellent! You have a strong understanding of cybersecurity.";

    }

    else if (challengeScore >= 70) {

        challengeLevel.textContent =
            "🛡️ Cyber Defender";


        challengeMessage.textContent =
            "Great job! You know many important ways to stay safe online.";

    }

    else if (challengeScore >= 50) {

        challengeLevel.textContent =
            "🔎 Cyber Explorer";


        challengeMessage.textContent =
            "Good start! Keep learning and practising your cybersecurity skills.";

    }

    else {

        challengeLevel.textContent =
            "🌱 Cyber Beginner";


        challengeMessage.textContent =
            "Keep learning! Small cybersecurity habits can make a big difference.";

    }

}



// ---------- RESTART ----------

challengeRestart.addEventListener(
    "click",
    () => {

        challengeCurrent = 0;

        challengeScore = 0;


        challengeResult.classList.add(
            "hidden"
        );


        challengeCard.classList.remove(
            "hidden"
        );


        showChallengeQuestion();

    }
);





showChallengeQuestion();