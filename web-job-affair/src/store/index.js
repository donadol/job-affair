import Vue from "vue";
import Vuex from "vuex";
import { runSaga, stdChannel } from "redux-saga";
import sagas from "@/sagas";

import jobs from "@/store/modules/jobs";
import people from "@/store/modules/people";
import job from "@/store/modules/job";
import user from "@/store/modules/user";
import compatibility from "@/store/modules/compatibility";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    jobs,
    people,
    job,
    user,
    compatibility
  }
});

export const dispatch = output => store.commit(output.type, output.payload);
export const getState = () => store.state;

sagas.forEach(saga => {
  const channel = stdChannel();
  store.subscribeAction(channel.put);

  runSaga(
    {
      channel,
      dispatch,
      getState
    },
    saga
  );
});

export default store;
