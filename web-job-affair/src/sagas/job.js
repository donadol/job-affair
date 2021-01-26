import { takeLatest, call, put } from "redux-saga/effects";
import { Request } from "@/services/services";
import { TORRE_JOBS_API } from "@/config/constants";

export function* handleGetJob({ payload }) {
  try {
    const res = yield call(Request.get, `opportunities/${payload}`, {
      baseURL: TORRE_JOBS_API,
      params: {}
    });

    var job = res.data;

    if (job === "Opportunity not found") {
      job = {
        objective: "",
        details: [],
        commitment: {}
      };
    }

    yield put({ type: "job/update", payload: job });
  } catch (e) {
    console.log("get job error: ", e.toString(), e.stack);
    yield put({ type: "job/error", payload: e });
  }
}

export default function* job() {
  yield takeLatest("job/getJob", handleGetJob);
}
