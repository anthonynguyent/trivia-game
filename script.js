const questions = [
	"What planet is known as the 'Red Planet'?",
	'Who painted the Mona Lisa?',
];
let currentQuestionIndex = 0;

const choicesArray = [
	['Earth', 'Mars', 'Jupiter', 'Saturn'],
	['Da Vinci', 'Da Vinki', 'Dah Vinki', 'Da Vinchi'],
];
const correctAnswers = ['Mars', 'Da Vinci'];

let score = 0;

function checkAnswer(button) {
	if (button.value === correctAnswers[currentQuestionIndex]) {
		score += 1;
	}
	currentQuestionIndex += 1;
	displayQuestion();
}

function displayQuestion() {
	if (currentQuestionIndex < questions.length) {
		document.getElementById('question').innerHTML =
			questions[currentQuestionIndex];
		for (let i = 0; i < 4; i++) {
			const btn = document.getElementById('choice' + (i + 1));
			btn.innerHTML = choicesArray[currentQuestionIndex][i];
			btn.value = choicesArray[currentQuestionIndex][i];
		}
	} else {
		document.getElementById('question').innerHTML = '';
		document.getElementById('choices').innerHTML = '';
		document.getElementById('result').innerHTML =
			'You got this many right: ' + score;
	}
}

displayQuestion();
