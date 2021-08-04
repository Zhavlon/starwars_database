import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeopleList, PlanetList, StarshipList, PersonDetails} from '../sw-components';
import './app.css';
import SwapiService from "../../services/swapi-service";
import {Provider} from "../swapi-context/swapi-context";


const App = () => {

	return (
		<div>
			<Provider value={SwapiService}>
				<Header/>
				<PersonDetails/>
				<PeopleList/>
				<PlanetList/>
				<StarshipList/>
			</Provider>
		</div>
	);
};

export default App;