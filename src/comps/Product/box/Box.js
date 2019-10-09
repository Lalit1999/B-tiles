import React from 'react' ;
import './box.css' ;

class Box extends React.Component
{	constructor()
	{	super() ;
		this.state = {
			qty: '' ,
		} ;
	}

	onNumberChange = (event) => {
		this.setState({qty:event.target.value}) ;
	}

	onCartButtonClick = () => {
		//console.log(this.state.qty) ;
		let p = parseInt(this.props.price)
		this.props.add(this.props.name, this.state.qty, p*this.state.qty)
		this.setState({qty: ''}) ;
	}

	render()
	{
		return(
			<div className="box">
				<div className="box-name">
					{this.props.name}					
				</div>
				<div>
					<img className="box-image" src = {this.props.img} alt = {this.props.name} /> 
				</div>
				<div>
					Rs.&nbsp;{this.props.price}
				</div>
				<div>
					<input type="number" onChange={this.onNumberChange} placeholder="No. of Packets"
						value={this.state.qty}/>
				</div>
				<button onClick={this.onCartButtonClick}> Add To Cart </button>
			</div>
		) ;
	}
}

export default Box ;