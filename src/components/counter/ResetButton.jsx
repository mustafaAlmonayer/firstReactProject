function ResetButton({ method }) {
	return (
		<div>
			<button className="resetButton" onClick={method}>
				Reset
			</button>
		</div>
	);
}

export default ResetButton;
