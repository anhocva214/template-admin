import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/reducer'
import { routerPush } from '@utils/routes';
import Router from 'next/router';
import cookie from 'react-cookies'

interface IActiveNav {
    id: string;
    idChildrent?: string;
    tab: string;
}

export interface SettingState {
    sidebarToggle: boolean,
    searchToggle: boolean,
    activeNav: IActiveNav
}

export const initialState: SettingState = {
    sidebarToggle: false,
    searchToggle: false,
    activeNav: {
        id: "1",
        idChildrent: null,
        tab: '/dashboard'
    }
}

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        switchSidebarToggle: (state, {payload}: PayloadAction<boolean>) => {
            state.sidebarToggle = payload
        },
        switchSearchToggle: (state, {payload}: PayloadAction<boolean>) => {
            state.searchToggle = payload
        },
        setActiveNav: (state, {payload}: PayloadAction<IActiveNav>) => {
            // console.log(payload)
            state.activeNav = payload
            routerPush(payload.tab)
        }
    },
})

export const sliceActions = settingSlice.actions
export const settingReducer = settingSlice.reducer
export const settingSelector = (state: RootState) => state.setting