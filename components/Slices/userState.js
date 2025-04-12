import { createSlice } from "@reduxjs/toolkit";

const initialState = {userStatus:false};

const userState =createSlice({
    name:'user',
    initialState,
    reducers:{
            authState(state){
                state.userStatus = !state.userStatus;
            }
    }
})


export const {authState} = userState.actions;

export default userState.reducer;