import { Layout, Menu } from "antd";
import { DashboardOutlined, UserOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Sider>
      <div style={{ color: "white", padding: "16px", fontSize: 18 }}>
        Navigation
      </div>

      <Menu
        theme="dark"
        mode="inline"
        onClick={(item) => navigate(item.key)}
        items={[
          { key: "/", icon: <DashboardOutlined /> , label: "Dashboard" },
          { key: "/candidates", icon: <UserOutlined />, label: "Candidates" },
          { key: "/add", icon: <PlusOutlined />, label: "Add Candidate" },
        ]}
      />
    </Sider>
  );
}