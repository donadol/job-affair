export const urlParamsFromObject = function(obj) {
  const params = new URLSearchParams();
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];

    params.append(key, value);
  }

  return params;
};
