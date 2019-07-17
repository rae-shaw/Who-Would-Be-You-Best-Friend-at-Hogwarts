/*const EXAMPLESTORE = [
	{
		question: 'Where would the sorting hat place you?',
		answers: [
			{ // answers[0].text = Ravenclaw; answers[0].ravenclaw = 10
				text:'Ravenclaw', 
				ravenclaw: 10,
				hufflepuff: 2,
			}	
			'Hufflepuff', 
			'Slytherin', 
			'Gryffindor'
		], 
	},
	{
		question: 'Where would the sorting hat place you?',
		answers: [ // answers[0][0] - (answer),  answers[0][1] (ravenclaw)
			['Ravenclaw', 10, 5, 0, 2],
			'Hufflepuff', 
			'Slytherin', 
			'Gryffindor'
		], 
	},
	{
		question: 'Where would the sorting hat place you?',
		answers: [ // answers[0] - (answer),  scores[0] (scores array), scores[0][0] answer 0 score 0
			// for i in scores[answernumber].length { myscores[i] += scores[answernumber][i] }
			'Ravenclaw',
			'Hufflepuff', 
			'Slytherin', 
			'Gryffindor'
		],
		scores: [
			[10, 4, 2, 0],
			[4, 10, 2, 0],

		]
	},
	{
		// ALL questions are worth 1 point.
		question: 'Where would the sorting hat place you?',
		answers: [ 
			['Ravenclaw', 'ravenclaw']
			'Hufflepuff', 
			'Slytherin', 
			'Gryffindor'
			['Beaches!', 'hufflepuff']
		],
		// myscores[ answers[answernumber][1] ] += 1;

		// scores way
		scores: [
			'hufflepuff',
			'slytherin'
		]
		// myscores[ scores[answernumber] ] += 1;
	}

]*/

const STORE = [

	{
		question: 'Where would the sorting hat place you?',
		answers: [
			{text: 'Ravenclaw',
			ravenclaw: 10,
			hufflepuff: 5,
			slytherin: 2,
			gryffindor: 0
			},

			{text:'Hufflepuff',
			ravenclaw: 5,
			hufflepuff: 10,
			slytherin: 0,
			gryffindor: 2
				},

			{text:'Slytherin',
			ravenclaw: 5,
			hufflepuff: 0,
			slytherin: 10,
			gryffindor: 2 
				},

			{text:'Gryffindor',
			ravenclaw: 2,
			hufflepuff: 5,
			slytherin: 0,
			gryffindor: 10
			}
		], 
	},

	{
		question: 'What would you and your BFF do on vacation?',
		answers: [
			{text: 'Beaches!', 
			ravenclaw: 2,
			hufflepuff: 10,
			slytherin: 0,
			gryffindor: 5
			},
			{text: 'Camping in the mountains', 
			ravenclaw: 10,
			hufflepuff: 5,
			slytherin: 0,
			gryffindor: 2
			},
			{text: 'Option 3', 
			ravenclaw: 10,
			hufflepuff: 5,
			slytherin: 0,
			gryffindor: 2
			},
			
			{text:'Option 4',
			ravenclaw: 10,
			hufflepuff: 5,
			slytherin: 0,
			gryffindor: 2
			}
		], 
	},
]

	/*{
		question: 'What class are you most excited about?',
		answers: [
			'Herbology', 
			'Divination', 
			'Defense Against the Dark Arts', 
			'Potions'], 
	},

	{
		question: 'The finals are coming up soon!',
		answers: [
			'Organize study groups and check-in to make sure everyone is good!', 
			`Get to studying`, 
			'Option3', 
			'Option4'], 
	},

	{
		question: 'Your BFF jumps to your defense. Specifically, they...',
		answers: [
			'Option 1', 
			'Option 2', 
			'Option 3', 
			'Option 4'], 
	},

	{
		question: 'You spend your free time...',
		answers: [
			'Option 1', 
			'Option 2', 
			'Option 3', 
			'Option 4'], 
	},

	{
		question: 'Your favorite animal is...',
		answers: [
			'Option 1', 
			'Option 2', 
			'Option 3', 
			'Option 4'], 
	},

	{
		question: `If you played Quidditch, you would play...`,
		answers: [
			'Option 1', 
			'Option 2', 
			'Option 3', 
			'Option 4'], 
	},


	{
		question: 'How do you feel about Dumbledore?',
		answers: [
			'Option 1', 
			'Option 2', 
			'Option 3', 
			'Option 4'], 
	},

	{
		question: 'What would you do if you you found a lost first year wandering the halls?',
		answers: [
			'Option 1', 
			'Option 2', 
			'Option 3', 
			'Option 4'], 
	}
	]*/