import * as uiConstants from '../constants/ui'

const initialState = {
      isLoading : false,
}

const reducer = (state=initialState,action) =>{
      switch (action.type) {
        case uiConstants.SHOW_LOADING: {
          return {
            ...state,
            isLoading: true,
          }
        }
        case uiConstants.HIDDEN_LOADING: {
          return {
            ...state,
            isLoading: false,
          }
        }

        default:
          return state
      }
}

export default reducer