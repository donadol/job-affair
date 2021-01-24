import { takeLatest, call, put } from "redux-saga/effects";
import { Request } from "@/services/services";
import { SEARCH_API } from "@/config/constants";

export function* handleGetJobs({ payload }) {
  try {
    const size = payload.size;
    const offset = payload.offset;

    const res = yield call(Request.post, "opportunities/_search/", {
      baseURL: SEARCH_API,
      params: {
        offset: offset,
        size: size,
        aggregate: "false"
      }
    });

    var jobs = res.data;
    if (jobs.results && jobs.results.lenght === 0) {
      jobs = {
        aggregators: {},
        offset: 0,
        results: [],
        size: 0,
        total: 0
      };
    }

    yield put({ type: "jobs/update", payload: jobs });
  } catch (e) {
    console.log("get jobs error: ", e.toString(), e.stack);
    yield put({ type: "jobs/error", payload: e });
  }
}

export function* handleGetMetrics() {
  try {
    const res = yield call(Request.post, "opportunities/_search/", {
      baseURL: SEARCH_API,
      params: {
        offset: "0",
        size: "0",
        aggregate: "true"
      }
    });

    var jobs = res.data;
    if (jobs.results && jobs.results.lenght === 0) {
      jobs = {
        aggregators: {},
        offset: 0,
        results: [],
        size: 0,
        total: 0
      };
    }

    yield put({ type: "jobs/updateMetrics", payload: jobs });
  } catch (e) {
    console.log("get jobs error: ", e.toString(), e.stack);
    yield put({ type: "jobs/error", payload: e });
  }
}

export default function* jobs() {
  yield takeLatest("jobs/getJobs", handleGetJobs);
  yield takeLatest("jobs/getMetrics", handleGetMetrics);
}
