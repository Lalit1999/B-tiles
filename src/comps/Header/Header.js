import React from 'react' ;
import {Link} from'react-router-dom' ;
import CheeseburgerMenu from 'cheeseburger-menu' ;
import HamburgerMenu from 'react-hamburger-menu' ;
import Popup from "reactjs-popup";

import Menu from './Menu.js' ;
import Logo from '../images/b.jpg' ;
import './header.css' ;

import int3 from '../images/int3.jpg' ;

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

	checkMobile = () => {
		if(window.screen.availWidth > 600)
		{	return (
				<div className="mini-menu">
					<Link className="header-item" to='/'> Home </Link>
					<Link className="header-item" to='/about'> About Us </Link>
					<Link className="header-item" to='/product'> Product </Link>
				    <Link className="header-item" to='/contact'> Contact </Link>
					<Link className="header-item" to='/login'> Login </Link>
				</div>
				) ;
		}
		else
		{
			return (
				<div>
					<CheeseburgerMenu isOpen={this.state.menuOpen} closeCallback={this.closeMenu}>
							<Menu closeCallback={this.closeMenu}/>
					</CheeseburgerMenu>
					<HamburgerMenu isOpen={this.state.menuOpen} menuClicked={this.openMenu} 
								   width={32} height={24} strokeWidth={8} color='white' 
								   borderRadius={1} animationDuration={0.5} />
				</div>
				) ;
		}
	}

	render()
	{
		return (
			<div className="topbar" id="bar"> 
				<Link to="/" className="header-item" id="logo"> 
					<img src={Logo} alt="logo" />
				</Link> 
				<div className = "right-header">
					{this.checkMobile()}
				</div>
			</div>
			) ;
	}
}

export default Header ;