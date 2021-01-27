export const update = function(state, compatibility) {
  state.match = compatibility.match === undefined ? 0 : compatibility.match;
  state.skills = compatibility.skills === undefined ? [] : compatibility.skills;
};

export const error = function(state, error) {
  state.error = error;
}