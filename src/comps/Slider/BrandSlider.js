import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons' ;

import './slider.css' ;

class BrandSlider extends Component
{	
	dataList = () => {
		return this.props.data.map((item, i) => {
			return (
				<div className="swiper-slide2" key={i}>
					<div className="slide2" >
						<div className="cont2">
							<img src={item} alt={item}/>
						</div>
					</div>
				</div> ) ;
		}) ;
	}

	render()
	{	const params = {
            slidesPerView : 4,
            loop: true,
            speed: 1000,
            spaceBetween : 30,
            navigation: {
			        nextEl: '.next2',
			        prevEl: '.prev2'
		    	},
            renderPrevButton: () => (
                <div className="prev2 arrow2">
			 		<FontAwesomeIcon icon={faArrowLeft} />
                </div>
             ),
              renderNextButton: () => (
                <div className="next2 arrow2">
                	<FontAwesomeIcon icon={faArrowRight} />
                </div>
             ),
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            breakpoints: {
                1499:{
                    slidesPerView : 4
                },
                991:{
                    slidesPerView : 3
                },
                767:{
                    slidesPerView : 3
                },
                575:{
                    slidesPerView : 2
                }
            }
        }

		return (
			<div className="slider-parent2">
				<div className='brand-heading'>
					__________<ins> {this.props.title} </ins>__________ 
				</div>
				<div className="brand-con">
					<Swiper {...params}>
	                    {this.dataList()}
	                </Swiper>
	            </div>
			</div>
			) ;
	}
}

export default BrandSlider ;