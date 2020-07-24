import React from "react";
import styled from "styled-components";
import EventRow from "../../Components/EventRow/index";
import { useSelector } from "react-redux";
import { selector as EventSelector } from "../../Store/EpgEvents/reducer";
import ContentPlaceholder from "../ContentPlaceholder/index"

const ContentContainer = styled.div`
  margin: 0;
  list-style-type: none;
  padding: 0;
`;

const Eventlaceholder = styled(ContentPlaceholder)`
  background-color: #f5f5f5;
  width: 100%;
  height: 48px;
  margin-bottom: 1rem;
`;

const EpgDayEvents = () => {
  const eventsState = useSelector(EventSelector);
  return (
    <ContentContainer>
      {!!eventsState && !!eventsState.events ? eventsState.events.sort( (event1, event2) => event1.start < event2.start).map(event => {
        const startHour = String(new Date(parseInt(event.start)).getHours()).padStart(2, "0");
        const startMinutes = String(new Date(parseInt(event.start)).getMinutes()).padStart(2, "0");
        return (
        <EventRow
          time={`${startHour}:${startMinutes}`}
          title={event.title}
          description={event.synopsis}
          key={event.id}
          ></EventRow>
        );
      }) : 
      [...Array(20)].map((e, i) => <Eventlaceholder key={i}></Eventlaceholder>)
      }
    </ContentContainer>
  );
};

export default EpgDayEvents;
