import React, {Component} from 'react';
import Spinner from "../spinner";
import './item-list.css';
import SwapiService from "../../services/swapi-service";

const swapi = new SwapiService();
const {
	getPerson,
	getPlanet,
	getStarship,
	getPersonImage,
	getAllPeople,
	getPlanetImage,
	getStarshipImage
} = swapi;

const ItemList = (props) => {
	const renderElements = (arr) => {
		const people = arr.map((item) => {
			return (
				<li
					onClick={() => {
						props.selectId(item.id)
					}}
					key={item.id} className='list-group-item'>
					{props.children(item)}
				</li>
			)
		})
		return people
	}

	const content = renderElements(props.data)
	return (
		<ul className="item-list list-group">
			{content}
			{/*<ErrorButton/>*/}
		</ul>
	);
}

export default ItemList;