import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Almarai", sans-serif',
        text48: {
            fontSize: '48px', // 4rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
        text46: {
            fontSize: '46px', // 3.833rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
        text37: {
            fontSize: '37px', // 3.083rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
        text29: {
            fontSize: '29px', // 2.417rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
        text23: {
            fontSize: '23px', // 1.917rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
        text19: {
            fontSize: '19px', // 1.583rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
        text16: {
            fontSize: '16px', // 1.333rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
        text15: {
            fontSize: '15px', // 1.25rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
        text14: {
            fontSize: '14px', // 1.25rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
        text12: {
            fontSize: '12px', // 1rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
        text10: {
            fontSize: '10px', // 0.833rem
            fontWeight: 400,
            [`&.bold`]: {
                fontWeight: 700,
            },
            [`&.urbanist`]: {
                fontFamily: '"Urbanist", sans-serif',
            },
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    text48: 'h1',
                    text46: 'h1',
                    text37: 'h2',
                    text29: 'h3',
                    text23: 'h4',
                    text19: 'h5',
                    text16: 'h6',
                    text15: 'h6',
                    text12: 'p',
                    text10: 'span',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    color: 'black',
                    backgroundColor: 'rgba(245, 245, 245, 1)',
                    boxShadow: 'none',
                    padding: '10px 0',
                },
            },
        },
    },
});

export default theme;
