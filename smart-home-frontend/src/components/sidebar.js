import { useSignOut } from "react-auth-kit";
import { Menu } from 'antd';
import { AiOutlineHome } from "react-icons/ai";
import { NavLink, useLocation, Link } from "react-router-dom";
import "../styles/components/sidebarItem.css";

import {
  AiOutlineDashboard,
  AiOutlineLineChart,
  AiOutlineUser,
  AiOutlineLogout
} from "react-icons/ai";
// import { Link } from "@mui/material";


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
  const signOut = useSignOut();
  const handleLogOut = () => {
    signOut();
  };

  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div className='Sidebar'>
      <div className='NazwaProjektu' style={divStyle}>
        <AiOutlineHome size={30} style={{color: "white", margin: 5}}/>
        <h2 style={{color: "white", margin: "0", padding: "5px"}}>Smart home</h2>
      </div>
      <hr/>
        <Menu theme={"dark"} mode={"vertical"} style={menuStyle}>
        <Link to={"/Dashboard"} style={{}}>
          <Menu.Item style={liStyle}>
            <AiOutlineDashboard size={20} className="icon"/>
          <span>Dashboard</span>
          </Menu.Item>
          </Link>
          <Link to={"/Wykresy"} style={{}}>
          <Menu.Item style={liStyle} key={"/Wykresy"}>
            <AiOutlineLineChart size={20} className="icon"/>
          <span>Wykresy</span>
          </Menu.Item>
          </Link>
          <Link to={"/Informacje"} style={{}}>
          <Menu.Item style={liStyle} key={"/Informacje"}>
            <AiOutlineUser size={20} className="icon"/>
          <span>Informacje o uzytkowniku</span>
          </Menu.Item>
          </Link>
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