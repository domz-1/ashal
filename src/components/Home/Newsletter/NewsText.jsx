import React, { useState } from 'react';
import { Button } from '@mui/material';
import { TfiEmail } from 'react-icons/tfi';

const NewsText = () => {
    const [email, setEmail] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Here you can handle the form submission, e.g., send email to server
        console.log('Email submitted:', email);

        // Clear the input field
        setEmail('');
    };

    return (
        <div className="NewsText">
            <p className="header-name">نشرتنا الإخبارية</p>
            <p className="desc">
                انضم إلى قائمة المراسلات الخاصة بنا لتحديث أحدث المنتجات، ولا
                تفوتك العروض الترويجية التي سنرسلها إليك
            </p>
            <form onSubmit={handleSubmit} className="input">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                    autoFocus={true}
                    className="email-input"
                    placeholder=" بريدك الإلكتروني"
                />
                <TfiEmail
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '10px',
                        color: 'rgba(114, 114, 114, 1)',
                    }}
                />
                <Button
                    type="submit" // Set type to submit to submit the form
                    variant="contained"
                    sx={{
                        width: '150px',
                        borderRadius: '0px',
                        backgroundColor: 'rgba(255, 128, 0, 1)',
                        color: 'rgba(255, 255, 255, 1)',
                        fontSize: '14px',
                        boxShadow: 'none',
                        marginLeft: '10px', // Added margin for spacing
                    }}
                >
                    الاشتراك الآن
                </Button>
            </form>
        </div>
    );
};

export default NewsText;
