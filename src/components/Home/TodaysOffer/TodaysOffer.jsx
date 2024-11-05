import React, { useState } from 'react';

const TodaysOffer = () => {
    const [selectedPhoto, setSelectedPhoto] = useState();
    return (
        <div className="TodaysOffer">
            <ul className="Choice">
                <li>
                    <img src={} alt="" />
                </li>
                <li>
                    <img src={} alt="" />
                </li>
                <li>
                    <img src={} alt="" />
                </li>
            </ul>
        </div>
    );
};

export default TodaysOffer;
