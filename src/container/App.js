import React ,{Component} from 'react';
import {connect} from 'react-redux';
import SearchBox from '../component/SearchBox';
import CardList from '../component/CardList';
import Scroll from '../component/Scroll';

import {setSearchField,requestRobots} from '../actions';

const mapStateToProps=(state)=>
{
	return {  
		searchfield : state.searchRobots.searchfield,
		robots:state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error,
	}
}
const mapDispatchToProps=(dispatch)=>
{
	return{
		onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
		requestRobots:()=>dispatch(requestRobots())
	}
}

class App extends Component 
{
	componentDidMount(){  
		this.props.requestRobots();
	}

	// onSearchChange=(event)=>
	// {
	// 	this.setState({searchfield:event.target.value});
	// }
	render(){
		const filteredRobo=this.props.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase()) } )

		return (
		<div className='tc'>
			<h1 className='tc'>Robo Friends</h1>
			<SearchBox onSearchChange={this.props.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobo}/>
			</Scroll>
		</div>
		);
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);