import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';

class TimeUntil extends Component {

    state = {
        deadline: 'Dec, 16, 2018',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) {
            console.log('Date passed');
        } else {
            const seconds = Math.floor((time/1000)%60),
                minutes = Math.floor((time/1000/60)%60),
                hours = Math.floor((time/(1000*60*60))%24),
                days = Math.floor((time/(1000*60*60*24)));

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000)
    }

    renderItems = () => {
        const countdownItemsArr = [
            {
                time: this.state.days,
                tag: "Days"
            },
            {
                time: this.state.hours,
                tag: "hs"
            },
            {
                time: this.state.minutes,
                tag: "Min"
            },
            {
                time: this.state.seconds,
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

        return countdownItemsView;
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className='countdown_wrapper'>
                    <div className='countdown_top'>
                        Event starts in
                    </div>
                    <div className='countdown_bottom'>
                        {this.renderItems()}
                    </div>
                </div>
            </Slide>
        );
    }

}

export default TimeUntil;