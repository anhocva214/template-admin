import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/reducer'
import Alert from 'react-s-alert';
import { IAlert } from 'src/models/settings/alert';

export interface AlertState {
   alerts: IAlert[]
}

export const initialState: AlertState = {
    alerts: []
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        alertSuccess: (state, {payload}: PayloadAction<string>) => {
            Alert.success(payload, {
                position: 'top-right',
                effect: 'slide',
                timeout: 3000,
            });
        },
        alertError: (state, {payload}: PayloadAction<string>) => {
            Alert.error(payload, {
                position: 'top-right',
                effect: 'slide',
                timeout: 3000,
            });
        },

        info: (state, {payload}: PayloadAction<{message: string, timeout?: number}>) => {
            let id = (Math.random()*1000).toString()
            state.alerts.push({
                id,
                message: payload.message,
                type: 'primary',
                timeout: payload.timeout
            })
        },

        success: (state, {payload}: PayloadAction<{message: string, timeout?: number}>) => {
            let id = (Math.random()*1000).toString()
            state.alerts.push({
                id,
                message: payload.message,
                type: 'success',
                timeout: payload.timeout
            })
        },

        warning: (state, {payload}: PayloadAction<{message: string, timeout?: number}>) => {
            let id = (Math.random()*1000).toString()
            state.alerts.push({
                id,
                message: payload.message,
                type: 'warning',
                timeout: payload.timeout
            })
        },

        error: (state, {payload}: PayloadAction<{message: string, timeout?: number}>) => {
            let id = (Math.random()*1000).toString()
            state.alerts.push({
                id,
                message: payload.message,
                type: 'danger',
                timeout: payload.timeout
            })
        },

        remove: (state, {payload}: PayloadAction<{id: string}>)=>{
            let {id} = payload;
            state.alerts = state.alerts.filter(item => item.id != id)
        },


    },
})

export const actions = alertSlice.actions
export const alertReducer = alertSlice.reducer
export const alertSelector = (state: RootState) => state.alert


export const alertActions = {
    info: actions.info,
    success: actions.success,
    warning: actions.warning,
    error: actions.error,
    remove: actions.remove
}