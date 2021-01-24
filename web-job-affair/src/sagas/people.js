import { takeLatest, call, put } from "redux-saga/effects";
import { Request } from "@/services/services";
import { SEARCH_API } from "@/config/constants";

export function* handleGetMetrics() {
  try {
    const res = yield call(Request.post, "people/_search/", {
      baseURL: SEARCH_API,
      params: {
        offset: "0",
        size: "0",
        aggregate: "true"
      }
    });

    var people = res.data;
    if (people.results && people.results.lenght === 0) {
      people = {
        aggregators: {},
        offset: 0,
        results: [],
        size: 0,
        total: 0
      };
    }

    yield put({ type: "people/updateMetrics", payload: people });
  } catch (e) {
    console.log("get people error: ", e.toString(), e.stack);
    yield put({ type: "people/error", payload: e });
  }
}

export default function* people() {
  yield takeLatest("people/getMetrics", handleGetMetrics);
}
