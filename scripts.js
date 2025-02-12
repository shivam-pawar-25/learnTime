document.addEventListener('DOMContentLoaded', () => {
    const contactFormCard = document.querySelector('.contact-form-card');
    setTimeout(() => {
        contactFormCard.classList.add('show');
    }, 65); 
});



document.getElementById("submit-quiz").addEventListener("click", function() {
    let score = 0;

    const answers = {
        q1: "O(log n",
        q2: "Stack",
        q3: "Bubble Sort",
        q4: "Stack",
        q5: "O(log n"
    };

    for (let key in answers) {
        let selectedAnswer = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[key]) {
            score++;
        }
    }

    let resultText = `You scored ${score} out of 5.`;
    if (score === 5) {
        resultText += " 🎉 Excellent!";
    } else if (score >= 3) {
        resultText += " 😊 Good Job!";
    } else {
        resultText += " 😔 Try Again!";
    }

    document.getElementById("quiz-result").textContent = resultText;
    document.getElementById("quiz-result").style.display = "block";
});
