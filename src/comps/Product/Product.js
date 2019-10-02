import React from 'react' ;
import './Product.css' ;

import E1 from '../images/exterior/ceramic.jpg' ;
import E2 from '../images/exterior/marble.png' ;
import E3 from '../images/exterior/mosaic.jpg' ;
import E4 from '../images/exterior/stone.jpg' ;

import F1 from '../images/flooring/ceramic.jpg' ;
import F2 from '../images/flooring/fauxwood.jpg' ;
import F3 from '../images/flooring/granite.jpg' ;
import F4 from '../images/flooring/marble.jpg' ;
import F5 from '../images/flooring/mosaic.jpg' ;
import F6 from '../images/flooring/onyx.jpg' ;
import F7 from '../images/flooring/quartzite.jpg' ;
import F8 from '../images/flooring/sandstone.jpg' ;

import I1 from '../images/interior/cement.jpg' ;
import I2 from '../images/interior/ceramic.jpg' ;
import I3 from '../images/interior/encaustic.jpg' ;
import I4 from '../images/interior/mosaic.jpg' ;
import I5 from '../images/interior/natural_stone.jpg' ;
import I6 from '../images/interior/porcelain.jpg' ;
import I7 from '../images/interior/quarry.jpg' ;
import I8 from '../images/interior/terracotta.jpg' ;


class Product extends React.Component
{
	render()
	{
		return (
			<div>
				<div>
					<h1 className = 'center'>Commercial</h1>
					<div>
						<h3 className = 'sub'>Exterior</h3>
						<div className = 'layout2'>
							<div>
								<img className = 'image' src = {E1}  alt = 'image1' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {E2}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {E3}  alt = 'image3' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {E4}  alt = 'image4' width = '300' 
								height = '200'/>
							</div>
						</div>
					</div>
					<div>
						<h3 className = 'sub'>Interior</h3>
						<div className = 'layout2'>
							<div>
								<img className = 'image' src = {I1}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {I2}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {I3}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {I4}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
						</div>
					</div>
					<div>
						<h3 className = 'sub'>Flooring</h3>
						<div className = 'layout2'>
							<div>
								<img className = 'image' src = {F1}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {F2}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {F3}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {F4}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h1 className = 'center'>Residential</h1>
					<div>
						<h3 className = 'sub'>Exterior</h3>
						<div className = 'layout2'>
							<div>
								<img className = 'image' src = {E1}  alt = 'image1' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {E2}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {E3}  alt = 'image3' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {E4}  alt = 'image4' width = '300' 
								height = '200'/>
							</div>
						</div>
					</div>
					<div>
						<h3 className = 'sub'>Interior</h3>
						<div className = 'layout2'>
							<div>
								<img className = 'image' src = {I5}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {I6}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {I7}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'image' src = {I8}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
						</div>
					</div>
					<div>
						<h3 className = 'sub'>Flooring</h3>
						<div className = 'layout2'>
							<div>
								<img className = 'imge' src = {F5}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'imge' src = {F6}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'imge' src = {F7}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
							<div>
								<img className = 'imge' src = {F8}  alt = 'image2' width = '300' 
								height = '200'/>
							</div>
						</div>
					</div>
				</div>
			 </div>
			) ;
	}
}

export default Product ;