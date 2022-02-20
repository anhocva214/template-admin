import { AppThunk, dispatch } from '@store/index'
import { sliceActions } from '@slices/setting.slice'


export const exampleThunk = (): AppThunk => async (dispatch) => {
    
}

export const switchSidebarToggle = sliceActions.switchSidebarToggle
export const switcSearchToggle = sliceActions.switchSearchToggle
export const setActiveNav = sliceActions.setActiveNav