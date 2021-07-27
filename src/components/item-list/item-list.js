import React, {Component} from 'react';
import Spinner from "../spinner";
import './item-list.css';
// import ErrorButton from "../error-button";

export default class ItemList extends Component {
	state = {
		data: null,
		loading: true
	}

	componentDidMount() {
		this.updatePeopleList();
	}

	updatePeopleList = () => {
		this.props.getData()
			.then(data => {
				this.setState({
					data: data,
					loading: false
				})
			})
	}

	renderPeopleList = (arr) => {
		const people = arr.map((item) => {
			return (
				<li
					onClick={() => {
						this.props.selectId(item.id)
					}}
					key={item.id} className='list-group-item'>
					{this.props.children(item)}
				</li>
			)
		})
		return people
	}

	render() {
		const {loading, data} = this.state

		const content = loading ? <Spinner/> : this.renderPeopleList(data)
		return (
			<ul className="item-list list-group">
				{content}
				{/*<ErrorButton/>*/}
			</ul>
		);
	}
}