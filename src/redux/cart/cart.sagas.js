import { call, put, all, takeLatest } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.action";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
