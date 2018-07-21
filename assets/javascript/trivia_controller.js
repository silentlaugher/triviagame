function Trivia(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;

}

Trivia.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex];

	
}

Trivia.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;

}

Trivia.prototype.guess = function(answer) {
	if(this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
	}
