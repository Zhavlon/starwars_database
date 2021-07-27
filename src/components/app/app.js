import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page'
import ErrorBoundary from "../error-boundary";
import './app.css';

const App = () => {
	return (
		<div>
			<Header/>
			<ErrorBoundary>
				<RandomPlanet/>
			</ErrorBoundary>
			<PeoplePage/>
		</div>
	);
};

export default App;