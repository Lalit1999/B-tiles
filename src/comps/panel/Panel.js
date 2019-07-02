import React from 'react' ;
import './panel.css'; 

class Panel extends React.Component
{	
	render()
	{	let colclass = 'inner ' + this.props.clr ;
		return (
			<div className={"panel " + this.props.img}>
				<div className={colclass}>
					<div className="padded">
						{this.props.name}
					</div>
				</div>
			</div>
			) ;
	}
}

export default Panel ;