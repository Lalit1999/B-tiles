import React from 'react';
import './About.css' ;
import Title from '../title/Title.js' ; 

import Image2 from '../images/int3.jpg' ;
import Image3 from '../images/interior.png' ;
import Image4 from '../images/internal.jpg' ;
import Image1 from '../images/it1.jpg' ;


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
	            // console.log(resp) ;
	            this.setState({data: resp});
	                	} )
	    .catch( err => console.log(err) ) ;
	}
	render()
	{	
		return(
			<div>
				<Title name = 'About Us' items={["Home -", "About Us"]}/>
				<div className = 'sb'>
					<div>
						<img className = 'image' src = {Image1}  alt = 'image2' width = '500' 
						height = '400'/>
					</div>
					<div className = 'fonts'>
						<div>
							<h2>{this.state.data.greet}</h2>
						</div>
						<div >

							<h3>{this.state.data.subtitle}</h3>
							
							<p>{this.state.data.message}</p>
						</div>
					</div>
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