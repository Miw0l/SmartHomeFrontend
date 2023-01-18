import Sidebar from "../sidebar";
import { Layout } from "antd";

const { Content, Sider } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider style={{ minHeight: "100vh" }} width={250}>
        <Sidebar />
      </Sider>
      <Layout>
        <Content style={{ overflow: "auto" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
