import { all, fork } from 'redux-saga/effects'
import process from 'store/process/sagas'

export default function* () {
  yield all([fork(process)])
}
