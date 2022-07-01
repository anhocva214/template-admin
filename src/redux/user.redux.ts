import { userApi } from '@apis/exports';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { routerAppPush, routesPath } from '@utils/routes';
import Router from 'next/router';
import { RootState } from 'src/redux/reducer'
import { AppThunk, dispatch } from '.';
import { alertActions } from './alert.redux';
import cookie from 'react-cookies'
import { User, UserLogin } from 'src/models/user.model';
import { IErrorValidator } from 'src/models/error.model';

export interface UserState {
    isLogged: boolean;
    user: User;
    isLoadingLogin: boolean;
    errorsValidate: IErrorValidator;
    isLoadingAuthenticate: boolean;
}

export const initialState: UserState = {
    isLogged: false,
    user: null,
    isLoadingLogin: false,
    errorsValidate: {},
    isLoadingAuthenticate: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadingLogin: (state)=>{
            state.isLoadingLogin = true
        },
        loginSuccess: (state, {payload}: PayloadAction<User>) => {
            state.isLogged = true;
            state.isLoadingLogin = false;
            // state.user = new User(payload)
            // routerAppPush(routesPath.dashboard)
        },
        loginFail: (state, {payload}: PayloadAction<IErrorValidator>) => {
            state.isLoadingLogin = false;
            state.isLogged = false;
            state.errorsValidate = payload
            state.user = null
        },
        loadingAuthenticate: (state)=>{
            state.isLoadingAuthenticate = true
        },
        authenticateSuccess: (state, {payload}: PayloadAction<User>)=>{
            state.isLogged = true;
            // state.user = new User(payload)
            // state.isLoadingAuthenticate = false
        },
        authenticateFail: (state)=>{
            state.isLogged = false;
            state.user = null
            state.isLoadingAuthenticate = false;
            Router.push(routesPath.login)
        },
        logout: (state)=>{
            state.isLogged = false;
            state.user = null;
            Router.push(routesPath.login)

        }
    },
})

export const userReducer = userSlice.reducer
export const userSelector = (state: RootState) => state.user
export const actions = userSlice.actions

/*--------------------------*/
/*------- ACTIONS ----------*/
/*--------------------------*/

const login = (data: UserLogin):AppThunk => async (dispatch) => {
    try{
        dispatch(actions.loadingLogin())

        // let response = await userApi.login(data)
        // dispatch(alertActions.success({
        //     message: response.message
        // }))
        // dispatch(actions.loginSuccess(response.user))
        // cookie.save('access_token', response.token.access_token, {path: '/', maxAge: response.token.expires_in})        
    }
    catch(err){
        console.log(err);
        dispatch(alertActions.error({message: err?.data?.message}))
        dispatch(actions.loginFail(err?.data?.errors || {}))
    }
}

const authenticate = (): AppThunk => async (dispatch)=>{
    try{
        dispatch(actions.loadingAuthenticate())
        // let user = await userApi.authenticate()
        // dispatch(actions.authenticateSuccess(user))
        dispatch(actions.authenticateFail())
    
    }
    catch(err){
        console.log(err)
        let access_token = cookie.load('access_token')
        if (access_token){
            dispatch(alertActions.warning({message: "hết thời gian tuy cập"}))
            cookie.remove('access_token')
        }
        dispatch(actions.authenticateFail())
    }
}

const logout = (): AppThunk => async (dispatch) => {
    try{
        dispatch(actions.logout())
        // await userApi.logout()
        cookie.remove('access_token')
    }
    catch(err){
        console.log(err)
    }
}

export const userActions = {
    login,
    authenticate,
    logout
}