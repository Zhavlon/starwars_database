import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page'
import ErrorBoundary from "../error-boundary";
import {ItemDetails, Record} from "../item-details";
import './app.css';
import SwapiService from "../../services/swapi-service";

const App = () => {

	const swapi = new SwapiService();
	const {
		getPerson,
		getPlanet,
		getStarship,
		getPersonImage,
		getPlanetImage,
		getStarshipImage
	} = swapi;

	const personDetails = (
		<ItemDetails
			getData={getPerson}
			itemId={4}
			getImageUrl={getPersonImage}
		>
			<Record field='gender' label='Gender'/>
			<Record field='birthYear' label='Birth Year'/>
			<Record field='eyeColor' label='Eye Color'/>
		</ItemDetails>
	)

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
	return (
		<div>
			<Header/>
			{personDetails}
			{planetDetails}
			{starshipDetails}
		</div>
	);
};

export default App;