import { combineReducers } from '@reduxjs/toolkit'

/* PLOP_INJECT_IMPORT */
import { authReducer } from './auth.redux';
import { settingReducer } from './setting.redux';
import {alertReducer} from './alert.redux'


const rootReducer = combineReducers({
    /* PLOP_INJECT_USE */
	auth: authReducer,
	setting: settingReducer,
    alert: alertReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer