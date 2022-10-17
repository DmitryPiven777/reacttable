import { createSlice } from '@reduxjs/toolkit';

// это редьюсер
const initialState = {
    num:0
};

const counterSlice = createSlice({
    name:'counterSlice',
    initialState,
    reducers: {
        increment: (initialState) => {
            initialState.num = initialState.num + 1
        },
        
        decrement: (initialState) => {
            initialState.num = initialState.num - 1
        },

        item: (state,action) => {
            state.num = action.payload
        }
    },
});

// export default counterSlice;

export const reducerR = counterSlice.reducer;
export const reducerA = counterSlice.actions;

    