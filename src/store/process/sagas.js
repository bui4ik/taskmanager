import { takeLatest, put, all, call } from 'redux-saga/effects'
import { processesGet, processesPost, processesDelete } from 'api/requests'
import {
  getProcessesPending,
  getProcessesFullfield,
  getProcessesRejected,
  createProcessPending,
  createProcessFullfield,
  createProcessRejected,
  deleteProcessPending,
  deleteProcessFullfield,
  deleteProcessRejected,
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

function* deleteProcess({ payload: { id } }) {
  try {
    yield call(processesDelete, id)
    yield put(deleteProcessFullfield({ id }))
  } catch (e) {
    yield put(deleteProcessRejected())
  }
}

export default function* () {
  yield all([
    takeLatest(getProcessesPending.type, getProcesses),
    takeLatest(createProcessPending.type, createProcess),
    takeLatest(deleteProcessPending.type, deleteProcess),
  ])
}
