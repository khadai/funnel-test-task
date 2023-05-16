import Head from 'next/head';
import { Container, Typography } from '@mui/material';

export default function Home() {
    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>Funnel App</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main>
                <Container>
                    <Typography>Hello World</Typography>
                </Container>
            </main>
        </>
    );
}
