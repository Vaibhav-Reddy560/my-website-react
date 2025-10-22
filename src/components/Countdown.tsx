import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-11-08T09:00:00') - +new Date();
    let timeLeft: { [key: string]: number } = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  const timerComponents: JSX.Element[] = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }
    timerComponents.push(
      <div className="time-block" key={interval}>
        <span className="time-value">{String(timeLeft[interval]).padStart(2, '0')}</span>
        <span className="time-label">{interval}</span>
      </div>
    );
  });
  return (
    <div className="countdown-timer" data-aos="fade-up" data-aos-delay="500">
      {timerComponents.length ? timerComponents : <span>Event has started!</span>}
    </div>
  );
};
export default Countdown;
