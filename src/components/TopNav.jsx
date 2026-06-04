import { Layout } from "antd";

const { Header } = Layout;

export default function TopNav() {
  return (
    <Header style={{ background: "#fff", paddingLeft: 20 }}>
      <h3>Management Dashboard</h3>
    </Header>
  );
}