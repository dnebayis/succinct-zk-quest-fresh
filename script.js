const questions = [
    {
        question: "What does SP1 stand for in Succinct?",
        options: ["Succinct Proof 1", "Zero-Knowledge Virtual Machine", "Simple Protocol 1"],
        answer: "Zero-Knowledge Virtual Machine"
    },
    {
        question: "Which programming language does SP1 use?",
        options: ["Python", "Rust", "JavaScript"],
        answer: "Rust"
    },
    {
        question: "What is Succinct’s main mission?",
        options: ["Build faster blockchains", "Prove the world’s software", "Create a new cryptocurrency"],
        answer: "Prove the world’s software"
    },
    {
        question: "What technology is Succinct focused on?",
        options: ["Artificial Intelligence", "Zero-Knowledge Proofs", "Quantum Computing"],
        answer: "Zero-Knowledge Proofs"
    },
    {
        question: "What does ZKP stand for?",
        options: ["Zero-Knowledge Protocol", "Zero-Knowledge Proof", "Zero-Knowledge Program"],
        answer: "Zero-Knowledge Proof"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
    nextBtn.style.display = "none";
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    if (selected === q.answer) {
        score++;
        resultEl.textContent = "Correct!";
        resultEl.style.color = "#00FF00"; // Yeşil
    } else {
        score = Math.max(0, score - 1);
        resultEl.textContent = `Wrong! The answer is: ${q.answer}`;
        resultEl.style.color = "#FF0000"; // Kırmızı
    }
    scoreEl.textContent = `Score: ${score}`;
    optionsEl.querySelectorAll("button").forEach(btn => btn.disabled = true);
    if (currentQuestion < questions.length - 1) {
        nextBtn.style.display = "block";
        nextBtn.onclick = () => {
            currentQuestion++;
            resultEl.textContent = "";
            loadQuestion();
        };
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    questionEl.textContent = "Game Over!";
    optionsEl.innerHTML = "";
    resultEl.textContent = `Final Score: ${score}/5 - ${score === 5 ? "Perfect! You’re a ZK master!" : "Good try! Learn more at succinct.xyz"}`;
    resultEl.style.color = "#D3D3D3"; // Light Gray
    nextBtn.style.display = "none";
}

loadQuestion();