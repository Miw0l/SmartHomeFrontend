import styled from "styled-components";
import React from "react";
import { Area } from "@ant-design/plots";

const Header = styled.h2`
  font-weight: 400;
  font-size: 22px;
`;

const ImportantText = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 6px;
  position: relative;
`;

const Container = styled.div`
  padding: 16px;
  flex: ${(props) => props.flex ?? 1};
  margin: 16px;
  border-radius: 15px;
  box-shadow: 8px 8px 50px 0px rgba(66, 68, 90, 0.4);
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
`;

const Mediana = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 0;
  color: green;
`;

const ChartTile = ({
  config,
  title,
  description,
  extraValue,
  subtitle,
  flex,
}) => {
  return (
    <Container flex={flex}>
      <Header>{title}</Header>
      <Area {...config} />
      <ImportantText>{subtitle}</ImportantText>
      <Mediana>{extraValue}</Mediana>
    </Container>
  );
};

export default ChartTile;
