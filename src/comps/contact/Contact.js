import React from 'react';
import './Contact.css' ;
import '../about/About.css' ;

import Image4 from '../images/dummy-map.jpg' ;


class Contact extends React.Component
{
	
	render()
	{
		return(
			<div className = 'clor'>
				<div className = 'bgimage'>
					<h1>Contact - Us</h1>
					<div>
						<div className = 'layout'>Home - </div>

						<div className = 'layout'>Contact-Us</div> 
					</div>
				</div>	
				<div>
				<img src = {Image4} alt = "map" />
					<h3>Leave Your Message</h3>
					<input type = "text" placeholder = "Your Name" />
					<input type = "text" placeholder = "Your Email" />
					<input type = "text" placeholder = "Your Message" />
					<button type = "submit">Send</button>
				</div>
				<div>
					<h3>Contact Information</h3>
					<p>yaha address aayega</p>
					<p>yaha phone number</p>
					<p>yaha email-address ayega</p>
				</div>      		
			</div>
		) ;
	}
}

export default Contact;