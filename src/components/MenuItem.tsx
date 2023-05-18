import React, { FC } from 'react';
import styled from 'styled-components';
import { ListItem, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface Props {
    className?: string;
    type?: string;
    text?: string;
}

const Component: FC<Props> = ({ className, text }) => {
    return (
        <ListItem className={className}>
            <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{text}</ListItemText>
        </ListItem>
    );
};

export default styled(Component)``;
