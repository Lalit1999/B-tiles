import React from 'react' ;
import {Link} from'react-router-dom' ;

class Title extends React.Component
{	mapItem = (str) => {
		switch(str)
		{
			case "Home -" : return '' ;
			case "Contact Us" : return 'contact';
			case "About Us" : return 'about' ;
			default : return '' ;
		}

	}

	createSubTitle = () => {
		return this.props.items.map(item => {
			return (
			<div className = 'layout' key = {item}>
				<Link to={'/'+this.mapItem(item)}> {item} </Link>
			</div>
			);
		}) ;
	}
	render()
	{
		return(
			<div className = 'bgimage '>
					<h1><ins>{this.props.name}</ins></h1>
					<div>
						{this.createSubTitle()} 
					</div>
				</div>	
		) ;
	}
}

export default Title ;