import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import '../Countdown.css';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;


class Timer extends React.Component {
    
    render() {
        
        const startTime = Date.now() / 1000;
        const endTime = startTime + 28669308;
        
        const remainingTime = endTime - startTime;
        const days = Math.ceil(remainingTime / daySeconds);
        const daysDuration = days * daySeconds;

        return (
            <>
                <CountdownCircleTimer
                {...timerProps}
                colors={[["#7E2E84"]]}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
                >
                {({ elapsedTime }) =>
                renderTime("days", getTimeDays(daysDuration-elapsedTime))}
                </CountdownCircleTimer>

                <CountdownCircleTimer 
                {...timerProps}
                colors={[["#D14081"]]}
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > hourSeconds
                ]}
                >
                {({ elapsedTime }) =>
                renderTime("hours", getTimeHours(daySeconds-elapsedTime))}
                </CountdownCircleTimer>

                <CountdownCircleTimer 
                {...timerProps}
                colors={[["#F08876"]]}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > minuteSeconds
                ]}
                >
                {({ elapsedTime }) =>
                renderTime("minutes", getTimeMinutes(hourSeconds-elapsedTime))}
                </CountdownCircleTimer>

                <CountdownCircleTimer 
                {...timerProps}
                colors={[["#7E2E84"]]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > 0
                ]}
                >
                {({ elapsedTime }) =>
                renderTime("seconds", getTimeSeconds(elapsedTime))}
                </CountdownCircleTimer>
            </>
        )

    }
}

export default Timer;