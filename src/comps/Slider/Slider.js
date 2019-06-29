import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons' ;

import './slider.css' ;

import int3 from '../images/int3.jpg' ;
import internal from '../images/internal.jpg' ;
import interior from '../images/interior.png' ;

let data = [
            {	style : {
	            	backgroundImage: 'url(' + int3 + ')', 
            	},
	            sliderTitle: 'Build Your Dream With Passion',
	            sliderSubtitle: 'Pehli Slide hai ye',
         	},
            {	style : {
	            	backgroundImage: 'url(' + internal+ ')',
            	},
	            sliderTitle: 'Build Your Dream With Passion',
	            sliderSubtitle: 'Dusri Slide hai ye',
         	},
            {	style : {
	            	backgroundImage: 'url(' + interior+ ')',
            	},
	            sliderTitle: 'Build Your Dream With Passion',
	            sliderSubtitle: 'Aur ye hai teesri slide'
	        }
        ];

class Slider extends Component 
{	
	dataList = () => {
		return data.map((item, i) => {
			return (
				<div className="swiper-slide" key={i}>
					<div className="slide" style={item.style}>
						<div className="cont">
							<div className="row">
								<h2> {item.sliderTitle} </h2>
								<p> {item.sliderSubtitle}</p>
							</div>
						</div>
					</div>
				</div> ) ;
		}) ;
	}
	render() {
		const params = {
		    slidesPerView : 1,
		    loop: true,
		    speed: 1000,
		    watchSlidesVisibility: true,
		    effect: 'fade',
		    navigation: {
			        nextEl: '.ht-swiper-button-next',
			        prevEl: '.ht-swiper-button-prev'
		    	},
		    renderPrevButton: () => (
                <div className="ht-swiper-button-prev ht-swiper-button-nav">
			 		<FontAwesomeIcon icon={faArrowLeft} />
                </div>
              ),
              renderNextButton: () => (
                <div className="ht-swiper-button-next ht-swiper-button-nav">
                	<FontAwesomeIcon icon={faArrowRight} />
                </div>
              ),
		    autoplay: {
		        delay: 5000,
		    }
		}

		return (
			<div className="slider-parent">
				<Swiper {...params}>
                    {this.dataList()}
                </Swiper>
			</div>
		);
	}
}

export default Slider ;