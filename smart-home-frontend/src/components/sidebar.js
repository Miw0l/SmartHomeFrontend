import {NavLink} from "react-router-dom"
import styled from "styled-components";
import { appColors } from "./utils/colors";
import DashboardIcon from '@mui/icons-material/Dashboard';

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

const Sidebar = () => {
    return (
        <Sidebar1 className="Sidebar">
                <Topdiv className="top">
                    <span style={{fontSize: 20, fontWeight: "bold", color: appColors.darkGreen}}>Smart home</span>
                </Topdiv>
                <hr/>
            <NavbarCenter className="center">
                <ul>
                <DashboardIcon/>
                <NavLink className="navbar" style={MyStyleNavLink}>Dashboard</NavLink>
                </ul>
            <NavLink className="navbar" style={MyStyleNavLink}>Wykresy</NavLink>
            <NavLink className="navbar" style={MyStyleNavLink}>Informacje o uzytkowniku</NavLink>
            <NavLink className="navbar" style={MyStyleNavLink}>Wyloguj</NavLink>
            </NavbarCenter>
            <div className="bottom">Wyloguj</div>
        </Sidebar1>
    )
}

export default Sidebar