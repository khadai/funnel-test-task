import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '@/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '@/redux/store';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
                <CssBaseline />
            </MuiThemeProvider>
        </Provider>
    );
}
