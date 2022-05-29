import { combineReducers } from '@reduxjs/toolkit'

/* PLOP_INJECT_IMPORT */
import { userReducer } from './user.redux';
import { settingReducer } from './setting.redux';
import {alertReducer} from './alert.redux'


const rootReducer = combineReducers({
    /* PLOP_INJECT_USE */
	user: userReducer,
	setting: settingReducer,
    alert: alertReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer