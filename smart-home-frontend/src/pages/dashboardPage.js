import React, { useState, useEffect } from "react";
import { useAuthUser } from "react-auth-kit";
import MainLayout from "../components/layout/mainLayout";
import ChartTile from "../components/chart_tile";
import InfoTile from "../components/infoTile";
import { Box } from "@mui/material";
import "../styles/dashboard.css";
import {TbTemperatureCelsius} from "react-icons/tb"
import {WiHumidity} from "react-icons/wi"


const DashboardPage = () => {
  const [temperatureOutdoor, setTemperatureOutdoor] = useState([]);
  const [temperatureIndoor, setTemperatureIndoor] = useState([]);
  const [humidityOutdoor, setHumidityOutdoor] = useState([]);
  const [humidityIndoor, setHumidityIndoor] = useState([]);
  const [averageTemperatureOutdoor, setAverageTemperatureOutdoor] = useState([]);
  const [averageTemperatureIndoor, setAverageTemperatureIndoor] = useState([]);
  const [averageHumidityOutdoor, setAverageHumidityOutdoor] = useState([]);
  const [averageHumidityIndoor, setAverageHumidityIndoor] = useState([]);
  const [actualTemperatureIndoor, setActualTemperatureIndoor] = useState([]);
  const [actualTemperatureOutdoor, setActualTemperatureOutdoor] = useState([]);
  const [actualHummidityIndoor, setActualHumidityIndoor] = useState([]);
  const [actualHummidityOutdoor, setActualHumidityOutdoor] = useState([]);
  const auth = useAuthUser();
  const user = auth();
  console.log(user);
  
  useEffect(() => {
    handleFetchSensors();
    handleFetchTemperatureOutdoor();
    handleFetchTemperatureIndoor();
    handleFetchActualTemperatureOutdoor();
    handleFetchActualTemperatureIndoor();
    handleFetchHumidityOutdoor();
    handleFetchHumidityIndoor();
    handleFetchActualHumidityOutdoor();
    handleFetchActualHumidityIndoor();
    handleFetchAverageTemperatureOutdoor();
    handleFetchAverageTemperatureIndoor();
    handleFetchAverageHumidityOutdoor();
    handleFetchAverageHumidityIndoor();
  }, []);

  const handleFetchSensors = async () => {
    const response = await fetch(
      `http://localhost:8080/sensor/getAll/user/` + auth().user
    );
    const data = await response.json();
    console.log(data);
    //sensors = data;
  };

  const handleFetchTemperatureOutdoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/get/" + auth().user + "/temperatureOutdoor"
    );
    const data = await response.json();
    setTemperatureOutdoor(data);
  };

  const handleFetchActualTemperatureOutdoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/getLastObservation/" + auth().user + "/temperatureOutdoor"
    );
    const data = await response.json();
    setActualTemperatureOutdoor(data.value);
  };

  const handleFetchAverageTemperatureOutdoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/getAverage/" + auth().user + "/temperatureOutdoor"
    );
    const data = await response.json();
    setAverageTemperatureOutdoor(data);
  };

  const handleFetchTemperatureIndoor = async () => {
    //const tempOutdoorSensorId = auth().devices[0].sensors[0].id;
    const response = await fetch(
      "http://localhost:8080/observation/get/" + auth().user + "/temperatureIndoor"
    );
    const data = await response.json();
    setTemperatureIndoor(data);
  };

  const handleFetchActualTemperatureIndoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/getLastObservation/" + auth().user + "/temperatureIndoor"
    );
    const data = await response.json();
    setActualTemperatureIndoor(data.value);
  };

  const handleFetchAverageTemperatureIndoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/getAverage/" + auth().user + "/temperatureIndoor"
    );
    const data = await response.json();
    setAverageTemperatureIndoor(data);
  };

  const handleFetchHumidityOutdoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/get/" + auth().user + "/humidityOutdoor"
    );
    const data = await response.json();
    setHumidityOutdoor(data);
  };
  
  const handleFetchActualHumidityOutdoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/getLastObservation/" + auth().user + "/humidityOutdoor"
    );
    const data = await response.json();
    setActualHumidityOutdoor(data.value);
  };

  const handleFetchAverageHumidityOutdoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/getAverage/" + auth().user + "/humidityOutdoor"
    );
    const data = await response.json();
    setAverageHumidityOutdoor(data);
  };

  const handleFetchHumidityIndoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/get/" + auth().user + "/humidityIndoor"
    );
    const data = await response.json();
    setHumidityIndoor(data);
  };

  const handleFetchActualHumidityIndoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/getLastObservation/" + auth().user + "/humidityIndoor"
    );
    const data = await response.json();
    setActualHumidityIndoor(data.value);
  };

  const handleFetchAverageHumidityIndoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/getAverage/" + auth().user + "/humidityIndoor"
    );
    const data = await response.json();
    setAverageHumidityIndoor(data);
  };

  const configTemperatureOutdoor = {
    tooltip: {
      showTitle: true,
      title: "Temperatura na zewnątrz",
    },
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
    data: temperatureOutdoor,
    xField: "creationDt",
    yField: "value",
    xAxis: {
      tickCount: 6,
    },
    width: 10,
    animation: true,
  };

  const configTemperatureIndoor = {
    tooltip: {
      showTitle: true,
      title: "Temperatura w pomieszczeniu",
    },
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
    data: temperatureIndoor,
    xField: "creationDt",
    yField: "value",
    xAxis: {
      tickCount: 6,
    },
    width: 10,
    animation: true,
  };

  const configHumidityOutdoor = {
    tooltip: {
      showTitle: true,
      title: "Wilgotność powietrza na zewnątrz",
    },
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
    data: humidityOutdoor,
    xField: "creationDt",
    yField: "value",
    xAxis: {
      tickCount: 6,
    },
    width: 10,
    animation: true,
  };

  const configHumidityIndoor = {
    tooltip: {
      showTitle: true,
      title: "Wilgotność powietrza w pomieszczeniu",
    },
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
    data: humidityIndoor,
    xField: "creationDt",
    yField: "value",
    xAxis: {
      tickCount: 6,
    },
    width: 10,
    animation: true,
  };

  return (
    <MainLayout>
      <div className="Banner">
        <div className="napisBaner">
          <h1 className="Napis">Witaj {user.username}!</h1>
        </div>
      </div>
      <div>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 3">
          <InfoTile
              title="Aktualna temperatura na zewnątrz:"
              config={"config"}
              icon={
                <TbTemperatureCelsius
                  size={30}
                />}
              extraValue={actualTemperatureOutdoor}
            />
          </Box>
          <Box gridColumn="span 3" >
          <InfoTile
              title="Aktualna temperatura w pomieszczeniu:"
              config={"config"}
              icon={
                <TbTemperatureCelsius
                  size={30}
                />}
              extraValue={actualTemperatureIndoor}
            />
          </Box>
          <Box gridColumn="span 3">
          <InfoTile
              title="Aktualna wilgotność powietrza na zewnątrz:"
              config={"config"}
              icon={
                <TbTemperatureCelsius
                  size={30}
                />}
              extraValue={actualHummidityOutdoor}
            />
          </Box>
          <Box gridColumn="span 3">
          <InfoTile
              title="Aktualna wilgotność powietrza w pomieszczeniu"
              config={"config"}
              icon={
                <TbTemperatureCelsius
                  size={30}
                />}
              extraValue={actualHummidityIndoor}
            />
          </Box>
          <Box gridColumn="span 6" gridRow="span 2">
          <ChartTile
              title="Wykres temperatury na zewnątrz"
              config={configTemperatureOutdoor}
              subtitle="Średnia temperatura:"
              icon={
                <TbTemperatureCelsius
                  size={25}
                />}
              extraValue={parseFloat(averageTemperatureOutdoor).toFixed(2)}
            />
          </Box>
          <Box gridColumn="span 6" gridRow="span 2">
          <ChartTile
              title="Wykres temperatury w pomieszczeniu"
              config={configTemperatureIndoor}
              subtitle="Średnia temperatura:"
              icon={
                <TbTemperatureCelsius
                  size={25}
                />}
              extraValue={parseFloat(averageTemperatureIndoor).toFixed(2)}
            />
          </Box>
          <Box gridColumn="span 6" gridRow="span 2">
          <ChartTile
              title="Wykres wilgotności powietrza na zewnątrz"
              config={configHumidityOutdoor}
              subtitle="Średnia wilgotność:"
              icon={
                <WiHumidity
                  size={25}
                />}
              extraValue={parseFloat(averageHumidityOutdoor).toFixed(2)}
            />
          </Box>
          <Box gridColumn="span 6" gridRow="span 2">
          <ChartTile
              title="Wykres wilgotności powietrza w pomieszczeniu"
              config={configHumidityIndoor}
              subtitle="Średnia wilgotność:"
              icon={
                <WiHumidity
                  size={25}
                />}
              extraValue={parseFloat(averageHumidityIndoor).toFixed(2)}
            />
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
