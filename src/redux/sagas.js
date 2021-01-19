
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import {INCREMENT,DECREMENT} from "./action/actionTypes"

function* increaseCounterAsync() {
  try {
   
    yield put({
      type: 'INCREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
};
export function* watchIncreaseCounter() {
  yield takeLatest(INCREMENT, increaseCounterAsync);
};
function* decreaseCounter() {
  try {
    yield put({
      type: 'DECREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
};
export function* watchDecreaseCounter() {
  yield takeLatest(DECREMENT, decreaseCounter);
};
