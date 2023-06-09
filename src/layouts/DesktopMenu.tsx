import React, { FC } from 'react';
import styled from 'styled-components';
import {List, MenuList, Theme, useMediaQuery} from '@mui/material';
import { MenuItem, StepOne, StepThree, StepTwo } from '@/components';
import { useSelector } from 'react-redux';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const menuItems = ['Start First Project', 'Project Details', 'Create Project'];
    const activeStep = useSelector((state: any) => state.funnel.step);
    const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    return (
        <List className={className}>
            <div className="menu-items">
                {menuItems.map((item, index) => (
                    <MenuItem text={item} key={item} active={activeStep > index} />
                ))}
            </div>
            <div className="gradient" />
        </List>
    );
};

export default styled(Component)`
    height: 100vh;
    border-right: 1px solid gray;

    .menu-items {
        margin-top: ${({ theme }) => theme.spacing(5)};
    }

    .gradient {
        box-sizing: border-box;
        position: absolute;
        border-radius: 70%;
        width: 90%;
        height: 56px;
        left: -16px;
        bottom: 0;
        background: linear-gradient(280.87deg, #87f696 20.45%, #00ffff 41.25%, #9c16ef 72.03%, #4200ff 94.43%);
        opacity: 0.5;
        filter: blur(32.5px);
    }
`;
