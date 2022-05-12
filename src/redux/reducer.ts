import { combineReducers } from '@reduxjs/toolkit'

/* PLOP_INJECT_IMPORT */
import { settingReducer } from './setting.redux';
import { userReducer } from './slices/user.slice'
import {alertReducer} from './alert.redux'


const rootReducer = combineReducers({
    /* PLOP_INJECT_USE */
	setting: settingReducer,
    user: userReducer,
    alert: alertReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer