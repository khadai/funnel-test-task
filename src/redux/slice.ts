import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    step: number;
    stepOneData: {
        projectName: string;
        projectURL: string;
        projectCategory: string;
    };
    stepTwoData: {
        projectGoal: string;
    };
    stepThreeData: {
        workersAmount: number;
        launch: string;
        email: string;
    };
}

const initialState: State = {
    step: 1,
    stepOneData: {
        projectName: '',
        projectURL: '',
        projectCategory: '',
    },
    stepTwoData: {
        projectGoal: '',
    },
    stepThreeData: {
        workersAmount: 0,
        launch: '',
        email: '',
    },
};

const funnelSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
        setStepOneData: (
            state,
            action: PayloadAction<{
                projectName: string;
                projectURL: string;
                projectCategory: string;
            }>,
        ) => {
            state.stepOneData = action.payload;
        },
        setStepTwoData: (
            state,
            action: PayloadAction<{
                projectGoal: string;
            }>,
        ) => {
            state.stepTwoData = action.payload;
        },
        setStepThreeData: (
            state,
            action: PayloadAction<{
                workersAmount: number;
                launch: string;
                email: string;
            }>,
        ) => {
            state.stepThreeData = action.payload;
        },
        resetState: () => {
            return {
                ...initialState,
            };
        },
    },
});

export const { setStep, setStepThreeData, setStepTwoData, setStepOneData, resetState } = funnelSlice.actions;

export default funnelSlice.reducer;
