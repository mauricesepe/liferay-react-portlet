import { put, takeLatest } from "redux-saga/effects";
import PrimeEpgClient from "../../Clients/EpgClient";
import Actions from "./actions";

function* getEvents(action) {
  const { payload } = action;
  try {
    const events = yield PrimeEpgClient.getPrimeEvents(payload.startDate, payload.endDate);
    yield put(Actions.getEventsSuccess(events));
  } catch (error) {
    yield put(Actions.getEventsFailed(error));
  }
}

function* preloadNextDayEvents(action) {
  const { payload } = action;
  try {
    // we just want to have the response cache for the getEvents call.
    yield PrimeEpgClient.getPrimeEvents(payload.startDate, payload.endDate);
  } catch (error) {}
}

export function* mainSaga() {
  yield takeLatest(Actions.types.GET_EVENTS, getEvents);
  yield takeLatest(Actions.types.PRELOAD_NEXT_DAY, preloadNextDayEvents);
}

// All sagas to be loaded
export default [mainSaga];
