import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';
import { StepOne, StepThree, StepTwo } from '@/components';
import { useSelector } from 'react-redux';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const activeStep = useSelector((state: any) => state.funnel.step);

    let stepComponent;
    switch (activeStep) {
        case 1:
            stepComponent = <StepOne />;
            break;
        case 2:
            stepComponent = <StepTwo />;
            break;
        case 3:
            stepComponent = <StepThree />;
            break;
        default:
            stepComponent = <StepOne />;
            break;
    }
    return <Container className={className}>{stepComponent}</Container>;
};

export default styled(Component)``;
