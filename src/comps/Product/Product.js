import React from 'react' ;
import './Product.css' ;
import Box from './box/Box.js' ;
import Title from '../title/Title.js' ;
import Search from '../Search/Search.js' ;

class Product extends React.Component
{	constructor(props)
	{
		super(props) ;
		this.arr = [] ;
		this.state = {
			data : [] ,
			searchText : '' , 
			category : '' ,
			type: ''
		} ;
	}

	onSC = (event) => {
		this.setState({searchText : event.target.value}) ;
		// console.log(event.target.value) ;
	}

	componentDidMount = () => {
		fetch('https://b-tiles-api.herokuapp.com/product')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => {
	            // console.log(resp) ;
	            this.setState({data: resp}, () => {
	            	let str  = this.props.location.search;
	            	str = str.slice(1,).split('&') ;
	            	str = str.map( one => one.split('=')) ;
	            	//console.log(str) ;
	            	if(str[0][0] === 'type')
	            		this.setState({type: str[0][1]}) ;
	            	else if(str[0][0] === 'cate')
	            		this.setState({category: str[0][1]}) ;
	            	if(str.length > 1)
	            		if (str[1][0] === 'cate') 
	            			this.setState({category: str[1][1]}) ;

	            });
	            this.arr = resp ;
	                	} )
	    .catch( err => console.log(err) ) ;
	}

	createBox = () => {
		return this.arr.map((item) => <Box key={item.pname} add={this.props.add}
									name={item.pname} price={item.price} img={item.imglink}/>) 
	}

	render()
	{	//console.log(this.state) ;
		this.arr = this.state.data.filter(item => {
			return item.pname.toLowerCase().includes(this.state.searchText.toLowerCase()) ;
		}) ;
		// this.arr = this.state.data.filter(item => {
		// 	return item.category.toLowerCase().includes(this.state.category.toLowerCase()) ;
		// })
		// this.arr = this.state.data.filter(item => {
		// 	return item.type.toLowerCase().includes(this.state.type.toLowerCase()) ;
		// })
		return (
			<div className="product">
				<Title name = 'Products' items={["Home -", "Product"]}/>
				<Search searchChange={this.onSC} />	
				{this.createBox()}
			 </div>
			) ;
	}
}

export default Product ;

				// <div>
				// 	<h1 className = 'center'>Commercial</h1>
				// 	<div>
				// 		<h3 className = 'sub'>Exterior</h3>
				// 		<div className = 'layout2'>
				// 			<div>
				// 				<img className = 'image' src = {E1}  alt = 'image1' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {E2}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {E3}  alt = 'image3' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {E4}  alt = 'image4' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 		</div>
				// 	</div>
				// 	<div>
				// 		<h3 className = 'sub'>Interior</h3>
				// 		<div className = 'layout2'>
				// 			<div>
				// 				<img className = 'image' src = {I1}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {I2}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {I3}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {I4}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 		</div>
				// 	</div>
				// 	<div>
				// 		<h3 className = 'sub'>Flooring</h3>
				// 		<div className = 'layout2'>
				// 			<div>
				// 				<img className = 'image' src = {F1}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {F2}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {F3}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {F4}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 		</div>
				// 	</div>
				// </div>
				// <div>
				// 	<h1 className = 'center'>Residential</h1>
				// 	<div>
				// 		<h3 className = 'sub'>Exterior</h3>
				// 		<div className = 'layout2'>
				// 			<div>
				// 				<img className = 'image' src = {E1}  alt = 'image1' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {E2}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {E3}  alt = 'image3' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {E4}  alt = 'image4' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 		</div>
				// 	</div>
				// 	<div>
				// 		<h3 className = 'sub'>Interior</h3>
				// 		<div className = 'layout2'>
				// 			<div>
				// 				<img className = 'image' src = {I5}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {I6}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {I7}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'image' src = {I8}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 		</div>
				// 	</div>
				// 	<div>
				// 		<h3 className = 'sub'>Flooring</h3>
				// 		<div className = 'layout2'>
				// 			<div>
				// 				<img className = 'imge' src = {F5}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'imge' src = {F6}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'imge' src = {F7}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 			<div>
				// 				<img className = 'imge' src = {F8}  alt = 'image2' width = '300' 
				// 				height = '200'/>
				// 			</div>
				// 		</div>
				// 	</div>
				// </div>