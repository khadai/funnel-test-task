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
    TextField,
    Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { setStep, setStepThreeData } from '@/redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const stepThreeData = useSelector((state: any) => state.funnel.stepThreeData);

    const {
        handleSubmit,
        register,
        control,
        setValue,
        watch,
        formState: { errors: fieldsErrors },
    } = useForm<{ workersAmount: number; launch: string; email: string }>({
        defaultValues: {
            workersAmount: 0,
            launch: '',
            email: '',
        },
    });
    const workersAmount = watch('workersAmount');

    const onSubmit = (data: { workersAmount: number; launch: string; email: string }) => {
        console.log(data);
        dispatch(setStepThreeData(data));
        router.push({ pathname: 'result' });
    };

    useEffect(() => {
        setValue('workersAmount', stepThreeData.workersAmount);
        setValue('launch', stepThreeData.launch);
        setValue('email', stepThreeData.email);
    }, []);

    return (
        <div className={className}>
            <Typography color="primary" variant="h6" pb={1}>
                Create Project
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl error={Boolean(fieldsErrors)}>
                    <Typography variant="h4" pb={2}>
                        How many full-time workers on the project?
                    </Typography>
                    <Box flexDirection="row" display="flex">
                        <Button
                            variant="contained"
                            color="inherit"
                            disabled={workersAmount <= 0}
                            onClick={() => setValue('workersAmount', workersAmount - 1)}
                        >
                            -
                        </Button>
                        <Controller
                            name="workersAmount"
                            render={({ field: { onChange, name, value } }) => (
                                <NumericFormat
                                    name={name}
                                    value={value}
                                    onChange={onChange}
                                    customInput={TextField}
                                    thousandSeparator
                                    allowNegative={false}
                                    error={Boolean(fieldsErrors.workersAmount)}
                                />
                            )}
                            control={control}
                            rules={{
                                required: 'Amount required',
                                min: {
                                    value: 0,
                                    message: 'Amount must be a positive number',
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={() => setValue('workersAmount', workersAmount + 1)}
                        >
                            +
                        </Button>
                    </Box>
                    <FormHelperText>
                        {fieldsErrors.workersAmount ? fieldsErrors.workersAmount.message : undefined}
                    </FormHelperText>
                    <Typography variant="h4" pt={3.5} pb={2}>
                        Are you pre or post product launch?
                    </Typography>
                    <Controller
                        name="launch"
                        render={({ field }) => (
                            <RadioGroup {...field}>
                                <FormControlLabel value="pre" control={<Radio />} label="Pre Product" />
                                <FormControlLabel value="post" control={<Radio />} label="Post Product" />
                            </RadioGroup>
                        )}
                        control={control}
                        rules={{
                            required: 'Launch type required',
                        }}
                    />
                    <FormHelperText>{fieldsErrors.launch ? fieldsErrors.launch.message : undefined}</FormHelperText>
                    <Typography variant="h4" pb={2} pt={3.5}>
                        Contact Email
                    </Typography>
                    <Controller
                        name="email"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="projectName"
                                size="small"
                                placeholder="Enter your email"
                                helperText={fieldsErrors.email ? fieldsErrors.email.message : undefined}
                                error={Boolean(fieldsErrors.email)}
                                InputLabelProps={{ shrink: true }}
                                {...register('email')}
                            />
                        )}
                        control={control}
                        rules={{
                            required: 'Email required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        }}
                    />
                    <Box flexDirection="row" display="flex" pt={3.5}>
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={() => {
                                dispatch(setStep(2));
                            }}
                        >
                            Back
                        </Button>
                        <Button variant="contained" color="primary" className="step-one-submit-btn" type="submit">
                            Create Project
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
