import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import EventsActions from "../../Store/EpgEvents/actions";

const HeaderDay = styled.span`
  color: ${props => (props.selected ? "#111" : "#bcbcbc")};
  margin: 0 10px;
  cursor: pointer;
`;
const getDayInFutureFromTodayMillis = daysInFuture => {
  var myDate = new Date();
  myDate.setDate(myDate.getDate() + daysInFuture);
  return myDate;
};

const getDayInFutureFromTodayShort = daysInFuture => {
  var myDate = getDayInFutureFromTodayMillis(daysInFuture);
  return myDate.toLocaleString("en-us", { weekday: "short" });
};

const DaySelector = props => {
  const [daySelected, setSelected] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // first day loading
    requestDayEvents(daySelected);
  });

  const requestDayEvents = dayNumber => {
    var targetDate = getDayInFutureFromTodayMillis(dayNumber);
    const startDate = dayNumber === 0 ? (new Date()).setSeconds(0,0) : targetDate.setHours(0, 0, 0, 0);
    const endDate = targetDate.setHours(23, 59, 59, 999);

    dispatch(EventsActions.getEvents(startDate, endDate));
    preloadNextDay(dayNumber + 1);
  };

  const preloadNextDay = dayNumberToRequest => {
    var targetDate = getDayInFutureFromTodayMillis(dayNumberToRequest);
    const startDate = dayNumberToRequest === 0 ? Date.now() : targetDate.setHours(0, 0, 0, 0);
    const endDate = targetDate.setHours(23, 59, 59, 999);
    dispatch(EventsActions.preloadNextDayEvents(startDate, endDate));
  };

  const handleDaySelect = dayNumber => {
    setSelected(dayNumber);
    requestDayEvents(dayNumber);
  };

  return (
    <div>
      {[...Array(7)].map((e, i) => (
        <HeaderDay key={i} onClick={() => handleDaySelect(i)} selected={daySelected === i}>
          {getDayInFutureFromTodayShort(i)}
        </HeaderDay>
      ))}
    </div>
  );
};

export default DaySelector;
