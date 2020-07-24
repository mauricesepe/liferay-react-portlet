import React from "react";
import styled from "styled-components";
import EpgDayEvents from "../../Components/EpgDayEvents/index";
import DaySelector from "../../Components/DaySelector/index";


const EpgContainer = styled.div`
  max-width: 800px;
  margin: 5px auto;
`;

const Header = styled.div`
  background-color: #eee;
  border-top: 0px solid #111;
  border-bottom: 0px solid #111;
  color: #fff;
  font-family: MuseoSans900, Arial, sans-serif;
  font-size: 24px;
  line-height: 1.1;
  margin: 0 0 2px 0;
  padding: 15px 0 15px 15px;
  text-align: left;
  text-transform: none;
`;


export default () => {
  return (
    <EpgContainer>
      <Header>
        <DaySelector></DaySelector>
      </Header>
      <EpgDayEvents/>
    </EpgContainer>
  );
};
