import { Typography } from '@mui/material';
const offer = (props) => {
    const { cat, description, image, color } = props;
    return (
        <div className="offer">
            <div className="text">
                <Typography
                    variant="body1"
                    sx={{ color: 'rgba(114, 114, 114, 1)', mb: 1 }}
                >
                    {cat}
                </Typography>
                <Typography
                    variant="text32"
                    sx={{
                        color: { color },
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    {description}
                </Typography>
                <Typography
                    variant="body1 "
                    sx={{
                        textDecoration: 'underline',
                        fontSize: '14px',
                        cursor: 'pointer',
                    }}
                >
                    عرض الآن
                </Typography>
            </div>
            <img src={image} alt={description} />
        </div>
    );
};

export default offer;
