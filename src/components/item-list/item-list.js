import React, {Component} from 'react';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import './item-list.css';

export default class ItemList extends Component {
  constructor() {
    super();
    this.updatePeopleList()
  }

  state = {
    data: null,
    loading: true
  }
  swapi = new SwapiService();

  updatePeopleList = () => {
    this.swapi.getAllPeople()
      .then(data => {
        this.setState({
          data: data,
          loading: false
        })
      })
  }

  renderPeopleList = (arr) => {
    const people = arr.map(item => {
      return (
        <li key={item.id} className='list-group-item'>
          {item.name}
        </li>
      )
    })
    return people
  }

  render() {
    const content = this.state.loading ? <Spinner/> : this.renderPeopleList(this.state.data)
    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
  }
}