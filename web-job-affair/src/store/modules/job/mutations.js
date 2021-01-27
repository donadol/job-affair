export const update = function(state, job) {
  state.objective = job.objective === undefined ? "" : job.objective;
  state.commitment = job.commitment === undefined ? {} : job.commitment;
  state.details = job.details === undefined ? [] : job.details;
  state.organizations = job.organizations == undefined ? [] : job.organizations;
};

export const error = function(state, error) {
  state.error = error;
};
