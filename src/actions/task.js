import { getAll } from '../apis/task'
import * as taskConstant from '../constants/task'

export const fetchTask = () => {
  return {
    type: taskConstant.FETCH_TASK,
  }
}
export const fetchTaskSuccess = (data) => {
  return {
    type: taskConstant.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  }
}
export const fetchTaskFailed = (error) => {
  return {
    type: taskConstant.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  }
}

// export const fetchTasks = () => {
//   return (dispatch) => {
//     dispatch(fetchTask())
//     getAll()
//       .then((response) => {
//         const { data } = response
//         dispatch(fetchTaskSuccess(data))
//       })
//       .catch((error) => dispatch(fetchTaskFailed(error)))
//   }
// }
