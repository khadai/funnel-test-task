import { Box } from '@mui/material';
import { Form } from '@/layouts';
import Menu from '@/layouts/Menu';

//TODO: rename
export default function Home() {
    return (
        <Box display="flex">
            <Menu />
            <Form />
        </Box>
    );
}
