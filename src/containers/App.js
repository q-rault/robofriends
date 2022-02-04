import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
// import {robots as rbts} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

import {setSearchField} from '../actions'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchField
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super()
		this.state= {
			robots: [],
			// searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => { this.setState({ robots: users})});
	}

	// onSearchChange=(event) => {
	// 	this.setState({searchField:event.target.value})
	// }

	render(){
		const {robots} = this.state;
		const {searchField, onSearchChange} = this.props;
		const filteredRobots= robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return !robots.length ?
			<h1>Loading the robots</h1> :
			(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robotsCL={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);