import styled from "styled-components";
import React from "react";
import { Area, Line } from "@ant-design/plots";

const Header = styled.h2`
  font-weight: 400;
  font-size: 22px;
`;

const ImportantText = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  position: relative;
`;

const Container = styled.div`
  padding: 16px;
  flex: ${(props) => props.flex ?? 1};
  margin: 10px;
  border-radius: 15px;
  box-shadow: 4px 4px 30px 0px rgba(66, 68, 90, 0.15);
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
`;

const Mediana = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 10px;
  color: green;
`;

const Icon = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 7px;
  margin-left: 5px;
  color: black;
`;


const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  margin-right: 30px;
  justify-content: flex-start;
  margin-bottom: 0px;
`;


const getChart = (chartType, config) => {
  switch (chartType) {
    case "Area":
      return <Area {...config} />;
    case "Line":
      return <Line {...config} />;
  }
};

const ChartTile = ({
  config,
  title,
  description,
  chartType,
  extraValue,
  subtitle,
  flex,
  icon
}) => {
  console.log(chartType);
  const Chart = getChart(chartType, config);
  // console.log(Chart);
  return (
    <Container flex={flex}>
      <Header>{title}</Header>
      {Chart}
      <StyledDiv>
      <ImportantText>{subtitle}</ImportantText>
      <Mediana>{extraValue}</Mediana>
      <Icon>{icon}</Icon>
      </StyledDiv>
    </Container>
  );
};

export default ChartTile;
