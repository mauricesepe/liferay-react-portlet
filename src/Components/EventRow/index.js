import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import styled from "styled-components";

const EventRowContainer = styled.div`
  text-align: start;
  margin-bottom: 2px;
`;

const EventRowEvent = styled.div`
  background-color: #f5f5f5;
  font-size: 16px;
  padding: 15px;
  color: #111;
  font-weight: bold;
  cursor: pointer;
`;

const Description = styled.div`
  padding: 30px;
  font-family: MuseoSans100, Arial, sans-serif;
  font-weight: 200;
  background-color: #f9f9f9;
  color: #A2A2A2;
`;

const Time = styled.span`
  color: #F8961D;
  font-weight: bold;
  margin: 0 10px 0 0 
`;



const EventRow = props => {
  const [isShowingDescription, setShowingDescription] = useState(false);
  return (
    <EventRowContainer>
      <EventRowEvent onClick={() => setShowingDescription(!isShowingDescription)}>
        <Time>{props.time}</Time> {props.title}
      </EventRowEvent>
      <AnimateHeight duration={500} height={isShowingDescription ? "auto" : 0}>
        <Description>{props.description || props.title}</Description>
      </AnimateHeight>
    </EventRowContainer>
  );
};

export default EventRow;
