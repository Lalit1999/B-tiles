import React from 'react' ;
import './search.css' ;

const Searchbar = ({searchChange}) => {
	let url = window.location.pathname.slice(1) ;
	return (
		<div className="searchbar">	
			<input className='searchbox' type='search' placeholder={'Search ' + url} onChange={searchChange} />
			<br/>	
		</div>
		) ;
}

export default Searchbar ;
