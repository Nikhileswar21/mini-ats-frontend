import { Layout } from "antd";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const { Content } = Layout;

export default function AppLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <TopNav />
        <Content style={{ margin: "20px" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}