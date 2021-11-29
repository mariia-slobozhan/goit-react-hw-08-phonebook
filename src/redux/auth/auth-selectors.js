export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUserName = (state) => state.auth.user.name;
export const getIsLoading = (state) => state.auth.isLoading;
export const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsLoading,
  getIsFetchingCurrent,
};

export default authSelectors;
