import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2B8CE6',
        },
    },
    typography: {
        fontFamily: "'Space Grotesk', sans-serif",
        button: {
            textTransform: 'none',
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
