import { take, fork, call, put,delay } from 'redux-saga/effects'
import * as taskConstant from '../constants/task'
import { STATUS_CODE } from '../constants/index'
import { getAll } from '../apis/task'
import { fetchTaskFailed, fetchTaskSuccess } from '../actions/task'
import { showLoading, hiddenLoading } from '../actions/ui'

function* callActionTask() {
  yield take(taskConstant.FETCH_TASK)
  yield put(showLoading())
  console.log('after call action ')
  const response = yield call(getAll)
  const { status, data } = response
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchTaskSuccess(data))
  } else {
    yield put(fetchTaskFailed(data))
  }
  yield delay(1500)
  yield put(hiddenLoading())
  console.log('response: ', response)
}

function* rootSaga() {
  yield fork(callActionTask)
}

export default rootSaga
