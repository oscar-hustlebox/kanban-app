import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selectBoardSlice = (state: RootState) => state.board;

export const getTasks = createSelector(selectBoardSlice, (board) => board);
