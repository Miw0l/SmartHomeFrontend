import React, { useState, useEffect } from "react";
import { useAuthUser } from "react-auth-kit";
import MainLayout from "../components/layout/mainLayout";
import ChartTile from "../components/chart_tile";
import { Select } from "antd";
import { options } from "../data/chartsOptions";

const DashboardPage = () => {
  const [sensorsList, setSensorsList] = useState([]);
  const [messages, setMesseges] = useState([]);
  const auth = useAuthUser();
  const user = auth();

  useEffect(() => {
    handleFetchSensors();
    handleFetchTemperatureIndoor();
  }, []);

  const onChange = async (value) => {
    const url = "http://localhost:8080/observation/get/" + auth().user + "/" + value;
    console.log(url);
    console.log(`selected ${value}`);
    const response = await fetch(
      url
    );
    const data = await response.json();
    console.log(data);
    setMesseges(data);
  };

  const handleFetchSensors = async () => {
    const response = await fetch(
      `http://localhost:8080/sensor/getAll/user/` + auth().user
    );
    const data = await response.json();
    setSensorsList([...sensorsList, ...data]);
  };

  const handleFetchTemperatureIndoor = async () => {
    const response = await fetch(
      "http://localhost:8080/observation/get/" + auth().user + "/temperatureIndoor"
    );
    const data = await response.json();
    setMesseges(data);
  };

  const config = {
    slider: {
        start: 0,
        end: 1,
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
          onChange={onChange}
          placeholder="Wybierz wykres"
          options={options}
          defaultValue={{
            value: 'temperatureIndoor',
            label: 'Temperatura w środku mieszkania',
          }}
        />
      </div>
      <div>
        <ChartTile
          config={config}
          chartType="Area"
        />
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
