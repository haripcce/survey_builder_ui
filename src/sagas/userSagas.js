/* import { call, put } from "redux-saga/effects"; */
import { put } from "redux-saga/effects";
import { userLoggedIn, userLoginFailure, userLoggedOut } from "../actions/auth";
/* import api from "../api"; */
import history from "../history";

export function* userLoginSaga() {
  try {
    /* action */
    /* yield call(api.user.login, action.user); */
    const user =  {token:'hfjdsfkfj', user:'abhijit@synerzip.com'};
    localStorage.bookwormJWT = user.token;
    yield put(userLoggedIn(user));
    history.push("/");
  } catch (err) {
    yield put(userLoginFailure({error: 'failed to login'}));
  }
}

export function* userLogoutSaga() {
      localStorage.removeItem("bookwormJWT");
      yield put(userLoggedOut());
      history.push("/");
  }
