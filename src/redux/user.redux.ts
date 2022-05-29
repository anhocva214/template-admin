import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/reducer'
import { AppThunk } from '.';

export interface UserState {
    isLogged: boolean
}

export const initialState: UserState = {
    isLogged: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        exampleAction: (state, {payload}: PayloadAction<string>) => {
            
        },
    },
})

export const userReducer = userSlice.reducer
export const userSelector = (state: RootState) => state.user
export const actions = userSlice.actions

/*--------------------------*/
/*------- ACTIONS ----------*/
/*--------------------------*/


export const userActions = {
    
}