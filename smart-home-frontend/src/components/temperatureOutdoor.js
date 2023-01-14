import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Area } from "@ant-design/plots";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";
import { messages } from "../data/messages";
import styled from "styled-components";
import ChartTile from "./chart_tile";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Row = styled.div`
  display: flex;
`;

const TemperatureIndoorChart = () => {
  const [temperature, setTemperature] = useState([]);
  const [sensorsList, setSensorsList] = useState([]);
  const [observation, setObservation] = useState([]);
  const auth = useAuthUser();
  const user = auth();

  useEffect(() => {
    handleFetchObservation();
    handleFetchSensors();
  }, []);

  const handleFetchSensors = async () => {
    const response = await fetch(
      `http://localhost:8080/sensor/getAll/user/` + auth().user
    );
    const data = await response.json();
    //sensorsList.push(data);
    //console.log(sensorsList);
    setSensorsList([...sensorsList, ...data]);
    console.log(sensorsList);
  };

  const handleFetchObservation = async () => {
    const tempOutdoorSensorId = auth().devices[0].sensors[0].id;
    const response = await fetch(
      `http://localhost:8080/observation/get/` + tempOutdoorSensorId
    );
    const data = await response.json();
    console.log(data);
    //observation.push(data);
    //setTemperature(observation.at(0));
    setObservation([...observation, ...data]);
    //console.log(data);
  };

  const config = {
    legend: {
      title: "dupa",
    },
    title: {
      visible: true,
      text: "dupa",
    },
    tooltip: {
      showTitle: true,
      title: "Wykres tempertarasdy w pomieszczeniu",
    },
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
    data: observation,
    xField: "creationDt",
    yField: "value",
    xAxis: {
      tickCount: 5,
    },
    width: 10,
    animation: true,
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: {
        isArea: true,
      },
    },
  };

  return (
    <Column>
      <Row>
        <ChartTile
          title="Wykres temperatury na zewnątrz"
          config={config}
          subtitle="Średnia temperatura:"
          mediana={21.7}
        />
        <ChartTile
          title="Wykres temperatury na zewnątrz"
          config={config}
          subtitle="Średnia temperatura:"
          extraValue={21.7}
        />
        <ChartTile
          title="Wykres temperatury na zewnątrz"
          config={config}
          subtitle="Średnia temperatura:"
          extraValue={21.7}
        />
      </Row>
      <Row>
        <ChartTile
          title="Wykres temperatury na zewnątrz"
          config={config}
          subtitle="Średnia temperatura:"
          mediana={21.7}
        />
      </Row>
    </Column>
  );
};

export default TemperatureIndoorChart;
