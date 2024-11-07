import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const ArrowL = ({
    direction = 'left', // 'left', 'right', 'up', 'down'
    className = '',
    style = {},
    size = 24,
    color = 'currentColor',
    onClick = () => {},
}) => {
    const getRotation = () => {
        switch (direction) {
            case 'right':
                return 180;
            case 'up':
                return 90;
            case 'down':
                return 270;
            default: // left
                return 0;
        }
    };

    return (
        <div
            className={`arrow-wrapper arrow ${className}`}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...style,
            }}
            data-direction={direction}
            onClick={onClick}
        >
            <MdOutlineKeyboardArrowLeft
                size={size}
                color={color}
                style={{
                    transform: `rotate(${getRotation()}deg)`,
                    transition: 'transform 0.2s ease',
                }}
            />
        </div>
    );
};

export default ArrowL;
