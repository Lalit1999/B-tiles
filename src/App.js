import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;

import Home from './comps/Home/Home.js' ;
import About from './comps/about/About.js' ;
import Contact from './comps/contact/Contact.js' ;
import Product from './comps/Product/Product.js' ;
import NotFound from './comps/Home/NotFound.js' ;
import Header from './comps/Header/Header.js' ;
import TopBar from './comps/Header/TopBar.js' ;
import Login from './comps/Login/Login.js' ;
import Register from './comps/Login/Register.js' ;
import Cart from './comps/cart/Cart.js' ;
import CartItems from './comps/cart/CartItems.js' ;

import './app.css' ;
 
class App extends React.Component
{	constructor()
	{
		super() ;
		this.state={
			user : {} ,
			cart: [] ,
		} ;
	}

	addItemToCart = (str, num, price) => {
		let obj = {
			name: str ,
			qty: num ,
			price: price
		} ;
		let arr = [...this.state.cart , obj] ;
		console.log(arr, obj) ;
		this.setState({cart: arr}, () => console.log(this.state)) ;
	}
	
	render()
	{
		return(
			<div className="App">
				<BrowserRouter>
		          <div>
		          	<TopBar />
		            <Header />
		            <Cart items={this.state.cart.length} cart={this.state.cart}/>
		            <Switch>
		              <Route path='/' exact component={Home} />
		              <Route path='/about' exact component={About}/>
		              <Route path='/contact' exact component={Contact}/>
		              <Route path='/product' exact 
		              	render={props=><Product {...props} add={this.addItemToCart} />}/>
		              <Route path='/login' exact component={Login} />
              		  <Route path='/register' exact component={Register} />
                      <Route exact component={NotFound} />
		            </Switch>
		          </div>
		        </BrowserRouter>	      		
			</div>
		) ;
	}
}

export default App;


              		  // <Route path='/cart' exact 
              		  // 	render={props=><CartItems {...props} cart={this.state.cart} />} />
