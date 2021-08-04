import React from 'react';


const planetDetails = (
	<ItemDetails
		getData={getPlanet}
		itemId={11}
		getImageUrl={getPlanetImage}
	>
		<Record field='population' label='population'/>
		<Record field='rotationPeriod' label='rotation period'/>
		<Record field='diameter' label='diameter'/>
	</ItemDetails>
)

const starshipDetails = (
	<ItemDetails
		getData={getStarship}
		itemId={10}
		getImageUrl={getStarshipImage}
	>
		<Record field='manufacturer' label='manufacturer'/>
		<Record field='model' label='model'/>
	</ItemDetails>
)