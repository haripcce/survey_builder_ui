import { takeLatest } from "redux-saga/effects";
import { USER_LOGGING_IN, USER_LOGGING_OUT } from "./types";
import { userLoginSaga, userLogoutSaga } from "./sagas/userSagas";

export default function* rootSaga() {
    yield takeLatest(USER_LOGGING_IN, userLoginSaga);
    yield takeLatest(USER_LOGGING_OUT, userLogoutSaga);
}