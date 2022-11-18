import React, { useState } from 'react';

export default function App() {
	// questions array
	const questions = [
	{
		questionText: 'What is the capital of France?',
		answerOptions: [
			{ answerText: 'New York', isCorrect: false },
			{ answerText: 'London', isCorrect: false },
			{ answerText: 'Paris', isCorrect: true },
			{ answerText: 'Dublin', isCorrect: false },
		],
	},
	{
		questionText: 'Who is CEO of Tesla?',
		answerOptions: [
			{ answerText: 'Jeff Bezos', isCorrect: false },
			{ answerText: 'Elon Musk', isCorrect: true },
			{ answerText: 'Bill Gates', isCorrect: false },
			{ answerText: 'Tony Stark', isCorrect: false },
		],
	},
	{
		questionText: 'The iPhone was created by which company?',
		answerOptions: [
			{ answerText: 'Apple', isCorrect: true },
			{ answerText: 'Intel', isCorrect: false },
			{ answerText: 'Amazon', isCorrect: false },
			{ answerText: 'Microsoft', isCorrect: false },
		],
	},
	{
		questionText: 'How many Harry Potter books are there?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '4', isCorrect: false },
			{ answerText: '6', isCorrect: false },
			{ answerText: '7', isCorrect: true },
		],
	},
	];
	// hooks to keep track of current question and game state and score
	const [index, setIndex] = useState(0)
	const [game, setGame] = useState(true)
	const [score, setScore] = useState(0)

	// each answer choice has a true/false boolean, if correct answer, increment score
	const handleClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1)
		} 
		// increment question on click	
		const next = index + 1
		if (next < questions.length) {
			setIndex(next)
		} else {
			setGame(false)
		}

	}

	return (
		<div className='app'>
			{/* ternary operator to return content if game is on, 
				and return score screen when game is off */}
			{!game ? (
				<div className="score">you scored {score} / {questions.length}</div>
			): (
				<>
					<h1>Question {index + 1} / {questions.length}</h1>
					<p>{questions[index].questionText}</p>
					<div className='container'>
						{/* map over each answer option and put it in a button with click event
							and pass in true/false boolean */}
						{questions[index].answerOptions.map((option) => (
							<button onClick={() => handleClick(option.isCorrect)}>{option.answerText}</button>
						))}
					</div>		
				</>
      		)}
		</div>
	);
}