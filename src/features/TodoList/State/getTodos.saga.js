import { call, put, takeEvery } from "redux-saga/effects";
import { fetchTodosSuccess, getTodos } from "./todoSlice";
import Api from "../api";

function* fetchTodos() {
  try {
    const data = yield call(Api.fetchTodos);
    yield put(fetchTodosSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* getTodosSaga() {
  yield takeEvery(getTodos.type, fetchTodos);
}

export default getTodosSaga;
