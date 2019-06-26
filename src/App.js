import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;

import Home from './comps/Home/Home.js' ;
import About from './comps/about/About.js' ;
import Contact from './comps/contact/Contact.js' ;
import Product from './comps/Product/Product.js' ;
import NotFound from './comps/Home/NotFound.js' ;
import Header from './comps/Header/Header.js' ;
import TopBar from './comps/Header/TopBar.js' ;
 
class App extends React.Component
{
	
	render()
	{
		return(
			<div>
				<BrowserRouter>
		          <div>
		          	<TopBar />
		            <Header />
		            <Switch>
		              <Route path='/' exact component={Home} />
		              <Route path='/about' exact component={About}/>
		              <Route path='/contact' exact component={Contact}/>
		              <Route path='/product' exact component={Product}/>
		              <Route exact component={NotFound} />
		            </Switch>
		          </div>
		        </BrowserRouter>	      		
			</div>
		) ;
	}
}

export default App;

		              // <Route path='/story/:name' component={BigDetail}/>



