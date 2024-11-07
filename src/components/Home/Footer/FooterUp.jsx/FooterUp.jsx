import React from 'react';
import Right from './Right';
import Left from './Left';
import Center from './Center';

const FooterUp = () => {
    return (
        <div className="FooterUp">
            <Right />
            <Center />
            <Left />
        </div>
    );
};

export default FooterUp;
