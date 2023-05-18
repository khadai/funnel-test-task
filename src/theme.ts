import { createTheme } from '@mui/material';

const theme = createTheme({
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

export default theme;
