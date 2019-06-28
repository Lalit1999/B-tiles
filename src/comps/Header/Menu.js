import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;

import './menu.css' ;

class Menu extends Component {
	render() {
		return (
			<div>
				<div className="burger" >
					<Link className="header-item" to='/'> Home </Link>
					<Link className="header-item" to='/about'> About Us </Link>
					<Link className="header-item" to='/products'> Products </Link>
					<Link className="header-item" to='/contact'> Contact </Link>
				</div>
			</div>
		);
	}
}

export default Menu ;