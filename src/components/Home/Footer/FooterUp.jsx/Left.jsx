import React from 'react';

const Left = () => {
    return (
        <div className="left">
            <p className="title">حساباتي</p>
            <div className="links">
                <p style={{ cursor: 'pointer' }}>حسابي</p>
                <p style={{ cursor: 'pointer' }}>سلة المشتريات</p>
                <p style={{ cursor: 'pointer' }}>الأسئلة الشائعة</p>
                <p style={{ cursor: 'pointer' }}>تواصل معنا</p>
            </div>
        </div>
    );
};

export default Left;
