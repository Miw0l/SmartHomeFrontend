import {NavLink} from "react-router-dom"
import styled from "styled-components";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import Sidebar from "../sidebar";
import TemperatureIndoorChart from "../temperatureOutdoor"
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    return (
      <Layout style={{height:"100vh"}}>
      <Sider style={{minHeight:"100vh"}} width={250}>
        <Sidebar/>
        </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <div>
            <h2></h2>
            <div>
              <TemperatureIndoorChart style={{top: `-1100px`}}></TemperatureIndoorChart>
            </div>
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    )
}

export default MainLayout