import { USER_LOGGED_IN, USER_LOGGING_IN, USER_LOGGING_FALED, USER_LOGGED_OUT, USER_LOGGING_OUT } from "../types";

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
  });

  export const userLoggingOut = () => ({
    type:USER_LOGGING_OUT
  })

  export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
  });

  export const userLoggingIn = user => ({
    type: USER_LOGGING_IN,
    user
  });

export const userLoginFailure = errors => ({
        type: USER_LOGGING_FALED,
        errors
});
