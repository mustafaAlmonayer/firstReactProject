const person = {
	name: 'Ranga',
	address: {
		line1: 'Baker Street',
		city: 'London',
		country: 'Uk'
	},
	profiles: [ 'twitter', 'linkedin', 'instagram' ],
	printProfile: () => person.profiles.map((profile) => console.log(profile))
};

function LearningJavaScript() {
	return (
		<div>
			<div>{person.name}</div>
			<div>{person.address.line1}</div>
			<div>{person.address.city}</div>
			<div>{person.address.country}</div>
			<div>{person.printProfile()}</div>
		</div>
	);
}

export default LearningJavaScript;
