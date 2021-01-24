export const update = function(state, jobs) {
  state.offset = jobs.offset === undefined ? 0 : jobs.offset;
  state.results = jobs.results === undefined ? state.results : [...state.results, ...jobs.results];
  state.size = jobs.size === undefined ? state.size : state.size + jobs.size;
  state.total = jobs.total === undefined ? 0 : jobs.total;
  console.log(state)
};

export const updateMetrics = function(state, jobs) {
  state.aggregators = jobs.aggregators === undefined ? {} : jobs.aggregators;
};
