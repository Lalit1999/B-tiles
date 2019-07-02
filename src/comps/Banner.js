import React from 'react' ;
import Panel from './panel/Panel.js' ;

import './Banner.css' ;

class Banner extends React.Component
{	createPanel = () => {
		return this.props.items.map((item) => <Panel name={item.name} clr={item.clr} img={item.img}/>) 
	}
	render()
	{
		return (
			<div className="banner">
				<h2 className="banner-title"> {this.props.title} </h2>
				<div className="banner-cont">
					{this.createPanel()}
				</div>
			</div>
			) ;
	}
}

export default Banner ;