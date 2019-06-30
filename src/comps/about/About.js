import React from 'react';
import './About.css' ;


import Image2 from '../images/int3.jpg' ;
import Image3 from '../images/interior.png' ;
import Image4 from '../images/internal.jpg' ;


class About extends React.Component
{
	
	render()
	{
		return(
			<div>
				<div className = 'bgimage'>
					<h1>About - Us</h1>
					<div>
						<div className = 'layout'>Home - </div>
						<div className = 'layout'> About-Us</div> 
					</div>
				</div>
				<div>
					<h2>Welcome to B-tiles</h2>
				</div>
				<div className = 'layout'>

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