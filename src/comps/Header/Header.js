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
					<Popup trigger={<span className="header-item"> Products </span>}
				      position="bottom center" on="hover" >
				      <div className="pop-p">
				      	<div className="popcon">
				      		<div> Residential </div>
				      		<div> Commercial </div>
				      		<img src={int3} alt="example" width="50" height="60"/>
				      	</div>
				      </div>
				    </Popup>
					<Link className="header-item" to='/contact'> Contact </Link>
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