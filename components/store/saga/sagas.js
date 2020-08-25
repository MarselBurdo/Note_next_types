import { put, takeEvery, all, call } from "redux-saga/effects";
import {showOneNote} from '../actions/fetchAction'
import * as types from '../types'

const fetchOnServer = async (id) =>{
  const response = await fetch(`http://localhost:4444/notes/${id}`)
  const note = await response.json()
    return note
}

function* sagaOneNote(action) {
  const data = yield call(fetchOnServer, action.id)
  yield put(showOneNote(data))
}

function* actionWatcher(){
  yield takeEvery(types.START_SHOW_ONE_NOTE, sagaOneNote)
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
