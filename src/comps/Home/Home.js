import React from 'react' ;

import Slider from '../Slider/Slider.js' ;

import wall from '../images/wall.jpg' ;
import floor from '../images/floor.jpg' ;
import exterior from '../images/exterior.jpg' ;

import Banner from '../Banner.js' ;

const tiles = [
	{
		name: 'Wall' ,
		img : 'wall' ,
		clr: 'red' 
	} ,
	{
		name: 'Floor' ,
		img : 'floor' ,
		clr: 'blue' 
	} ,
	{
		name: 'Exterior' ,
		img : 'exterior' ,
		clr: 'green' 
	} ,
] ;

class Home extends React.Component
{	constructor()
	{
		super() ;
		this.data = [
            {	style : {
	            	backgroundImage: 'url(' + wall + ')', 
            	},
	            title: 'Wall Tiles',
	            message: 'Walls of your house will speak when you place our tiles',
         	},
            {	style : {
	            	backgroundImage: 'url(' + floor+ ')',
            	},
	            title: 'Floor Tiles',
	            message: 'Make your floor shine, with our floor tile range',
         	},
            {	style : {
	            	backgroundImage: 'url(' + exterior+ ')',
            	},
	            title: 'Exterior Tiles',
	            message: 'Build Your House With Passion and Style'
	        }
        ];
	}
	render()
	{	
		return (
			<div>
				<Slider data={this.data}/>
				<Banner title="Residential" items={tiles}/>
				<div> This is Home </div>
				<div> This is Home </div>
			</div>
			) ;
	}
}

export default Home ;