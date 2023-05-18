import React, { FC } from 'react';
import styled from 'styled-components';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';

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
                Create Project
            </Typography>
            <Typography variant="h4" pb={2}>
                How many full-time workers on the project?
            </Typography>
            <Box flexDirection="row" display="flex">
                <Button variant="contained" color="inherit">
                    -
                </Button>
                <TextField size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                <Button variant="contained" color="inherit">
                    +
                </Button>
            </Box>
            <Typography variant="h4" pt={3.5} pb={2}>
                Are you pre or post product launch?
            </Typography>
            <FormControl>
                <RadioGroup value={value} onChange={handleChange}>
                    <FormControlLabel value="pre" control={<Radio />} label="Pre Product" />
                    <FormControlLabel value="post" control={<Radio />} label="Post Product" />
                </RadioGroup>
            </FormControl>
            <Typography variant="h4" pb={2} pt={3.5}>
                Contact Email
            </Typography>
            <TextField size="small" fullWidth />
            <Box flexDirection="row" display="flex" pt={3.5}>
                <Button variant="contained" color="inherit">
                    Back
                </Button>
                <Button variant="contained" color="primary" className="step-one-submit-btn">
                    Create Project
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
