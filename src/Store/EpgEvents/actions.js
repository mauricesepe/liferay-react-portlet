export const types = {
  GET_EVENTS: "app/PRIME-EPG/GET_EVENTS",
  GET_EVENTS_SUCESS: "app/PRIME-EPG/GET_EVENTS_SUCESSFUL",
  GET_EVENTS_FAILED: "app/PRIME-EPG/GET_EVENTS_FAILED",
  PRELOAD_NEXT_DAY: "app/PRIME-EPG/PRELOAD_NEXT_DAY"
};

export const getEvents = (startDate, endDate) => {
  return { 
    type: types.GET_EVENTS,
    payload: {
      startDate,
      endDate
    }
  }
}

export const getEventsSuccess = (events) => {
  return {
    type: types.GET_EVENTS_SUCESS,
    payload: {
      events,
    }
  }
}

export const getEventsFailed = (error) => {
  return {
    type: types.GET_EVENTS_SUCESS,
    payload: {
      error,
    }
  }
}

export const preloadNextDayEvents = (startDate, endDate) => {
  return { 
    type: types.PRELOAD_NEXT_DAY,
    payload: {
      startDate,
      endDate
    }
  }
}

export default {
    types,
    getEvents,
    getEventsSuccess,
    getEventsFailed,
    preloadNextDayEvents
}