

let questionNumber=0;
let ravenclaw=0;
let gryffindor=0;
let slytherin=0;
let huflepuff=0;

const apiKey=`$2a$10$Wp69A2MNnqAJzwpQ/Mvfee8rpq7/4xQ841f.uFUx2MAaBGKl3yPTe`
const searchURL= 'www.potterapi.com/v1/characters/'
const constantParams ='?role=student'
//responsible for creating the quiz
function createQuiz(){
	handleClickToStart();
  	console.log('create quiz ran!')
  	//nextQuestion();
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
	nextQuestion();

}

function trackQuestionNumber(){
	questionNumber ++;
}

function trackHouseScore(answernumber){
	ravenclaw += STORE[questionNumber].answers[answernumber].ravenclaw;
}



function nextQuestion(){
	$('.questionForm').on('click', '.submit', function (event) {
		if ($('.checkAnswer').is(':checked')){
			let selected = $('input:checked');
			let userAnswer = selected.val();
		} else {
			// UH OH NO ANSWER SELECTED OH NO
		}


		// figure out what answer the user clicked and store it in a variable

		// track the house score change for that answer

		// render the next question
		renderQuestion();
	});
}

function renderResults();
	



createQuiz();