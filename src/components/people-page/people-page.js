import React, {Component} from 'react'
import ItemList from '../item-list'
import PersonDetails from "../person-details";
import Row from '../row'
import SwapiService from '../../services/swapi-service'
import ErrorBoundary from "../error-boundary";

export default class PeoplePage extends Component {
	state = {
		selectedId: 40
	}

	selectId = (id) => {
		this.setState({
			selectedId: id
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
				<PersonDetails
					selectedId={this.state.selectedId}
					getData={swapi.getPerson}
				/>
			</ErrorBoundary>
		)
		return (
			<Row left={left} right={right}/>
		)
	}
}