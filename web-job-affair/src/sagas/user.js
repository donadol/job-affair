import { takeLatest, call, put } from "redux-saga/effects";
import { Request } from "@/services/services";
import { TORRE_USER_API } from "@/config/constants";

export function* handleGetUser({ payload }) {
  try {
    const res = yield call(Request.get, `bios/${payload}`, {
      baseURL: TORRE_USER_API,
      params: {}
    });

    var user = res.data;

    if (user.message && user.message === "Person not found!") {
      user = {
        person: {}
      };
    }

    yield put({ type: "user/update", payload: user });
  } catch (e) {
    console.log("get user error: ", e.toString(), e.stack);
    yield put({ type: "user/error", payload: e });
  }
}

export default function* user() {
  yield takeLatest("user/getUser", handleGetUser);
}
