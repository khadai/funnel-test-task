import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '@/theme';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
            <CssBaseline />
        </MuiThemeProvider>
    );
}
