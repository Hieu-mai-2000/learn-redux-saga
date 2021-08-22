import * as uiConstants from '../constants/ui'

export const showLoading = () =>({
      type: uiConstants.SHOW_LOADING,
})

export const hiddenLoading = () => ({
  type: uiConstants.HIDDEN_LOADING,
})