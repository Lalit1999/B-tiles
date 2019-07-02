import React from 'react';
import './Contact.css' ;
import '../about/About.css' ;
import { faPhoneAlt, faEnvelope, faMap} from '@fortawesome/free-solid-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;

import Title from '../title/Title.js' ;

class Contact extends React.Component
{	
	constructor(props)
	{
		super(props) ;
		this.state = {
			data : {}
		}
	}
	componentDidMount = () => {
		fetch('https://b-tiles-api.herokuapp.com/data?name=Contact')
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
				<Title name = 'Contact Us' items={["Home -", "Contact Us"]}/>	
				<div className = 'map'>
					<div className="mapouter">
						<div className="gmap_canvas">
							<iframe title = "map" width="1100" height="400" id="gmap_canvas" 
							src="https://maps.google.com/maps?q=magolpuri%20market%20&t=&z=13&ie=UTF8&iwloc=&output=embed" 
							frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
						</div>
					</div>
				</div>
				<div className = 'ic'>
					<div className = 'align left'>
						<h3 className = 'size'>Leave Your Message</h3>
						<div>	
							<div>
								<input className = 'in' type = "text" placeholder = "Your Name" required/>
							</div>
							<div>
								<input className = 'in' type = "text" placeholder = "Your Email" required/>
							</div>
							<div>
								<input className = 'in' type = "text" placeholder = "Your Message" required/>
							</div>
							<div>
								<button className = 'but' type = "submit">Send</button>
							</div>
						</div>
					</div>
					<div className = 'vl'></div>
					<div className = 'align right'>
						<h3>Contact Information</h3>
						<div>
							<p><FontAwesomeIcon icon = {faMap} />&nbsp;{this.state.data.address}</p>
							<p><FontAwesomeIcon icon = {faPhoneAlt} />&nbsp;{this.state.data.phone}</p>
							<p><FontAwesomeIcon icon = {faEnvelope} />&nbsp;{this.state.data.email}</p>
						</div>
					</div>      		
				</div>
			</div>
		) ;
	}
}

export default Contact;