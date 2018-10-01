import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';

const TimeUntil = () => {

    const countdownItemsArr = [
        {
            time: "23",
            tag: "Days"
        },
        {
            time: "2",
            tag: "hs"
        },
        {
            time: "20",
            tag: "Min"
        },
        {
            time: "20",
            tag: "Sec"
        }
    ];

    const countdownItemsView = countdownItemsArr.map((item, index) =>
        <div className='countdown_item' key={index}>
            <div className='countdown_time'>
                {item.time}
            </div>
            <div className='countdown_tag'>
                {item.tag}
            </div>
        </div>
    );


    return (
        <Slide left delay={1000}>
            <div className='countdown_wrapper'>
                <div className='countdown_top'>
                    Event starts in
                </div>
                <div className='countdown_bottom'>
                    {countdownItemsView}
                </div>
            </div>
        </Slide>
    );
}

export default TimeUntil;