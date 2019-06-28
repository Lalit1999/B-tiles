import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons' ;
import { faFacebookSquare, faWhatsapp, faRedditAlien } from '@fortawesome/free-brands-svg-icons' ;

import './topbar.css' ;
import BarItem from './BarItem.js' ;

class TopBar extends React.Component
{
	render()
	{
		return (
			<div className="topbar"> 
				<BarItem link="tel:09564328921" text=" +91 - 9564-328-921" icon={faPhoneAlt}/>
				<BarItem link="mailto:b.tiles@gmail.com" text=" b.tiles@gmail.com" icon={faEnvelope}/>
				<div className="right-top-bar">
					<BarItem link="https://www.facebook.com" logo="logo" icon={faFacebookSquare}/>
					<BarItem link="https://www.reddit.com" logo="logo" icon={faRedditAlien}/>
					<BarItem link="https://www.reddit.com" logo="logo" icon={faWhatsapp}/>
				</div>
			</div>
			) ;
	}
}

export default TopBar ;