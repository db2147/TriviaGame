$( document ).ready(function() {

//initialize variables
var questions = [];
var correctAnswer = "";

var answerText = "";
var clickAnswer = "";

var qCorrect = 0;
var qIncorrect = 0;
var qUnanswered = 0;

var countdownTimer = 0;

//load all the questions, answer options & images to questions array
questions[0] = {
	question:"What musical act is infamous for lipsyncing on SNL?",
	option: ["BackStreet Boys", "Milli Vanilli", "Janet Jackson", "Billy Idol"],
	aAnswer: 1
};
questions[1] = {
	question:"Which Band started grunge?",
	option: ["Stone Temple Pilots", "Alice In Chains", "Nirvana", "Pearl Jam"],
	aAnswer: 2
};
questions[2] = {
	question:"Who was the original singer for the American punk rock band The Misfits?",
	option: ["Glenn Danzig", "Iggy Pop", "Billie Joe Armstrong", "Joe Strummer"],
	aAnswer: 0
};
questions[3] = {
	question:"Who is the most influential woman in rock?",
	option: ["Janis Joplin", "Deborah Harry", "Stevie Nicks", "Joan Jett"],
	aAnswer: 3
};
questions[4] = {
	question:"What was Queens best selling single?",
	option: ["We Will Rock You", "We Are the Champions", "Another One Bites the Dust", "Bohemian Rhapsody"],
	aAnswer: 2
};
questions[5] = {
	question:"Which group sang 'Under the Boardwalk'?",
	option: ["The Drifters", "The Beach Boys", "The Platters", "Bee Gees"],
	aAnswer: 0
};
questions[6] = {
	question:"Which act released 'Back in Black' in 1980?",
	option: ["Van Halen", "Def Leppard", "Ozzy Osbourne", "AC/DC"],
	aAnswer: 3
};
questions[7] = {
	question:"What was the name of Def Leppard's first album?",
	option: ["Hysteria", "On through the Night", "Pyromania", "High 'n' Dry"],
	aAnswer: 1
};
questions[8] = {
	question:"Ronnie James Dio was never a member of which band?",
	option: ["Dio", "Black Sabbath", "Rainbow", "Deep Purple"],
	aAnswer: 3
};
questions[9] = {
	question:"Name this Irish guitarist and blues rock singer who died in 1995:",
	option: ["Billy Idol", "Ian Gillian", "Gene Simmons", "Rory Gallagher"],
	aAnswer: 3
};

for (var i = 0; i < questions.length; i++) {
	 $("#questionsDiv").append( "<h3>"+questions[i].question+"</h3>" );
	 $("#questionsDiv").append( "<ul class='form-check'>");
	 $("#questionsDiv").append( "<li class='list-group-item list-group-item-action'>"+questions[i].option[0]+"</li>" );
	 $("#questionsDiv").append( "<li class='list-group-item list-group-item-action'>"+questions[i].option[1]+"</li>" );
	 $("#questionsDiv").append( "<li class='list-group-item list-group-item-action'>"+questions[i].option[2]+"</li>" );
	 $("#questionsDiv").append( "<li class='list-group-item <list-group-item-action></list-group-item-action'>"+questions[i].option[3]+"</li>" );
	}



});






























 