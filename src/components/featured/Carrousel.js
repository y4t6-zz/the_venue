import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carrousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const getSliderHeight = () => {

        var height = 0;

        if(window.innerHeight > 700) {
            height = window.innerHeight - 100;
        } else {
            height = 600;
        }

        return height;

    };

    const height = getSliderHeight();

    return (
        <div
            className='carrousel_wrapper'
            style={{
                height: `${height}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className='carrousel_image'
                        style={{
                            background: `url(${slide_one})`,
                            height: `${height}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className='carrousel_image'
                        style={{
                            background: `url(${slide_two})`,
                            height: `${height}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className='carrousel_image'
                        style={{
                            background: `url(${slide_three})`,
                            height: `${height}px`
                        }}
                    ></div>
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;