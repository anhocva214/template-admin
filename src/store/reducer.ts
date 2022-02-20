import { combineReducers } from '@reduxjs/toolkit'

/* PLOP_INJECT_IMPORT */
import { settingReducer } from './slices/setting.slice';
import { userReducer } from './slices/user.slice'
import {alertReducer} from './slices/alert.slice'


const rootReducer = combineReducers({
    /* PLOP_INJECT_USE */
	setting: settingReducer,
    user: userReducer,
    alert: alertReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer