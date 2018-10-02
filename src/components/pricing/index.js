import React, {Component} from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        priceItems: [
            {
                price: 100,
                position: 'Balcony',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                linkto: 'http://runn.biz',
                delay: 500
            },
            {
                price: 150,
                position: 'Balc',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                linkto: 'http://a4docs.com',
                delay: 0
            },
            {
                price: 250,
                position: 'Strong',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                linkto: 'http://hi-eddy.com',
                delay: 500
            }
        ]
    }

    showBoxes = () => (
        this.state.priceItems.map((item, index)=>(
            <Zoom
                key={index}
                delay={item.delay}
            >
                <div className='pricing_item' >
                    <div className='pricing_inner_wrapper'>
                        <div className='pricing_title'>
                            <span>${item.price}</span>
                            <span>{item.position}</span>
                        </div>
                        <div className='pricing_description'>
                            {item.description}
                        </div>
                        <div className='pricing_buttons'>
                            <MyButton
                                text='Purchase'
                                bck='#ffa800'
                                color='#fff'
                                href={item.linkto}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Pricing</h2>

                    <div className='pricing_wrapper'>
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;