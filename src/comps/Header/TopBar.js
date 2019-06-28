import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons' ;

import './topbar.css' ;

class TopBar extends React.Component
{
	render()
	{
		return (
			<div className="topbar"> 
				<div className="bar-item">
					<a href="tel:09564328921">
						<FontAwesomeIcon icon={faPhoneAlt}/> +91 - 9564-328-921
					</a>
				</div>
				<div className="bar-item">
					<a href="mailto:b.tiles@gmail.com" >
						<FontAwesomeIcon icon={faEnvelope}/> b.tiles@gmail.com
					</a>
				</div>
			</div>
			) ;
	}
}

export default TopBar ;