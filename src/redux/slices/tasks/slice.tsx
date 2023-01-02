import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type TaskState = {
    id: string;
    name: string;
    isComplete: boolean;
    description?: string;
    favorite: boolean;
};

export type TasksState = TaskState[];

export const initialState: TasksState = [
    {
        id: uuidv4(),
        name: 'Walk the dog',
        description: 'Take the dog for a walk around the block',
        isComplete: false,
        favorite: false,
    },
    {
        id: uuidv4(),
        name: 'Wash the car',
        description: 'Wash the car with soap and water',
        isComplete: true,
        favorite: false,
    },
    {
        id: uuidv4(),
        name: 'Take out the trash',
        description: 'Take out the trash to the curb',
        isComplete: true,
        favorite: false,
    },
    {
        id: uuidv4(),
        name: 'Buy groceries',
        isComplete: false,
        favorite: true,
    },
];

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
// eslint-disable-next-line no-empty-pattern
export const {} = tasksSlice.actions;

export default tasksSlice.reducer;
