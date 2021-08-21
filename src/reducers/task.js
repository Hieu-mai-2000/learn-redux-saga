import * as taskConstant from '../constants/task.js'

const initialState = {
  listTask: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstant.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      }
    }
    case taskConstant.FETCH_TASK_SUCCESS: {
      const { data } = action.payload
      return {
        ...state,
        listTask: data,
      }
    }
    case taskConstant.FETCH_TASK_FAILED: {
      return {
        ...state,
        listTask: [],
      }
    }

    default:
      return state
  }
}

export default reducer
