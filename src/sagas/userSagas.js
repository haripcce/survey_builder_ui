import { call, put } from "redux-saga/effects";
import { userLoggedIn, userLoginFailure, userLoggedOut } from "../actions/auth";
import api from "../api";
import history from "../history";

export function* userLoginSaga(action) {
  try {
    const user = yield call(api.user.login, action.user);
    localStorage.bookwormJWT = user.token;
    yield put(userLoggedIn(user));
    history.push("/");
  } catch (err) {
    yield put(userLoginFailure(err.response.data.errors));
  }
}

export function* userLogoutSaga() {
      localStorage.removeItem("bookwormJWT");
      yield put(userLoggedOut());
      history.push("/");
  }
