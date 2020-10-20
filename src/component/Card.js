import React from 'react';

const Card =({name,id })=>
{
	// console .log (key , name);
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5	'>
			<img alt="img" src={`https://robohash.org/${name}?size=200x200&set=set2`}/>
			<div>
				<h2>{name}</h2>
				<p>{id}</p>
			</div>
		</div>
		);
}

export default Card;