import { takeLatest, put, all, call } from 'redux-saga/effects'
import { processesGet } from 'api/requests'
import { getProcessesPending, getProcessesFullfield, getProcessesRejected } from './slice'

function* getProcesses() {
  try {
    const { data } = yield call(processesGet)
    yield put(getProcessesFullfield({ processes: data }))
  } catch (e) {
    yield put(getProcessesRejected())
  }
}

export default function* () {
  yield all([takeLatest(getProcessesPending.type, getProcesses)])
}
