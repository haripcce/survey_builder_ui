import { combineReducers } from "redux";
import user from "./reducers/user";
import formErrors from "./reducers/formErrors";
import locale from "./reducers/locale";

export default combineReducers({
    user,
    formErrors,
    locale
  });
