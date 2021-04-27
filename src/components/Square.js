const Square = ({ state, handleClick }) => {
	return (
		<div className='col s4 ' onClick={handleClick}>
			<div className='card blue-grey darken-1 dimensions'>
				<div className='card-content white-text'>
					<span className='card-title'>{state}</span>
				</div>
			</div>
		</div>
	);
};

export default Square;
