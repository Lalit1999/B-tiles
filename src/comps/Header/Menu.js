import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;

import './menu.css' ;

class Menu extends Component {
	render() {
		return (
			<div>
				<div className="burger" >
					<Link className="menu-item" to='/'> Home </Link>
					<Link className="menu-item" to='/about'> About Us </Link>
					<Link className="menu-item" to='/products'> Products </Link>
					<Link className="menu-item" to='/contact'> Contact </Link>
				</div>
			</div>
		);
	}
}

export default Menu ;