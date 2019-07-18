

let questionNumber=0;
let ravenclawScore=0;
let gryffindorScore=0;
let slytherinScore=0;
let hufflepuffScore=0;

const houseIndex = {
	ravenclaw: 0,
	gryffindor: 1,
	slytherin: 2,
	hufflepuff: 3
}

const houseNames = ['Ravenclaw', 'Gryffindor', 'Slytherin', 'Hufflepuff']

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
	    				<button role= submit class="submit">Next</button>
	    			</fieldset>
	    			<p class='container'>
	    			</p>
	    		</form>
	    </div>`;
  	} else {
		patronusQuestion();
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
		console.log('clicked submit!')
		if ($('.checkAnswer').is(':checked')){
				let selected = $('input:checked');
				let userAnswer = selected.val();
				trackHouseScore(userAnswer);
				renderQuestion();
		}
		else{ 
			alert("Please select an answer.")
		}
		
	});
}

//responsible for displaying the final question
function patronusQuestion(){
	$('.questionForm').html(`<div class="question-10">
	    	<h2>What is your Patronus?</h2>
	    		<form id='myform'>
	    			<input type=text id='patronus' value=Unicorn required</input>
	    			<button type="submit"class="resultsButton">Find my BFF!</button>
	    		</form>
	    		</div>`
	    );
	typeResults();
}

function typeResults() {
	$('.questionForm').on('click', '.resultsButton', function(event){
		console.log('clicked resultsButton')
		event.preventDefault();
		renderResults();
	});
}

function getReady(arrayJson){
	const patronus = $('#patronus').val();
	let hashNumber = hash(patronus);
	console.log("getReady: hashNumber is " + hashNumber);
	let index= hashNumber % arrayJson.length;
	renderResultsPage(arrayJson[index]);	
}



function renderResultsPage(character){
	let characterName = character.name;
	//let characterURL = 
	$('.questionForm').html(
		`<div class=results>
		<h2>Great news! Your BFF at Hogwarts is ${characterName}</h2>
			<p>To learn more about your BFF click<a href='https://harrypotter.fandom.com/hermione_granger' target= '_blank'> here.</a></p>
			</div>`);
}

function renderResults(){
	
	let houseArray = createHouseObject();
	let houseName = newHighestHouse(houseArray);
	return getCharacters(houseName);
}

//responsible for determining which house goes into the API call
function createHouseObject(){
	// let finalScores = [{ravenclawScore:  ravenclawScore}, 
	// 	               {gryffindorScore: gryffindorScore}, 
	// 	               {slytherinScore:  slytherinScore}, 
	// 	               {hufflepuffScore: hufflepuffScore}]
	let finalScores = [ravenclawScore, gryffindorScore, slytherinScore, hufflepuffScore];

	console.log(finalScores[0]);
	return finalScores;
}

function newHighestHouse(scoreArray) {
	let maxScore = 0;
	let newIndex = 0;
	for (let i=0; i<scoreArray.length; i++){
		if (scoreArray[i]>maxScore){
			maxScore=scoreArray[i];
			newIndex=i;
		}
	}
	let houseName = houseNames[newIndex];
	console.log(houseName);
	return houseName;
}


//responsible for creating the query and making the API call
function getCharacters(houseName){
	let dumbledoresArmy=true;
	if (houseName == 'Slytherin'){
		dumbledoresArmy = false;
	}

	queryString = `https://${searchURL}?key=${apiKey}&${constantParams}&house=${houseName}&dumbledoresArmy=${dumbledoresArmy}`
	fetch (queryString)
		.then(response => {
      		if (response.ok) {
        		return response.json();
      		}
      		throw new Error(response.statusText);
    	})
    	.then(responseJson => {
    		getReady(responseJson);
    		console.log(responseJson)
    	})
   	 	.catch(err => {
      		$('#js-error-message').text(`Something went wrong: ${err.message}`);
    	});
}

function hash(patronus){
	let hashNumber=patronus.charCodeAt(0);
	return hashNumber;
}


	
createQuiz();