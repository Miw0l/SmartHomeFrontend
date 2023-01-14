import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appColors } from "../components/utils/colors";
import Sidebar from "../components/sidebar";
import { useAuthUser } from "react-auth-kit";
import MainLayout from "../components/layout/mainLayout";
import TemperatureIndoorChart from "../components/temperatureOutdoor";
import { messages } from "../data/messages";
import ChartTile from "../components/chart_tile";
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
  const auth = useAuthUser();
  console.log(auth());

  const config2 = {
    data: messages,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
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
    data: messages,
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
    <MainLayout>
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
    </MainLayout>
  );
};

export default DashboardPage;
