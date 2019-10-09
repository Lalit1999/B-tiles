import React from 'react' ;

import './cart.css' ;

class Cart extends React.Component
{	constructor(){
		super() ;
		this.state = {
			view : 'cart' 
		}
	}

	onCartClick = () => {
		this.setState({view: 'detail'}) ;
	}

	onCloseClick = () => {
		this.setState({view: 'cart'}) ;
	}

	render()
	{	if(this.state.view === 'cart')
		{	return (
				<div onClick={this.onCartClick} className="cart-box">
					<div> Cart:&nbsp;&nbsp; </div>
					<div> {this.props.items} </div>
				</div>
				) ;
		}
		else if(this.state.view === 'detail')
		{
			return (
				<div className="cart-box">
					<button onClick={this.onCloseClick}> X Close </button>
					This is Detailed View

				</div>
				) ;
		}
	}
}

export default Cart ; 

// Comment for Line 36
// This.props.cart me cart ki sari items aa rhi hai
// Yaha par ek display ke liye comp banake createComp() aisa function lGANA HAI
//CartItesm bana hua hai use change kar dena 