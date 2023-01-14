import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appColors } from "../components/utils/colors";
import Sidebar from "../components/sidebar";
import { useAuthUser } from "react-auth-kit";
import MainLayout from "../components/layout/mainLayout";

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
    <div>
      <MainLayout/>
    </div>
  );
};

export default DashboardPage;
