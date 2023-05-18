import React, { FC } from 'react';
import styled from 'styled-components';
import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface Props {
    className?: string;
    text?: string;
    active?: boolean;
}

const Component: FC<Props> = ({ className, text, active }) => {
    return (
        <ListItem className={className}>
            <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" color={active ? 'primary' : 'inherit'} />
            </ListItemIcon>
            <ListItemText>
                <Typography color={active ? 'primary' : 'inherit'}>{text}</Typography>
            </ListItemText>
        </ListItem>
    );
};

export default styled(Component)``;
