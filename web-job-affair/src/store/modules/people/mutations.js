export const update = function(state, people) {
  state.offset = people.offset === undefined ? 0 : people.offset;
  state.results = people.results === undefined ? [] : people.results;
  state.size = people.size === undefined ? 0 : people.size;
  state.total = people.total === undefined ? 0 : people.total;
};

export const updateMetrics = function(state, people) {
  state.aggregators = people.aggregators === undefined ? {} : people.aggregators;
  state.total = people.total === undefined ? 0 : people.total;
};

export const error = function(state, error) {
  state.error = error;
};
