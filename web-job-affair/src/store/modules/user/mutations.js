export const update = function(state, user) {
  state.person = user.person === undefined ? {} : user.person;
};
