import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuthUser } from "react-auth-kit";
import MainLayout from "../components/layout/mainLayout";
import { messages } from "../data/messages";
import { Box, Grid } from "@mui/material";
import { Select } from "antd";
import { options } from "../data/chartsOptions";
import InfoTile from "../components/infoTile";
import {TbTemperatureCelsius} from "react-icons/tb"
import {WiHumidity} from "react-icons/wi"
import DeviceTable from "../components/table"

const DashboardPage = () => {
  const auth = useAuthUser();
  const user = auth();
  const [sensorsList, setSensorsList] = useState([]);
  console.log(user);

  useEffect(() => {
    handleFetchSensors();
  }, []);

  const handleFetchSensors = async () => {
    const response = await fetch(
      `http://localhost:8080/sensor/getAll/user/` + auth().user
    );
    const data = await response.json();
    setSensorsList(data);
    console.log(data);
    //sensors = data;
  };

  return (
    <MainLayout>
      <div>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 6">
        <InfoTile
            title="Adres MAC mikrokontrolera NodeMCU: "
            config={"config"}
            extraValue={auth().mac}
          />
        </Box>
        <Box gridColumn="span 6" >
        <InfoTile
            title="Ilość czujników podłączonych do Arduino Mega 2560: "
            config={"config"}
            extraValue={sensorsList.length}
          />
        </Box>
        <Box gridColumn="span 1" className="Table"/>
        <Box gridColumn="span 10" className="Table">
            <DeviceTable></DeviceTable>
        </Box>

        {/* ROW 2 */}


      </Box>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
