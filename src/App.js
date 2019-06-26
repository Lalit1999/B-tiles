import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;

// import Home from '' ;
// import About from '' ;
// import Contact from '' ;
// import Products from '' ;
// import NotFound from './comps/Home/NotFound.js' ;
// import Header from '' ;
// import TopBar from '' ;
 
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
		            	Here
		            </Switch>
		          </div>
		        </BrowserRouter>	      		
			</div>
		) ;
	}
}

export default App;

		              // <Route path='/story/:name' component={BigDetail}/>



		              // <Route path='/' exact component={Home} />
		              // <Route path='/about' exact component={About}/>
		              // <Route path='/contact' exact component={Contact}/>
		              // <Route path='/products' exact component={Products}/>
		              // <Route exact component={NotFound} />
