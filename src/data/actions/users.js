import * as TYPES from 'data/types';
import { v4 as uuidv4 } from 'uuid';
import { currentProfileSelector, profileDataSelector } from 'data/selectors/userSelector';
import { mergeGuestCart } from './cart';

const checkExistUser = (users, newUser) => {
  return (
    !users.filter(
      (profile) => profile?.username === newUser?.username || profile?.email === newUser?.email
    )?.length > 0
  );
};

const checkExistUserLogin = (users, loginUser) => {
  return (
    users.filter(
      (profile) =>
        profile?.username === loginUser?.username && profile?.password === loginUser?.password
    )?.length > 0
  );
};

const getExistUserId = (users, loginUser) => {
  return users.filter(
    (profile) =>
      profile?.username === loginUser?.username && profile?.password === loginUser?.password
  )?.[0]?.id;
};

export const signUp = (payload) => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.SIGN_UP_REQUEST });
    const users = profileDataSelector(getState());
    const newUser = {
      id: uuidv4(),
      ...payload,
    };
    const exist = checkExistUser(users, newUser);
    if (!exist) {
      dispatch({
        type: TYPES.SIGN_UP_FAILURE,
      });
      return false;
    }
    dispatch({
      type: TYPES.SIGN_UP_SUCCESS,
      payload: newUser,
    });
    return true;
  } catch (err) {
    return dispatch({
      type: TYPES.SIGN_UP_FAILURE,
      payload: err,
    });
  }
};

export const signIn = (payload) => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.SIGN_IN_REQUEST });
    const users = profileDataSelector(getState());
    const exist = checkExistUserLogin(users, payload);
    const userId = getExistUserId(users, payload);
    const signInUser = {
      ...payload,
      id: userId,
    };
    if (exist) {
      dispatch({
        type: TYPES.SIGN_IN_SUCCESS,
        payload: signInUser,
      });
      await dispatch(mergeGuestCart(signInUser));
      return true;
    }
    dispatch({
      type: TYPES.SIGN_IN_FAILURE,
    });
    return false;
  } catch (err) {
    return dispatch({
      type: TYPES.SIGN_IN_FAILURE,
      payload: err,
    });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    dispatch({ type: TYPES.SIGN_OUT_REQUEST });
    return dispatch({
      type: TYPES.SIGN_OUT_SUCCESS,
    });
  } catch (err) {
    return dispatch({
      type: TYPES.SIGN_OUT_FAILURE,
      payload: err,
    });
  }
};

export const changeUserInfo = (info) => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.CHANGE_USER_INFO_REQUEST });
    const currentUserId = currentProfileSelector(getState())?.id;
    dispatch({
      type: TYPES.CHANGE_USER_INFO_SUCCESS,
      payload: { id: currentUserId, ...info },
    });
    return true;
  } catch (err) {
    return dispatch({
      type: TYPES.CHANGE_USER_INFO_FAILURE,
      payload: err,
    });
  }
};

export const changeUserPassword = (password) => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.CHANGE_USER_PASSWORD_REQUEST });
    const currentUserId = currentProfileSelector(getState())?.id;
    dispatch({
      type: TYPES.CHANGE_USER_PASSWORD_SUCCESS,
      payload: { id: currentUserId, password },
    });
    return true;
  } catch (err) {
    return dispatch({
      type: TYPES.CHANGE_USER_PASSWORD_FAILURE,
      payload: err,
    });
  }
};
