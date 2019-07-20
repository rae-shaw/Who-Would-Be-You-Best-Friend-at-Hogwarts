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
			{text: 'Lay out on beaches with all our other friends!', 
			ravenclaw: 2,
			hufflepuff: 10,
			slytherin: 0,
			gryffindor: 5
			},
			{text: 'Camping and rock climbing in the mountains!', 
			ravenclaw: 2,
			hufflepuff: 0,
			slytherin: 5,
			gryffindor: 10
			},
			{text: 'Visiting museums and art galleries!', 
			ravenclaw: 10,
			hufflepuff: 5,
			slytherin: 0,
			gryffindor: 2
			},
			
			{text:'Climb Mt. Everest or backpack the full Appalachian Trail!',
			ravenclaw: 2,
			hufflepuff: 0,
			slytherin: 10,
			gryffindor: 5
			}
		], 
	},

	{
		question: 'What class are you most excited about?',
		answers: [
			{text: 'Herbology', 
			ravenclaw: 2,
			hufflepuff: 10,
			gryffindor: 5,
			slytherin: 0
			},

			{text: 'History of Magic', 
			ravenclaw: 0,
			hufflepuff: 2,
			gryffindor: 0,
			slytherin: 10
			},

			{text: 'Defense Against the Dark Arts',
			ravenclaw: 5,
			hufflepuff: 0,
			gryffindor: 10,
			slytherin: 2
			},

			{text: 'Potions',
			ravenclaw: 10,
			hufflepuff: 5,
			gryffindor: 2,
			slytherin: 5
			}
		], 
	},

	{
		question: 'The finals are coming up soon! You',
		answers: [
			{text: 'Organize study groups and check-in to make sure everyone is good!',
			ravenclaw: 2,
			hufflepuff: 10,
			gryffindor: 5,
			slytherin: 0
			},
			{text: 'Create flash cards, rewrite notes, get to studying. No such thing as too much studying', 
			ravenclaw: 10,
			hufflepuff: 2,
			slytherin: 5,
			gryffindor: 0
			},
			{text: `I'll study after quidditch practice. And dinner. I'm sure it will be fine.`,
			ravenclaw: 0,
			hufflepuff: 5,
			gryffindor: 10,
			syltherin: 2
			},
			{text: 'Look over my meticulous and detailed notes.',
			ravenclaw: 5,
			slytherin: 10,
			hufflepuff: 0,
			gryffindor: 0
			}
		], 
	},

	{
		question: 'Your BFF jumps to your defense by',
		answers: [
			{text: `first checking on you and then making sure the other person understands how they're hurt you.`, 
			ravenclaw: 5,
			slytherin: 0,
			hufflepuff: 10,
			gryffindor: 2
			},
			{text: `leaving slugs in the other person's bed.`, 
			ravenclaw: 2,
			slytherin: 10,
			hufflepuff: 0,
			gryffindor: 5
			},
			{text: 'whipping out a creative and damning quip.', 
			ravenclaw: 10,
			slytherin: 5,
			hufflepuff: 2,
			gryffindor: 2
			},
			{text: 'by challenging the other person to a duel.',
			ravenclaw: 0,
			slytherin: 5,
			gryffindor: 10,
			hufflepuff: 10
			}
		], 
	},

	{
		question: 'You spend your free time...',
		answers: [
			{text: 'Reading',
			ravenclaw: 10, 
			hufflepuff: 2,
			slytherin: 5,
			gryffindor: 2
			},
			{text: 'Playing quidditch',
			ravenclaw: 0,
			hufflepuff: 5,
			gryffindor:10,
			slytherin: 2
			},
			{text: 'In my garden.',
			ravenclaw: 5,
			hufflepuff:10,
			gryffindor:2,
			slytherin:0
			},
			{text: 'solving puzzles. The more complicated, the better.',
			ravenclaw:5,
			hufflepuff:0,
			slytherin: 10,
			gryffindor:2
			}
		], 
	},



	{
		question: `When you miss the train to Hogwarts, you...`,
		answers: [
			{text: 'start making a list of feasible excuses for why it happened.', 
			ravenclaw: 5,
			slytherin: 10,
			hufflepuff: 2,
			gryffindor: 2
			},
			{text: 'take a calming, deep breath, send an owl to the school, and wait for your parents to find you.', 
			ravenclaw: 10,
			slytherin: 2,
			hufflepuff: 5,
			gryffindor: 0
			},
			{text: `aren't really worried because you know your friends will notice you're missing and tell someone.`, 
			ravenclaw: 2,
			slytherin: 0,
			hufflepuff: 10,
			gryffindor: 5
			},
			{text: 'come up with an elaborate (but likely flawed) plan to make it to school and imagine how cool your entrance is going to be!',
			ravenclaw: 2,
			slytherin: 0,
			hufflepuff: 5,
			gryffindor: 10
			}
		], 
	},


	{
		question: 'Your favorite candle scent is',
		answers: [
			{text: 'Deep, dark, earthy', 
			slytherin: 10,
			ravenclaw: 2,
			hufflepuff: 5,
			gryffindor: 0
			},
			{text: 'Sweet, strong, homey',
			hufflepuff: 10,
			ravenclaw: 5,
			gryffindor: 2,
			slytherin: 0
			},
			{text: 'Floral, fruity, light', 
			ravenclaw: 10,
			hufflepuff: 5,
			gryffindor: 2,
			syltherin: 0
			},
			{text: 'Clean, fresh, airy',
			gryffindor: 10,
			ravenclaw: 5,
			slytherin: 2,
			hufflepuff: 2
			}
		], 
	},

	{
		question: 'What would you do if you you found a lost first year wandering the halls?',
		answers: [
			{text: `Let them wander. You already have too many things on your plate and adding a lost first year doesn't fit in your planner.`,
			ravenclaw: 10,
			slytherin: 5,
			hufflepuff: 0,
			gryffindor: 2 
			},
			{text: 'Help them find their way to their next class, even if it means being late to yours.', 
			gryffindor: 10,
			slytherin: 0,
			hufflepuff: 5,
			ravenclaw: 2
			},
			{text: 'Watch and wait.', 
			slytherin: 10,
			gryffindor: 2,
			ravenclaw: 5,
			hufflepuff: 0
			},
			{text: 'Help them find their way and invite them to sit with you and your friends during dinner.',
			hufflepuff: 10,
			gryffindor: 5,
			ravenclaw: 2,
			slytherin: 0
			},
		], 
	}
	
]