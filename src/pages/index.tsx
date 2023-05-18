import Head from 'next/head';
import { Box } from '@mui/material';
import { Form } from '@/layouts';
import Menu from '@/layouts/Menu';

//TODO: rename
export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>Funnel App</title>
            </Head>
            <main>
                <Box display="flex">
                    <Menu />
                    <Form />
                </Box>
            </main>
        </>
    );
}
