import { AppThunk, dispatch } from '@store/index'
import { sliceActions } from '@slices/alert.slice'


// export const alertSuccess = sliceActions.alertSuccess
// export const alertError =sliceActions.alertError
export const info = sliceActions.info
export const success = sliceActions.success
export const warning = sliceActions.warning
export const error = sliceActions.error
export const remove = sliceActions.remove