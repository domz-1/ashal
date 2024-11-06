// import React from 'react';

// const Electronic = (props) => {
//     const [img, imgPos, title, header, titleColor, bgcolor] = props;
//     return (
//         <div className="Electronic">
//             <div className="text">
//                 <p style={{ color: titleColor }}>{title}</p>
//                 <h3
//                     style={{
//                         color: 'rgba(46, 46, 46, 1)',
//                         fontWeight: 'bold',
//                         fontSize: '26px',
//                     }}
//                 >
//                     {header}
//                 </h3>
//                 <p
//                     style={{
//                         textDecoration: 'underline',
//                         color: 'rgba(69, 69, 69, 1)',
//                     }}
//                 >
//                     تسوق الآن
//                 </p>
//             </div>
//             <div
//                 className="img"
//                 style={{
//                     position: imgPos == 'corner' ? 'absolute' : 'relative',
//                     backgroundColor: bgcolor,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                 }}
//             >
//                 <img src={img} alt="" />
//             </div>
//         </div>
//     );
// };

// export default Electronic;

import React from 'react';
import clsx from 'clsx';

const Electronic = (props) => {
    const {
        img,
        imgPos,
        title,
        header,
        titleColor,
        bgcolor,
        className,
        ...rest
    } = props;

    return (
        <div
            className={clsx('electronic', className)}
            {...rest}
            style={{
                backgroundColor: bgcolor,
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div
                className="text"
                style={{
                    paddingTop: '20px',
                    paddingRight: '16px',
                    fontWeight: 'bold',
                }}
            >
                <p style={{ color: titleColor }}>{title}</p>
                <h3
                    style={{
                        color: 'rgba(46, 46, 46, 1)',
                        fontWeight: 'bold',
                        fontSize: '23px',
                    }}
                >
                    {header}
                </h3>
                <p
                    style={{
                        textDecoration: 'underline',
                        color: 'rgba(69, 69, 69, 1)',
                    }}
                >
                    تسوق الآن
                </p>
            </div>
            <div
                className="img"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    marginBottom: '20px',
                }}
            >
                <img src={img} alt="" style={{ scale: '0.7' }} />
            </div>
        </div>
    );
};

export default Electronic;
