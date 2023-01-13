import {NavLink} from "react-router-dom"
import styled from "styled-components";
import { appColors } from "./utils/colors";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';

const styledNavLink = styled(NavLink)`
display: flex;
`;

const NavbarCenter = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px;
`;

const NavbarBottom = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px;
`;

const MyStyleNavLink = {
    padding: 10,
    textDecoration: "none",
    color: "black",
  };

const Sidebar1 = styled.div`
flex: 1;
align-items: center;
border-right: 0.5px solid;
min-height: 100vh;
`;

const Topdiv = styled.div`
height: 50px;
display: flex;
align-items: center;
justify-content: center;
`;

const MyStyleUl = {
    listStyle: "none",
    color: "black",
    padding: 5
  };

  const MyStyleLi = {
    padding: 20,
    listStyle: "none",
    color: "black",
    display: "flex",
    alignItems: "center"
  };

const Sidebar2 = () => {
    return (
        <Sidebar1 className="Sidebar">
                <Topdiv className="top">
                    <span style={{fontSize: 20, fontWeight: "bold", color: appColors.darkGreen}}>Smart home</span>
                </Topdiv>
                <hr/>
            <NavbarCenter className="center">
                <ul style={MyStyleUl}>
                <li style={MyStyleLi}>
                <DashboardIcon/>
                <NavLink className="navbar" style={MyStyleNavLink}>Dashboard</NavLink>
                </li>
                <li style={MyStyleLi}>
                <BarChartIcon/>
                <NavLink className="navbar" style={MyStyleNavLink}>Wykresy</NavLink>
                </li>
                <li style={MyStyleLi}>
                <PersonIcon/>
                <NavLink className="navbar" style={MyStyleNavLink}>Informacje o uzytkowniku</NavLink>
                </li>
                </ul>
            </NavbarCenter>
            <NavbarBottom>
            <div className="bottom">Wyloguj</div>
            </NavbarBottom>
        </Sidebar1>
    )
}

export default Sidebar2