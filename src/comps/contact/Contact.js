import React from 'react';
import './Contact.css' ;
import '../about/About.css' ;

import Image4 from '../images/dummy-map.jpg' ;


class Contact extends React.Component
{
	
	render()
	{
		return(
			<div>
				<div className = 'bgimage'>
					<h1>Contact - Us</h1>
					<div>
						<div className = 'layout'>Home - </div>

						<div className = 'layout'>Contact-Us</div> 
					</div>
				</div>	
				<div className = 'map'>
					<img className = 'ic'src = {Image4} alt = "map"/>
				</div>
				<div className = 'ic'>
					<div className = 'align'>
						<h3>Leave Your Message</h3>
						<input  type = "text" placeholder = "Your Name" />
						<input  type = "text" placeholder = "Your Email" />
						<input  type = "text" placeholder = "Your Message" />
						<button  type = "submit">Send</button>
					</div>
					<div className = 'align'>
						<h3>Contact Information</h3>
						<p>A-11 Main Market Shiv vihar Delhi - 34</p>
						<p>+91 - 9564-328-921</p>
						<p>b.tiles@gmail.com</p>
					</div>      		
				</div>
			</div>
		) ;
	}
}

export default Contact;