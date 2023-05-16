import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '@/theme';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MuiThemeProvider theme={theme}>
            <Component {...pageProps} />
            <CssBaseline />
        </MuiThemeProvider>
    );
}
