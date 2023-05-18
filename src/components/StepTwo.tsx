import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const [value, setValue] = React.useState('female');
    const radioLabels = ['Grow My Community', 'Activate Existing Members', 'Understand My Members', 'Other'];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className={className}>
            <Typography color="primary" variant="h6" pb={1}>
                Project Details
            </Typography>
            <Typography variant="h4" pb={3.5}>
                What is your main goal with AlphaQuest?
            </Typography>
            <FormControl>
                <RadioGroup value={value} onChange={handleChange}>
                    {radioLabels.map((item, index) => (
                        <FormControlLabel value={item} control={<Radio />} label={item} key={index} />
                    ))}
                </RadioGroup>
            </FormControl>
            <Box flexDirection="row" display="flex" pt={3.5}>
                <Button variant="contained" color="inherit">
                    Back
                </Button>
                <Button variant="contained" color="primary" className="step-one-submit-btn">
                    Continue
                </Button>
            </Box>
        </div>
    );
};

export default styled(Component)`
    .step-one-submit-btn {
        margin-left: ${({ theme }) => theme.spacing(4)};
    }
`;
