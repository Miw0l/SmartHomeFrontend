import {NavLink} from "react-router-dom"
import styled from "styled-components";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import Sidebar from "../sidebar";
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    return (
      <Layout>
      <Sider style={{minHeight:"100vh"}}>
        <Sidebar/>
        </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    )
}

export default MainLayout