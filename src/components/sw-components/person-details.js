import React from 'react'
import {ItemDetails, Record} from "../item-details";
import {Consumer} from "../swapi-context/swapi-context";

const withSwapiService = (ComponentView, methodsToProps) => {
	return (props) => {
		return (
			<Consumer>
				{
					(Swapi) => {
						const new_props = methodsToProps(new Swapi());
						return (
							<ComponentView {...props} {...new_props}/>
						)
					}
				}
			</Consumer>
		)
	}
}

const PersonDetails = ({getPerson, getPersonImage}) => {
	return (
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
}

const methodsToProps = (swapi_object) => {
	return {
		getPerson: swapi_object.getPerson,
		getPersonImage: swapi_object.getPersonImage
	}
}

export default withSwapiService(PersonDetails, methodsToProps);

