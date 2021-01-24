export const getOrganization = state => {
  let data = {
    labels: [],
    series: [[]]
  };

  const settings = {
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      chartPadding: {
        top: 20,
        right: 15,
        bottom: 10,
        left: 10
      }
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }
      ]
    ]
  };

  if (state.aggregators == undefined) {
    return { data, settings };
  }

  if (Object.keys(state.aggregators).length === 0) {
    return { data, settings };
  }

  const organizations = state.aggregators["organization"];

  if (organizations.length === 0) {
    return { data, settings };
  }

  organizations.sort((a, b) =>
    a.total < b.total ? 1 : b.total < a.total ? -1 : 0
  );

  let items = organizations.slice(0, 5);
  for (let item of items) {
    data.labels.push(item.value);
    data.series[0].push(item.total);
  }

  return { data, settings };
};

export const getRemote = state => {
  let data = {
    labels: [],
    series: []
  };

  const settings = {
    options: {},
    responsiveOptions: [["screen and (max-width: 640px)"]]
  };

  if (state.aggregators == undefined) {
    return { data, settings };
  }

  if (Object.keys(state.aggregators).length === 0) {
    return { data, settings };
  }

  const remote = state.aggregators["remote"];

  if (remote.length === 0) {
    return { data, settings };
  }

  let items = remote.slice(0, remote.length);
  for (let item of items) {
    data.labels.push(item.value);
    data.series.push(item.total);
  }

  return { data, settings };
};

export const getWantedSkills = state => {
  let data = {
    labels: [],
    series: [[]]
  };

  const settings = {
    options: {
      axisX: {
        showGrid: false
      },
      low: 0,
      chartPadding: {
        top: 20,
        right: 15,
        bottom: 10,
        left: 10
      }
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }
      ]
    ]
  };

  if (state.aggregators == undefined) {
    return { data, settings };
  }

  if (Object.keys(state.aggregators).length === 0) {
    return { data, settings };
  }

  const skills = state.aggregators["skill"];

  if (skills.length === 0) {
    return { data, settings };
  }

  skills.sort((a, b) => (a.total < b.total ? 1 : b.total < a.total ? -1 : 0));

  let items = skills.slice(0, 5);
  for (let item of items) {
    data.labels.push(item.value);
    data.series[0].push(item.total);
  }

  return { data, settings };
};

export const getTypes = state => {
  let data = {
    labels: [],
    series: []
  };

  const settings = {
    options: {
      donut: true,
      donutWidth: 60,
      startAngle: 270
    },
    responsiveOptions: [["screen and (max-width: 640px)"]]
  };

  if (state.aggregators == undefined) {
    return { data, settings };
  }

  if (Object.keys(state.aggregators).length === 0) {
    return { data, settings };
  }

  const types = state.aggregators["type"];

  if (types.length === 0) {
    return { data, settings };
  }

  let items = types.slice(0, types.length);
  for (let item of items) {
    data.labels.push(item.value);
    data.series.push(item.total);
  }

  return { data, settings };
};
