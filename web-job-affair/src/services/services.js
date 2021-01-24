import axios from "axios";
import { SEARCH_API } from "@/config/constants";
import { urlParamsFromObject } from "@/helpers/utils";

export const makeTruoraAPIFullURL = (baseURL, path) => `${baseURL}${path}`;

const request = config => {
  config.baseURL = config.baseURL || SEARCH_API;

  return axios({
    ...config,
    url: config.url || makeTruoraAPIFullURL(config.baseURL, config.path)
  });
};

export const Request = {
  get: (path, config = {}) => {
    const params = urlParamsFromObject(config.params).toString();
    config.method = "get";
    config.path = [path, params].filter(Boolean).join("?");
    config.params = {};
    return request(config);
  },
  post: (path, config = {}) => {
    config.method = "post";
    config.path = path;
    return request(config);
  },
  postForm: (path, config) => {
    Object.keys(config.data).forEach(key => {
      if (config.data[key] === undefined || config.data[key] === null) {
        delete config.data[key];
      }
    });

    config.method = "post";
    config.path = path;
    config.data = urlParamsFromObject(config.data).toString();
    config.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    return request(config);
  },
  putForm: (path, config) => {
    Object.keys(config.data).forEach(key => {
      if (config.data[key] === undefined || config.data[key] === null) {
        delete config.data[key];
      }
    });

    config.method = "put";
    config.path = path;
    config.data = urlParamsFromObject(config.data).toString();
    config.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    return request(config);
  },
  deleteForm: (path, config) => {
    Object.keys(config.data).forEach(key => {
      if (config.data[key] === undefined || config.data[key] === null) {
        delete config.data[key];
      }
    });

    config.method = "delete";
    config.path = path;
    config.data = urlParamsFromObject(config.data).toString();
    config.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    return request(config);
  },
  postJson: (path, config) => {
    config.method = "post";
    config.path = path;
    config.data = JSON.stringify(config.data);
    config.headers = { "Content-Type": "application/json" };
    return request(config);
  },
  postFile: (path, config) => {
    config.method = "post";
    config.path = path;
    config.headers = { "Content-Type": "multipart/form-data" };

    var formData = new FormData();
    formData.append("file", config.file);

    config.data = formData;

    return request(config);
  },
  request: config => request(config)
};
