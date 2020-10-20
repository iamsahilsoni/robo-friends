import React ,{Component} from 'react';
import SearchBox from '../component/SearchBox';
import CardList from '../component/CardList';
import {robots} from '../robots';
import Scroll from '../component/Scroll';
class App extends Component 
{
	constructor()
	{
		super();
		this.state={
			searchfield:''
		}
	}
	onSearchChange=(event)=>
	{
		this.setState({searchfield:event.target.value});
	}
	render(){
		const filteredRobo=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) } )

		return (
		<div className='tc'>
			<h1 className='tc'>Robo Friends</h1>
			<SearchBox onSearchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobo}/>
			</Scroll>
		</div>
		);
	}
}
export default App;