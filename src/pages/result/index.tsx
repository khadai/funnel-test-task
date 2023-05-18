import { Box, Button, Container, Theme, Typography, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { resetState } from '@/redux/slice';

//TODO: rename
interface Props {
    className?: string;
}

const Result: FC<Props> = ({ className }) => {
    const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const router = useRouter();
    const dispatch = useDispatch();

    const stepOneData = useSelector((state: any) => state.funnel.stepOneData);
    const stepTwoData = useSelector((state: any) => state.funnel.stepTwoData);
    const stepThreeData = useSelector((state: any) => state.funnel.stepThreeData);

    const handleRestart = () => {
        router.push({ pathname: '/' });
        dispatch(resetState());
    };

    return (
        <Container className={className}>
            <Typography color="primary" variant="h6" pb={1}>
                Review
            </Typography>
            <Typography variant="h4" pb={3.5}>
                Check your data
            </Typography>
            <Typography pb={0.5}>Project Name:</Typography>
            <Typography pb={1} color="textSecondary">
                {stepOneData.projectName}
            </Typography>
            <Typography pb={0.5}>Project URL:</Typography>
            <Typography pb={1} color="textSecondary">
                Alphaguilty.io/{stepOneData.projectURL}
            </Typography>
            <Typography pb={0.5}>Project Category:</Typography>
            <Typography pb={2} color="textSecondary">
                {stepOneData.projectCategory}
            </Typography>

            <Typography pb={0.5}>Project Goal:</Typography>
            <Typography pb={2} color="textSecondary">
                {stepTwoData.projectGoal}
            </Typography>

            <Typography pb={0.5}>Full-time Workers Amount:</Typography>
            <Typography pb={1} color="textSecondary">
                {stepThreeData.workersAmount}
            </Typography>
            <Typography pb={0.5}>Product Launch:</Typography>
            <Typography pb={1} color="textSecondary">
                {stepThreeData.launch}
            </Typography>
            <Typography pb={0.5}>Contact Email:</Typography>
            <Typography pb={1} color="textSecondary">
                {stepThreeData.email}
            </Typography>

            <Box flexDirection="row" display="flex" pt={3.5}>
                <Button variant="contained" color="inherit" onClick={() => router.push({ pathname: '/' })}>
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className="step-one-submit-btn"
                    type="submit"
                    onClick={handleRestart}
                >
                    Restart
                </Button>
            </Box>
        </Container>
    );
};

export default styled(Result)`
    margin-top: ${({ theme }) => theme.spacing(12.5)};

    .step-one-submit-btn {
        margin-left: ${({ theme }) => theme.spacing(4)};
    }
`;
