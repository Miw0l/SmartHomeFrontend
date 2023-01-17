import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appColors } from "../components/utils/colors";
import Sidebar from "../components/sidebar";
import { useAuthUser } from "react-auth-kit";
import MainLayout from "../components/layout/mainLayout";
import TemperatureIndoorChart from "../components/temperatureOutdoor";
import { messages } from "../data/messages";
import ChartTile from "../components/chart_tile";
import InfoTile from "../components/infoTile";
import "../styles/dashboard.css";
import { Info } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { TbTemperatureCelsius } from "react-icons/tb";
import { Select } from "antd";
import { options } from "../data/chartsOptions";
import { Line } from "@ant-design/plots";

const Dupa = styled.div`
  display: flex;
`;

const Dupa2 = styled.div`
  display: flex;
  flex: 7;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Row = styled.div`
  display: flex;
`;

const DashboardPage = () => {
  const [temperature, setTemperature] = useState([]);
  const [sensorsList, setSensorsList] = useState([]);
  const [observation, setObservation] = useState([]);
  const auth = useAuthUser();
  const user = auth();
  console.log(user);

  useEffect(() => {
    // handleFetchObservation();
    // handleFetchSensors();
  }, []);

  const handleFetchSensors = async () => {
    const response = await fetch(
      `http://localhost:8080/sensor/getAll/user/` + auth().user
    );
    const data = await response.json();
    setSensorsList([...sensorsList, ...data]);
    console.log(data);
  };

  const handleFetchObservation = async () => {
    const tempOutdoorSensorId = auth().devices[0].sensors[0].id;
    const response = await fetch(
      `http://localhost:8080/observation/get/` + tempOutdoorSensorId
    );
    const data = await response.json();
    observation.push(data);
    setTemperature(observation.at(0));
    setObservation([...observation, ...data]);
    console.log(data);
  };
  console.log(messages);

  const config = {
    legend: {
      title: "dupa",
    },
    slider: {
        start: 0.1,
        end: 0.5,
      },
    title: {
      visible: true,
      text: "dupa",
    },
    tooltip: {
      showTitle: true,
      title: "Wykres temperatury na zewnątrz",
    },
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
    data: messages,
    xField: "creationDt",
    yField: "value",
    xAxis: {
      tickCount: 5,
    },

    width: 10,
    animation: true,
    // slider: {
    //   start: 0.1,
    //   end: 0.9,
    //   trendCfg: {
    //     isArea: true,
    //   },
    // },
  };
  return (
    <MainLayout>
      <div className="Banner">
        <div className="napisBaner">
          <h1 className="Napis">Witaj {user.username}!</h1>
        </div>
        <p>Wybierz jaki wykres ma zostać wyświetlony</p>
        <Select
          showSearch
          style={{
            width: 300,
          }}
          placeholder="Wybierz wykres"
          options={options}
        />
      </div>
      <div>
        <ChartTile
          // title="Wykres temperatury na zewnątrz"
          config={config}
        //   chartType="Area"
        />
        {/* <Line {...config} /> */}
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
