import { types as ActionTypes } from "./actions";

const initialValue = { 
  isRequestingEvents : false,
  events: null,
  error: null
}

const reducer = (state =  initialValue, action) => {
  const payload = action.payload;
  switch (action.type) {
    case ActionTypes.GET_EVENTS:
      return {
        ...state,
        isRequestingEvents: true,
        events: null,
        error: null
      };
    case ActionTypes.GET_EVENTS_SUCESS:
      return {
        ...state,
        isRequestingEvents: false,
        events: payload && payload.events
      };
      case ActionTypes.GET_EVENTS_FAILED:
        return {
          ...state,
          isRequestingEvents: false,
          error: payload && payload.events
        };
    default:
      return state;
  }
};

export const selector = ( state  ) =>  state.EpgEvents;

export default reducer;
