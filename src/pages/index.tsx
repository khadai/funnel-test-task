import { Box, Theme, useMediaQuery } from '@mui/material';
import { DesktopMenu, Form, Menu } from '@/layouts';
import { FC } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
}

const Home: FC<Props> = ({ className }) => {
    const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    return (
        <div className={className}>
            {mobile ? (
                <Box>
                    <Menu />
                    <Form />
                </Box>
            ) : (
                <Box display="flex">
                    <DesktopMenu />
                    <Form className="desktop-form" />
                </Box>
            )}
        </div>
    );
};

export default styled(Home)`
    .desktop-form {
        margin-top: ${({ theme }) => theme.spacing(12.5)};
    }
`;
