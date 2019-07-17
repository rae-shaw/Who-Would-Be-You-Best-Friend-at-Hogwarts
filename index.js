

let questionNumber=0;
let ravenclawScore=0;
let gryffindorScore=0;
let slytherinScore=0;
let hufflepuffScore=0;

const apiKey=`$2a$10$Wp69A2MNnqAJzwpQ/Mvfee8rpq7/4xQ841f.uFUx2MAaBGKl3yPTe`
const searchURL= 'www.potterapi.com/v1/characters/'
const constantParams ='role=student'

//responsible for creating the quiz
function createQuiz(){
	handleClickToStart();
  	console.log('create quiz ran!');
  	nextQuestion();
}

//respsonsible for handling the click to start
function handleClickToStart() {
	console.log('in handleClickToStart');
	$('.quizStart').on('click', '.startButton', function(event) {
		console.log('clicked start!');
		event.preventDefault();
		$('.quizStart').remove();
		renderQuestion();
	});
	
}



//respoonsible for generating the question
function generateQuestion(){
	if (questionNumber < STORE.length) {
		return `<div class="question-${questionNumber}">
	    	<h2>${STORE[questionNumber].question}</h2>
	    		<form id='myform'>
	    			<fieldset>
	    				<label class="answerOption">
	    					<input type="radio" value="0" name="answer" class="checkAnswer" required>
	    					<span>${STORE[questionNumber].answers[0].text}</span>
	    				</label>
	    				<label class="answerOption">
	    					<input type="radio" value="1" name="answer" class="checkAnswer" required>
	    					<span>${STORE[questionNumber].answers[1].text}</span>
	    				</label>
	    				<label class="answerOption">
	    					<input type="radio" value="2" name="answer" class="checkAnswer" required>
	    					<span>${STORE[questionNumber].answers[2].text}</span>
	    				</label>
	    				<label class="answerOption">
	    				<input type="radio" value="3" name="answer" class="checkAnswer" required>
	    				<span>${STORE[questionNumber].answers[3].text}</span>
	    				</label>
	    				<button type="submit" class="submit">Submit</button>
	    			</fieldset>
	    			<p class='container'>
	    			</p>
	    		</form>
	    </div>`;
  	} else {
		renderResults();
	}

}

//responsible for rendering the question to the page
function renderQuestion(){
	$('.questionForm').html(generateQuestion());
	trackQuestionNumber();
}

function trackQuestionNumber(){
	questionNumber ++;
}

function trackHouseScore(answernumber){
	ravenclawScore += STORE[questionNumber-1].answers[answernumber].ravenclaw;
	hufflepuffScore += STORE[questionNumber-1].answers[answernumber].hufflepuff;
	slytherinScore += STORE[questionNumber-1].answers[answernumber].slytherin;
	gryffindorScore += STORE[questionNumber-1].answers[answernumber].gryffindor;
}


function nextQuestion(){
	$('.questionForm').on('click', '.submit', function (event) {
		event.preventDefault();
		$('.checkAnswer').is(':checked')
			let selected = $('input:checked');
			let userAnswer = selected.val();
			trackHouseScore(userAnswer);
	
		renderQuestion();
	});
}

function renderResults(){
	/*console.log(ravenclawScore, gryffindorScore, slytherinScore, hufflepuffScore);*/
	createHouseObject();
}

//responsible for determining which house goes into the API call
function createHouseObject(){
	let finalScores = [{ravenclawScore: ravenclawScore}, 
					{gryffindorScore: gryffindorScore}, 
					{slytherinScore: slytherinScore}, 
					{hufflepuffScore: hufflepuffScore}]
	console.log(finalScores[0]);
	highestHouse(finalScores);
	}

function highestHouse(scoreArray){
	let maxScore=0;
	let houseName='';
	for (let i=0; i<scoreArray.length; i++){

			let firstObj = scoreArray[i];
			console.log(Object.keys(firstObj));
			let firstKey = Object.keys(firstObj);
			if (scoreArray[i][firstKey[0]]>maxScore){
				maxScore=scoreArray[i][firstKey[0]];
				houseName=firstKey[0];
			}

			
	}
	console.log(houseName);
	createQuery(houseName);
}


//responsible for creating the query for the API call
function createQuery(houseName){
	if (houseName == 'hufflepuffScore'){
		console.log('success');
		let houseFinal = 'Hufflepuff';
		let dumblesdoresArmy = true;
	}
	/*else if (houseName == 'ravenclawScore'){
		let houseQuery = 'Ravenclaw';
		let dumblesdoresArmy = true;
	}
	else if (houseName == 'ravenclawScore'){
		let houseQuery = 'Ravenclaw';
		let dumblesdoresArmy = true;
	}
	else{
		let houseQuery = 'Slytherin';
		let dumblesdoresArmy = false;
	}*/
	getCharacters(houseFinal, dumblesdoresArmy);
}

//responsible for making the API call and getting characters
function getCharacters(houseQuery, dumblesdoresArmy){
	queryString = `https://${searchURL}?key=${apiKey}&${constantParams}&house=${houseQuery}&dumblesdoresArmy=${dumblesdoresArmy}`
}

//determine which house for API call 
	//create API call (if slytherin, just add role=student; if other houses, add dumblesdoresArmy=true&role=student)


//function apiCall
	
createQuiz();