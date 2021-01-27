import { takeLatest, call, put } from "redux-saga/effects";
import { Request } from "@/services/services";
import { COMPATIBILITY_API } from "@/config/constants";

export function* handleGetCompatibility({ payload }) {
  try {
    const res = yield call(Request.get, `compatibility`, {
      baseURL: COMPATIBILITY_API,
      params: {
        jobid: payload.jobid,
        username: payload.username
      }
    });

    var compatibility = res.data;

    if (
      compatibility.message &&
      (compatibility.message === "not found" ||
        compatibility.message === "API not working.")
    ) {
      compatibility = {
        match: 0,
        skills: []
      };
    }

    yield put({ type: "compatibility/update", payload: compatibility });
  } catch (e) {
    console.log("get compatibility error: ", e.toString(), e.stack);
    yield put({ type: "compatibility/error", payload: e });
  }
}

export default function* compatibility() {
  yield takeLatest("compatibility/getCompatibility", handleGetCompatibility);
}
