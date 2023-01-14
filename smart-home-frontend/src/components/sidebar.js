import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { AiOutlineHome } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/components/sidebarItem.css";
import { useSignOut } from "react-auth-kit";

import {
  HomeOutlined,
  AiOutlineDashboard,
  AiOutlineLineChart,
  AiOutlineUser,
  AiOutlineLogout
} from "react-icons/ai";
import { MenuItem } from '@mui/material';
import { flexbox } from '@mui/system';
import { MenuUnstyled } from '@mui/base';

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 10
};

const menuStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
};

const liStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const Sidebar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  const signOut = useSignOut();
  const handleLogOut = () => {
    signOut();
  };

  return (
    <div className='Sidebar'>
      <div className='NazwaProjektu' style={divStyle}>
        <AiOutlineHome size={30} style={{color: "white", margin: 5}}/>
        <h2 style={{color: "white"}}>Smart home</h2>
      </div>
      <hr/>
    {/* <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        /> */}
        <Menu theme={"dark"} mode={"vertical"} style={menuStyle}>
          <Menu.Item style={liStyle}>
            <AiOutlineDashboard size={20} className="icon"/>
          <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item style={liStyle}>
            <AiOutlineLineChart size={20} className="icon"/>
          <span>Wykresy</span>
          </Menu.Item>
          <Menu.Item style={liStyle}>
            <AiOutlineUser size={20} className="icon"/>
          <span onClick={console.log("test")}>Informacje o uzytkowniku</span>
          </Menu.Item>
        </Menu>
        <div className='logout'>
          <AiOutlineLogout className="icon" size={20}/>
          <NavLink className='logoutBtn' to={"/login"}>
            <span onClick={handleLogOut}>Wyloguj</span>
            </NavLink>
        </div>
    </div>
  );
};
export default Sidebar;