import React from 'react';
import '../css/Countdown.css';
import '../css/Home.css';
// import ReactSelect from 'react-query-selector';

// Getting Wedding Date and Current Date then calculating Time Remaining
const weddingDay = new Date('July 22, 2022 00:00:00').getTime();
const currentTime = new Date().getTime();
const timeRemaining = weddingDay - currentTime;


// Time declarations
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

class Countdown extends React.Component {
    
    // Calculating Time
    constructor(props) {
        super(props);
        this.state = {
            textDay: Math.floor(timeRemaining / day),
            textHour: Math.floor((timeRemaining % day) / hour),
            textMinute: Math.floor((timeRemaining % hour) / minute),
            textSecond: Math.floor((timeRemaining % minute) / second)
        }
}

tick() {
    this.setState({
        textDay: Math.floor(timeRemaining / day),
        textHour: Math.floor((timeRemaining % day) / hour),
        textMinute: Math.floor((timeRemaining % hour) / minute),
        textSecond: Math.floor((timeRemaining % minute) / second)
    })
}
    componentDidMount() {
        this.timerID = setInterval(() => this.tick() + 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

        render() {
        return (
            <>
            <div className="countdown-container">
                <div className="days">
                    <h4 className="days-container">{this.state.textDay}</h4>
                    <h4 className="time-text">days</h4>
                </div>

                <div className="hours">
                    <h4 className="hours-container">{this.state.textHour}</h4>
                    <h4 className="time-text">hours</h4>
                </div>

                <div className="minutes">
                    <h4 className="minutes-container">{this.state.textMinute}</h4>
                    <h4 className="time-text">minutes</h4>
                </div>

                <div className="seconds">
                    <h4 className="seconds-container">{this.state.textSecond}</h4>
                    <h4 className="time-text">seconds</h4>
                </div>
            </div>
            </>
        )
    }
}

export default Countdown;