import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import '../css/Countdown.css';
import '../css/Home.css';

const countDate = new Date ("July 22, 2022 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now;
        console.log(gap);

        // How does time work?
        const second = 1000;
        const minute = second * 60;
        const hour =  minute * 60;
        const day = hour * 24;

const timerProps = {
    isPlaying: true,
    size: 100,
    strokeWidth: 4
};

const renderTime = (dimension, time) => {
return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

        const textDay = (time) => Math.floor(gap / day);
        const textHour = (time) => Math.floor((gap % day) / hour);
        const textMinute = (time) => Math.floor((gap % hour) / minute);
        const textSecond = (time) => Math.floor((gap % minute) / second);

const Timer = () => {
        
        const startTime = Date.now() / 1000;
        const endTime = startTime + 243248;
        
        const remainingTime = endTime - startTime;
        const days = Math.ceil(remainingTime / day);
        const daysDuration = days * day;

        return (
            <>
                <CountdownCircleTimer
                {...timerProps}
                colors={[["#000000"]]}
                duration={day}
                initialRemainingTime={remainingTime}
                data-testid="day-timer"
                >
                {({ elapsedTime }) =>
                renderTime("days", textDay(daysDuration-elapsedTime))}
                </CountdownCircleTimer>

                <CountdownCircleTimer 
                {...timerProps}
                colors={[["#000000"]]}
                duration={hour}
                initialRemainingTime={remainingTime % day}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > hour
                ]}
                >
                {({ elapsedTime }) =>
                renderTime("hours", textHour(day-elapsedTime))}
                </CountdownCircleTimer>

                <CountdownCircleTimer 
                {...timerProps}
                colors={[["#000000"]]}
                duration={minute}
                initialRemainingTime={remainingTime % hour}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > second
                ]}
                >
                {({ elapsedTime }) =>
                renderTime("minutes", textMinute(hour-elapsedTime))}
                </CountdownCircleTimer>

                <CountdownCircleTimer 
                {...timerProps}
                colors={[["#000000"]]}
                duration={second}
                initialRemainingTime={remainingTime % second}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > 0
                ]}
                >
                {({ elapsedTime }) =>
                renderTime("seconds", textSecond(elapsedTime))}
                </CountdownCircleTimer>
            </>
        )
        
    };
    // setInterval(Timer, 1000);
    
    
    export default Timer;