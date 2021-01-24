export const getMostCommonSkills = state => {
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

export const getMoreOpenTo = state => {
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

  const opento = state.aggregators["opento"];

  if (opento.length === 0) {
    return { data, settings };
  }

  let items = opento.slice(0, opento.length);
  for (let item of items) {
    data.labels.push(item.value);
    data.series.push(item.total);
  }

  return { data, settings };
};

export const getRemoter = state => {
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

  const remoter = state.aggregators["remoter"];

  if (remoter.length === 0) {
    return { data, settings };
  }

  let items = remoter.slice(0, remoter.length);
  for (let item of items) {
    data.labels.push(item.value);
    data.series.push(item.total);
  }

  return { data, settings };
};

export const getCompensationRange = state => {
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

  const compensationrange = state.aggregators["compensationrange"];

  if (compensationrange.length === 0) {
    return { data, settings };
  }

  let items = compensationrange.slice(0, compensationrange.length);
  for (let item of items) {
    data.labels.push(item.value);
    data.series[0].push(item.total);
  }

  return { data, settings };
};
