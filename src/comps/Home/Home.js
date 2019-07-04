import React from 'react' ;

import Slider from '../Slider/Slider.js' ;
import Banner from '../Banner.js' ;
import Parallax from '../Parallax/Parallax.js' ;
import BrandSlider from '../Slider/BrandSlider.js' ;

import wall from '../images/wall.jpg' ;
import floor from '../images/floor.jpg' ;
import exterior from '../images/it1.jpg' ;

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

const tiles2 = [
	{
		name: 'Wall' ,
		img : 'wall2' ,
		clr: 'green' 
	} ,
	{
		name: 'Floor' ,
		img : 'floor2' ,
		clr: 'red' 
	} ,
	{
		name: 'Exterior' ,
		img : 'exterior2' ,
		clr: 'blue' 
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
				<Banner title="Commercial" items={tiles2}/>
				<Parallax text="Build your dream home with B-Tiles" />
				<BrandSlider />
				<div> This is Home </div>
			</div>
			) ;
	}
}

export default Home ;