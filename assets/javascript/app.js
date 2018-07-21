function populate () {
	if(trivia.isEnded()) {
		showScores ();
	}


else {
	//show question
	var element = document.getElementById ("question");
	element.innerHTML = trivia.getQuestionIndex() .text;


	// show choices
	var choices = trivia.getQuestionIndex() .choices;
	for(var i = 0; i< choices.length; i++) {
		var element = document.getElementById("choice" + i);
		element.innerHTML = choices[i];
		guess("btn" + i, choices[i]);
	}

	showProgress();
}

};


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		trivia.guess(guess);
		populate ();
	}
};

function showProgress() {
	var currentQuestionNumber = trivia.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of " + trivia.questions.length;
}

function showScores () {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your scores: " + trivia.score + "</h2>";
	var element = document.getElementById("trivia");
	element.innerHTML = gameOverHtml; 
};

var questions = [
new Question("Which language is used to style webpages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
new Question("How many languages and dialects are spoken by people all over the world?", ["6000", "9000", "4000", "1000"], "9000"),
new Question("The English language has more than ?? words:", ["450,000", "45,000", "4,500", "450"], "450,000"),
new Question("The only religious book ever printed in a shorthand script is?", ["The Ramayana", " The Mahabharata", "the Bible", "None of these"], "The Bible"),
new Question("Which languageis used for web apps?", ["PHP", "Python", "Javascript", "All"], "All")
];

var trivia = new Trivia(questions);

populate();
