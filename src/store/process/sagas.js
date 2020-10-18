import { takeLatest, put, all, call } from 'redux-saga/effects'
import { processesGet, processesPost } from 'api/requests'
import {
  getProcessesPending,
  getProcessesFullfield,
  getProcessesRejected,
  createProcessPending,
  createProcessFullfield,
  createProcessRejected,
} from './slice'

function* getProcesses() {
  try {
    const { data } = yield call(processesGet)
    yield put(getProcessesFullfield({ processes: data }))
  } catch (e) {
    yield put(getProcessesRejected())
  }
}

function* createProcess() {
  try {
    const { data } = yield call(processesPost)
    yield put(createProcessFullfield({ process: data[0] }))
  } catch (e) {
    yield put(createProcessRejected())
  }
}

export default function* () {
  yield all([
    takeLatest(getProcessesPending.type, getProcesses),
    takeLatest(createProcessPending.type, createProcess),
  ])
}
