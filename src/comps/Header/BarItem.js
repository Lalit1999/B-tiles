import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;

const BarItem  = (props) => {
	return (
		<div className={props.logo + ' bar-item'}> 
			 <a href={props.link} >
			 	<FontAwesomeIcon icon={props.icon} />
			 	{props.text}
			 </a>
		</div>
	);
}

export default BarItem ;


