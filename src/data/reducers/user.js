import * as TYPES from 'data/types';

const initialState = {
  isFetching: false,
  data: [
    {
      id: 0,
    },
  ],
  current: {
    id: 0,
  },
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.LOAD_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.LOAD_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload,
      };
    case TYPES.LOAD_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.SIGN_UP_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...state.data, payload],
      };
    case TYPES.SIGN_UP_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.SIGN_IN_SUCCESS: {
      const currentUser = state.data.filter((user) => user.id === payload.id)?.[0];
      return {
        ...state,
        isFetching: false,
        current: currentUser,
      };
    }
    case TYPES.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        current: {
          id: 0,
        },
      };
    }
    case TYPES.CHANGE_USER_INFO_SUCCESS: {
      const userId = payload?.id;
      let updatedUser = state.data.filter((user) => user.id === userId)?.[0];
      updatedUser = { ...updatedUser, ...payload };
      const newData = [...state.data.filter((user) => user.id !== userId), updatedUser];
      return {
        ...state,
        data: newData,
      };
    }
    case TYPES.CHANGE_USER_PASSWORD_SUCCESS: {
      const userId = payload?.id;
      let updatedUser = state.data.filter((user) => user.id === userId)?.[0];
      updatedUser = { ...updatedUser, password: payload?.password };
      const newData = [...state.data.filter((user) => user.id !== userId), updatedUser];
      return {
        ...state,
        current: {
          ...state.current,
          password: payload?.password,
        },
        data: newData,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
