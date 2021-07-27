import React, {Component} from 'react';
// import ErrorButton from '../error-button';

import './person-details.css';

const PersonDetailsView = ({data: {id, name, gender, birthYear, eyeColor}}) => {
	const url = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
	return (
		<div className="person-details card">
			{id ? <img className="person-image" src={url}/> : ''}

			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Gender</span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Birth Year</span>
						<span>{birthYear}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Eye Color</span>
						<span>{eyeColor}</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default class PersonDetails extends Component {

	state = {
		data: {},
		loading: true
	}

	componentDidMount() {
		this.updateDetails()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.selectedId !== this.props.selectedId) {
			this.updateDetails()
		}
	}

	updateDetails = () => {
		this.props.getData(this.props.selectedId)
			.then(data => {
				this.setState({
					data,
					loading: false
				})
			})
	}

	render() {
		return (
			<React.Fragment>
				<PersonDetailsView data={this.state.data}/>
				{/*<ErrorButton/>*/}
			</React.Fragment>
		)
	}
}