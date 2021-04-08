import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'మునిరాజు వాళ్ళ మామ ఎవరు?',
			answerOptions: [
				{ answerText: 'భాస్కర్ మామ(post office)', isCorrect: false },
				{ answerText: 'శేషాద్రి మామ', isCorrect: false },
				{ answerText: 'సంకు మామ', isCorrect: true },
				{ answerText: 'పై ఏవి కావు', isCorrect: false },
			],
		},
		{
			questionText: 'మునిరాజు బ్యాగ్ లో దొరికిన వస్తువు ఏంటి?',
			answerOptions: [
				{ answerText: 'బూస్ట్ ప్యాకెట్', isCorrect: false },
				{ answerText: 'బుడ్డల ప్యాకెట్', isCorrect: true },
				{ answerText: 'భగవత్గీత బుక్', isCorrect: false },
				{ answerText: 'పై ఏవి కావు', isCorrect: false },
			],
		},
		{
			questionText: 'మునిరాజు కొత్త మారు పేరు ఏంటి?',
			answerOptions: [
				{ answerText: 'ఆంజినేయుడి గద', isCorrect: true },
				{ answerText: 'కోతి', isCorrect: false },
				{ answerText: 'తొండ', isCorrect: false },
				{ answerText: 'కోడి', isCorrect: false },
			],
		},
		{
			questionText: 'మునిరాజు ఫోన్ లో వున్న కలెక్షన్ ఎంత GB?',
			answerOptions: [
				{ answerText: '10', isCorrect: false },
				{ answerText: '256', isCorrect: false },
				{ answerText: '6.5', isCorrect: false },
				{ answerText: '150', isCorrect: true },
			],
		},
		{
			questionText: 'మునిరాజు ఫోన్ లో వున్న కలెక్షన్ ఎంత GB?',
			answerOptions: [
				{ answerText: '10', isCorrect: false },
				{ answerText: '256', isCorrect: false },
				{ answerText: '6.5', isCorrect: false },
				{ answerText: '150', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
