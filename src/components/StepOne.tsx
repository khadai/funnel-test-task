import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import { Button, Chip, FormControl, InputAdornment, Stack, TextField, Typography } from '@mui/material';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const chipLabels = ['NFT', 'GameFi', 'DeFi', 'DAO', 'SocialFi', 'Metaverse', 'Tools', 'Ecosystem', 'Others'];
    const [activeChip, setActiveChip] = useState<string>('NFT');

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors: fieldsErrors },
    } = useForm<{ projectName: string; projectURL: string; projectCategory: string }>();

    const onSubmit = async (data: { projectName: string; projectURL: string; projectCategory: string }) => {
        console.log(data);
    };
    const handleClick = (item: string) => {
        console.info('You clicked the Chip.');
        setValue('projectCategory', item);
        setActiveChip(item);
    };

    useEffect(() => {
        setValue('projectCategory', activeChip);
    }, []);

    return (
        <div className={className}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth variant="outlined" className="form">
                    <Typography color="primary" variant="h6" pb={1}>
                        To Create Quest you need firstly create Project
                    </Typography>
                    <Typography variant="h4" pb={3.5}>
                        Add New Project
                    </Typography>
                    <Typography pb={0.5}>Project Name (It can be changed later)</Typography>
                    <Controller
                        name="projectName"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="projectName"
                                size="small"
                                defaultValue={''}
                                placeholder="Project Name"
                                helperText={fieldsErrors.projectName ? fieldsErrors.projectName.message : undefined}
                                error={Boolean(fieldsErrors.projectName)}
                                InputLabelProps={{ shrink: true }}
                                {...register('projectName')}
                            />
                        )}
                        control={control}
                        rules={{
                            required: 'Project name required',
                        }}
                    />
                    <Typography pt={3.5} pb={0.5}>
                        Project URL (It cannot be changed after creation)
                    </Typography>
                    <Controller
                        name="projectURL"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                id="projectURL"
                                size="small"
                                placeholder="Project URL"
                                helperText={fieldsErrors.projectURL ? fieldsErrors.projectURL.message : undefined}
                                error={Boolean(fieldsErrors.projectURL)}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Alphaguilty.io/</InputAdornment>,
                                }}
                                {...register('projectURL')}
                            />
                        )}
                        control={control}
                        rules={{
                            required: 'Project URL required',
                        }}
                    />
                    <Typography pt={3.5} pb={1.5}>
                        Project Category (It cannot be changed after creation)
                    </Typography>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                        {chipLabels.map((item, index) => (
                            <Chip
                                label={item}
                                key={index}
                                onClick={() => handleClick(item)}
                                color={item === activeChip ? 'primary' : 'default'}
                            />
                        ))}
                    </Stack>
                    <Button variant="contained" color="primary" className="step-one-submit-btn" type="submit">
                        Add Project
                    </Button>
                </FormControl>
            </form>
        </div>
    );
};

export default styled(Component)`
    .step-one-submit-btn {
        margin-top: ${({ theme }) => theme.spacing(3.5)};
    }
`;
