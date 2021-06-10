import Square from './Square';
import { useState, useEffect, useMemo } from 'react';


const Board = () => {

	const initialState = useMemo(() => {
		return ['', '', '', '', '', '', '', '', '']
	}, [])

	const [gameState, setGameState] = useState(initialState);
	const [player1, setPlayer1] = useState(true);

	const handleClick = (i) => {
		let array = [...gameState];
		if (array[i] === '') {
			array[i] = player1 ? 'X' : 'O';
			setGameState(array);
			setPlayer1(!player1);
		}
	};

	const checkWinner = useMemo(() => {

		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];// 0 -7 
			// console.log(lines[i])
			if (gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
				return gameState[a]; // O or X -anyone
			}
		}
		return null
	}
		, [gameState])


	useEffect(() => {
		let winner = checkWinner;
		if (winner) {
			window.M.toast({ html: `Player "${winner}" Won` });
			setGameState(initialState);
		}
	}, [initialState, checkWinner]);

	return (
		<div >
			<div className='row row-margin-bottom'>
				<Square state={gameState[0]} handleClick={() => handleClick(0)} />
				<Square state={gameState[1]} handleClick={() => handleClick(1)} />
				<Square state={gameState[2]} handleClick={() => handleClick(2)} />
			</div>
			<div className='row row-margin-bottom'>
				<Square state={gameState[3]} handleClick={() => handleClick(3)} />
				<Square state={gameState[4]} handleClick={() => handleClick(4)} />
				<Square state={gameState[5]} handleClick={() => handleClick(5)} />
			</div>
			<div className='row row-margin-bottom'>
				<Square state={gameState[6]} handleClick={() => handleClick(6)} />
				<Square state={gameState[7]} handleClick={() => handleClick(7)} />
				<Square state={gameState[8]} handleClick={() => handleClick(8)} />
			</div>
			<div>
				<br />
				<br />
				<button
					className='waves-effect waves-light btn blue-grey darken-1'
					onClick={() => setGameState(initialState)}
				>
					Reset
				</button>
				<br />
				<br />
				<p className='blue-grey-text darken-1'>
					copyright © {new Date().getFullYear()} All Rights reserved
				</p>
			</div>
		</div>
	);
};

export default Board;
