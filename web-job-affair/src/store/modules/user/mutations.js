export const update = function(state, user) {
  state.person = user.person === undefined ? {} : user.person;
};

export const error = function(state, error) {
  state.error = error;
};
