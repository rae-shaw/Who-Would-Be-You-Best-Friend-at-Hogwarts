

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
   	answerValueNextQuestionRender();
}

//respsonsible for handling the click to start
function handleClickToStart() {
	$('.quizStart').on('click', '.startButton', function(event) {
		event.preventDefault();
		$('.quizStart').remove();
		renderQuestion();
		$('.score-question-counter').toggleClass();
	});
	
}



//respoonsible for generating the question
function generateQuestion(){
	if (questionNumber < STORE.length) {
		return `<div id='questionForm' class="question-${questionNumber}">
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

//responsible for tracking which question the user is on
function trackQuestionNumber(){
	questionNumber ++;
	$('.questionNumber').text(questionNumber);
}

//responsible for tracking the scores of each house
function trackHouseScore(answernumber){
	ravenclawScore += STORE[questionNumber-1].answers[answernumber].ravenclaw;
	hufflepuffScore += STORE[questionNumber-1].answers[answernumber].hufflepuff;
	slytherinScore += STORE[questionNumber-1].answers[answernumber].slytherin;
	gryffindorScore += STORE[questionNumber-1].answers[answernumber].gryffindor;
}

//responsible for procuring the answer value and advancing the user to the render of the next question
function answerValueNextQuestionRender(){
	$('.questionForm').on('click', '.submit', function (event) {
		event.preventDefault();
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
	$('#questionForm').html(
		`<div class="question-10">
	    	<h2>What is your Patronus?</h2>
	    		<form id='myform'>
	    			<input type=text id='patronus' value=ex.Unicorn required</input>
	    			<button type="submit"class="resultsButton">Find my BFF!</button>
	    		</form>
	    </div>`
	);
	typeResults();
}

//responsible for the click action on the patronus question page
function typeResults() {
	$('#questionForm').on('click', '.resultsButton', function(event){
		event.preventDefault();
		renderResults();
		$('.question-counter').remove();
	});
}

//responsible for determining the final answer using the hash and the results of the API call
function getFinalCharacter(arrayJson){
	const patronus = $('#patronus').val();
	let hashNumber = hash(patronus);
	let index= hashNumber % arrayJson.length;
	renderResultsPage(arrayJson[index]);	
}

//responsible for creating the variables to render the results page and rendering the page
function renderResultsPage(character){
	let characterName = character.name;
	let characterURL = `https://harrypotter.fandom.com/${characterName.split(' ').join('_')}`;
	$('#questionForm').html(
		`<div class=results>
			<h2>Great news! Your BFF at Hogwarts is ${characterName}</h2>
			<p>To learn more about your BFF click<a href='${characterURL}' target= '_blank'> here.</a></p>
		</div>`
	);
}

//responsible for creating the variables for the API call anc calling the function to make the API call
function renderResults(){
	let houseArray = createTotalScoresArray();
	let houseName = highestHouse(houseArray);
	return getCharacters(houseName);
}

//responsible for creating an array of final, total scores
function createTotalScoresArray(){
	let finalScores = [ravenclawScore, gryffindorScore, slytherinScore, hufflepuffScore];
	return finalScores;
}

//responsible for determing which house has the highest score
function highestHouse(scoreArray) {
	let maxScore = 0;
	let newIndex = 0;
	for (let i=0; i<scoreArray.length; i++){
		if (scoreArray[i]>maxScore){
			maxScore=scoreArray[i];
			newIndex=i;
		}
	}
	let houseName = houseNames[newIndex];
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
    		getFinalCharacter(responseJson);
    		console.log(responseJson)
    	})
   	 	.catch(err => {
      		$('#js-error-message').text(`Something went wrong: ${err.message}`);
    	});
}
//responsible for taking the user entered string(patronus) and creating a hash
function hash(patronus){
	let hashNumber=patronus.charCodeAt(0);
	return hashNumber;
}
	
createQuiz();