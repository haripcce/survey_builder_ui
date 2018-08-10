import { USER_LOGGING_IN, USER_LOGGING_FALED } from "../types";

export default function formErrors(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGING_IN:
      return { ...state, login: {} };
    case USER_LOGGING_FALED:
      return { ...state, login: action.errors };
    default:
      return state;
  }
}
