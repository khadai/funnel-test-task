import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    fieldSize: number;
    modes: { name: string; field: number; id: string }[];
    activeSquares: { rowIndex: number; columnIndex: number }[];
}

const initialState: State = {
    fieldSize: 0,
    modes: [],
    activeSquares: [],
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setSize: (state, action: PayloadAction<number>) => {
            state.fieldSize = action.payload;
        },
        setModes: (state, action: PayloadAction<{ name: string; field: number; id: string }[]>) => {
            state.modes = action.payload;
        },
        addActiveSquare: (state, action: PayloadAction<{ rowIndex: number; columnIndex: number }>) => {
            return {
                ...state,
                activeSquares: [action.payload, ...state.activeSquares],
            };
        },
        removeActiveSquare: (state, action: PayloadAction<{ rowIndex: number; columnIndex: number }>) => {
            return {
                ...state,
                activeSquares: state.activeSquares.filter(
                    ({ rowIndex, columnIndex }) =>
                        rowIndex !== action.payload.rowIndex || columnIndex !== action.payload.columnIndex,
                ),
            };
        },
        resetActiveSquares: (state) => {
            return {
                ...state,
                activeSquares: initialState.activeSquares,
            };
        },
    },
});

export const { setSize, setModes, addActiveSquare, removeActiveSquare, resetActiveSquares } = gameSlice.actions;

export default gameSlice.reducer;
