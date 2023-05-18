import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { setStep, setStepTwoData } from '@/redux/slice';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const dispatch = useDispatch();
    const stepTwoData = useSelector((state: any) => state.funnel.stepTwoData);

    const radioLabels = ['Grow My Community', 'Activate Existing Members', 'Understand My Members', 'Other'];
    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors: fieldsErrors },
    } = useForm<{ projectGoal: string }>({
        defaultValues: {
            projectGoal: '',
        },
    });

    const onSubmit = (data: { projectGoal: string }) => {
        dispatch(setStepTwoData(data));
        dispatch(setStep(3));
    };

    useEffect(() => {
        setValue('projectGoal', stepTwoData.projectGoal);
    }, []);

    return (
        <div className={className}>
            <Typography color="primary" variant="h6" pb={1}>
                Project Details
            </Typography>
            <Typography variant="h4" pb={3.5}>
                What is your main goal with AlphaQuest?
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl component="fieldset" error={Boolean(fieldsErrors.projectGoal)}>
                    <Controller
                        name="projectGoal"
                        render={({ field }) => (
                            <RadioGroup {...field}>
                                {radioLabels.map((item, index) => (
                                    <FormControlLabel value={item} control={<Radio />} label={item} key={index} />
                                ))}
                            </RadioGroup>
                        )}
                        control={control}
                        rules={{
                            required: 'Project goal required',
                        }}
                    />
                    <FormHelperText>
                        {fieldsErrors.projectGoal ? fieldsErrors.projectGoal.message : undefined}
                    </FormHelperText>
                    <Box flexDirection="row" display="flex" pt={3.5}>
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={() => {
                                dispatch(setStep(1));
                            }}
                        >
                            Back
                        </Button>
                        <Button variant="contained" color="primary" className="step-one-submit-btn" type="submit">
                            Continue
                        </Button>
                    </Box>
                </FormControl>
            </form>
        </div>
    );
};

export default styled(Component)`
    .step-one-submit-btn {
        margin-left: ${({ theme }) => theme.spacing(4)};
    }
`;
