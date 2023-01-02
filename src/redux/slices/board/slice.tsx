import { createSlice } from '@reduxjs/toolkit';

export type BoardState = {
    id: string;
    title: string;
};

export const initialState: BoardState[] = [
    {
        id: '1',
        title: 'Backlog',
    },
    {
        id: '2',
        title: 'In Progress',
    },
    {
        id: '3',
        title: 'Done',
    },
];

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
// eslint-disable-next-line no-empty-pattern
export const {} = boardSlice.actions;

export default boardSlice.reducer;
