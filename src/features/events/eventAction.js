import {
  asyncActionerror,
  asyncActionFinish,
  asyncActionStart,
} from "../../app/api/async/asyncReducer";
import { fetchSampleData } from "../../app/api/mockApi";
import {
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT,
  UPDATE_EVENT,
} from "./eventConstans";

export function loadEvents() {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENT, payload: events });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionerror(error));
    }
  };
}
export function createEvent(event) {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
}

export function updateEvent(event) {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
}

export function deleteEvent(eventId) {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
}
