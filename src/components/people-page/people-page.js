import React, {Component} from 'react'
import ItemList from '../item-list'
import {ItemDetails} from "../item-details";
import Row from '../row'
import SwapiService from '../../services/swapi-service'
import ErrorBoundary from "../error-boundary";

export default class PeoplePage extends Component {
	state = {
		itemId: 40
	}

	selectId = (id) => {
		this.setState({
			itemId: id
		})
	}

	render() {
		const swapi = new SwapiService()
		const left = (
			<ErrorBoundary>
				<ItemList
					selectId={this.selectId}
					getData={swapi.getAllPeople}>
					{item => `${item.name} (${item.gender})`}
				</ItemList>
			</ErrorBoundary>
		);
		const right = (
			<ErrorBoundary>
				<ItemDetails
					selectedId={this.state.itemId}
					getData={swapi.getPerson}
				/>
			</ErrorBoundary>
		)
		return (
			<Row left={left} right={right}/>
		)
	}
}