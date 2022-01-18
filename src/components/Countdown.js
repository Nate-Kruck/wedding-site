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
    
    constructor(props) {
        super(props);
        this.state = {
            textDay: Math.floor(timeRemaining / day)
        }
    }
    // Calculating Time

tick() {
    this.setState({
        textDay: Math.floor(timeRemaining / day)
    })
}

componentDidMount() {
    this.timerID = setTimeout(() => this.tick(), 1000);
}
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

        render() {
        return (
            <>
            <div className="countdown-container">
                <div className="days-container">
                    <p className="p-quadrant-2">{this.state.textDay} Days</p>
                    {/* <p className="time-text">days</p> */}
                </div>

            </div>
            </>
        )
    }
}

export default Countdown;