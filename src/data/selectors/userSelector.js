import { createSelector } from 'reselect';

export const getProfile = (state) => state.user;

export const profileIsFetchingSelector = createSelector(getProfile, (user) => user.isFetching);
export const profileDataSelector = createSelector(getProfile, (user) => user.data);
export const currentProfileSelector = createSelector(getProfile, (user) => user.current);
export const isAuthSelector = createSelector(getProfile, (user) => user.current.id !== 0);
