import React from 'react';
import './About.css' ;
import Title from '../title/Title.js' ; 

import Image2 from '../images/int3.jpg' ;
import Image3 from '../images/interior.png' ;
import Image4 from '../images/internal.jpg' ;


class About extends React.Component
{
	constructor(props)
	{
		super(props) ;
		this.state = {
			data : {}
		}
	}
	componentDidMount = () => {
		fetch('https://b-tiles-api.herokuapp.com/data?name=About')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => {
	            console.log(resp) ;
	            // this.setState({data: resp});
	                	} )
	    .catch( err => console.log(err) ) ;
	}
	render()
	{	
		return(
			<div>
				<Title name = 'About Us' items={["Home -", "About Us"]}/>
				<div>
					<h2>Welcome to B-tiles</h2>
				</div>
				<div >

					<h3>50 years of experience.</h3>
					
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<div className = 'layout1'>
					<div >
						<img src = {Image2}  alt = 'image2' width = '50' height = '50'/>
						<h4>Top Rated</h4>
						<p width = '5'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
							 Officia odio eum corporis consequatur.</p>
					</div>
					<div >
						<img src = {Image3} alt = 'image3' width = '50' height = '50' />
						<h4>Best Quality</h4>
						<p width = '5'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
							 Officia odio eum corporis consequatur.</p>
					</div>
					<div>
						<img src = {Image4} alt = 'image4' width = '50' height = '50' />
						<h4>Low Cost</h4>
						<p width = '5'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
							 Officia odio eum corporis consequatur.</p>
					</div>
					
				</div>
			</div>


		) ;
	}
}

export default About;
                         

                       // <span> <img src = {Pencil} alt = 'pencil' width = '15' height = '15'/></span>