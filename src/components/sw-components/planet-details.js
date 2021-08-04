import React from 'react';
import {ItemDetails, Record} from "../item-details";
import withSwapiService from "../hoc/with-swapi-service";

const PlanetDetails = ({getPlanet, getPlanetImage}) => {
	return (
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
}

const methodsToProps = (swapi_object) => {
	return {
		getPlanet: swapi_object.getPlanet,
		getPlanetImage: swapi_object.getPlanetImage
	}
}

export default withSwapiService(PlanetDetails, methodsToProps)