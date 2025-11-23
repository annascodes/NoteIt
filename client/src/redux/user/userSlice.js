import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
}

const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {
            signInMethod:(state, action)=>{
                state.user = action.payload;
            },
            logOutMethod: (state)=>{
                state.user = null;
            }
        }
    }
)

export const {signInMethod, logOutMethod} = userSlice.actions;
export default userSlice.reducer;