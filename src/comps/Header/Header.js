import React from 'react' ;
import {Link} from'react-router-dom' ;

import './header.css' ;

class Header extends React.Component
{	constructor(props) {
	    super(props)
	    this.state = {
	      menuOpen: false,
	    }
	}

	openMenu = () => {
	    this.setState({ menuOpen: true })
	}

	closeMenu = () => {
		//console.log("trigger") ;
	    this.setState({ menuOpen: false })
	}

	render()
	{
		return (
			<div className="topbar" id="bar"> 
				<Link to="/" className="header-item" id="logo"> MARVEL </Link> 
				<div className = "right-header">
					<Link className="header-item" to='/'> Home </Link>
					<Link className="header-item" to='/about'> About Us </Link>
					<Link className="header-item" to='/products'> Products </Link>
					<Link className="header-item" to='/contact'> Contact </Link>
				</div>
			</div>
			) ;
	}
}

export default Header ;