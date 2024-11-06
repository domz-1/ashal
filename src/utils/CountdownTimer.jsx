import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        // Calculate immediately
        calculateTimeLeft();

        // Update every second
        const timer = setInterval(calculateTimeLeft, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    const timeUnits = [
        { value: timeLeft.seconds, label: 'ثانية', english: 'seconds' },
        { value: timeLeft.minutes, label: 'دقائق', english: 'minutes' },
        { value: timeLeft.hours, label: 'الساعات', english: 'hours' },
        { value: timeLeft.days, label: 'الأيام', english: 'days' },
    ];

    return (
        <div className="Timer">
            {timeUnits.map((unit, index) => (
                <div key={unit.english} className="unit">
                    <span className="number">
                        {unit.value.toString().padStart(2, '0')}
                    </span>
                    <span className="text">{unit.label}</span>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;
