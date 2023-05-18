import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';
import { StepOne, StepThree, StepTwo } from '@/components';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <Container className={className}>
            <StepOne />
            {/*<StepTwo />*/}
            {/*<StepThree />*/}
        </Container>
    );
};

export default styled(Component)``;
