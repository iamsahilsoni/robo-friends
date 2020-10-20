import React from 'react';
import Card from './Card';

const CardList =({robots})=>
{
	const arr=[];
	for(var i=0;i<robots.length;i++)
		arr.push(<Card key={i} name ={robots[i].name} id={robots[i].email}/>);
	return (
		<div>
			{arr}
		</div>
	);
}
export default CardList;