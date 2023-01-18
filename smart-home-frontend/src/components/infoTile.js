import styled from "styled-components";
import React from "react";

const Header = styled.h2`
  font-weight: 300;
  font-size: 18px;
  padding: 0px;
`;

const Container = styled.div`
  padding: 13px;
  flex: ${(props) => props.flex ?? 1};
  margin: 10px;
  border-radius: 15px;
  box-shadow: 4px 4px 30px 0px rgba(66, 68, 90, 0.15);
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
`;

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  margin-right: 25px;
  justify-content: flex-end;
`;

const Mediana = styled.p`
  font-size: 20px;
  font-weight: bold;
//   margin-top: 0;
  color: green;
  margin: 0px, 5px, 5px, 5px;
`;


const InfoTile = ({
  title,
  icon,
  extraValue,
  flex,
}) => {
  return (
    <Container flex={flex}>
      <Header>{title}</Header>
      <StyledDiv>
      <Mediana>{extraValue}</Mediana>
      {icon}
      </StyledDiv>
    </Container>
  );
};

export default InfoTile;
