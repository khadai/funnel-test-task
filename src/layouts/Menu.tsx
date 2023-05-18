import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const menuItems = ['Start First Project', 'Project Details', 'Create Project'];
    const activeStep = useSelector((state: any) => state.funnel.step);

    return (
        <div className={className}>
            {menuItems.map((item, index) => (
                <FiberManualRecordIcon
                    className="menu-dot"
                    fontSize="small"
                    color={activeStep > index ? 'primary' : 'inherit'}
                    key={index}
                />
            ))}
        </div>
    );
};

export default styled(Component)`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: ${({ theme }) => theme.spacing(2.5, 0)};
`;
