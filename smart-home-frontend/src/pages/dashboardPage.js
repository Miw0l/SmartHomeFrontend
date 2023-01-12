// import { useRouter } from "next/router";
// import BasicLayout  from "../components/molecules/basic_layout"
// import { useForm } from 'react-hook-form';
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appColors } from "../components/utils/colors";
import Sidebar from "../components/sidebar";
import { useAuthUser } from "react-auth-kit";

const Dupa = styled.div`
  display: flex;
`;

const Dupa2 = styled.div`
  display: flex;
  flex: 7;
`;

const DashboardPage = () => {
  const auth = useAuthUser();
  console.log(auth());
  return (
    <Dupa className="Dashboard">
      <Sidebar />
      <Dupa2>Siema {auth().email} </Dupa2>
    </Dupa>
  );
};

export default DashboardPage;
