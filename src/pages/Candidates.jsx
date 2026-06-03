import { Table, Tag } from "antd";
import { useCandidates } from "../context/CandidateContext";

export default function Candidates() {
  const { candidates } = useCandidates();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Applied For",
      dataIndex: "appliedFor",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      render: (value) => `${value} Years`,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        let color = "orange";

        if (status === "Selected") color = "green";
        if (status === "Rejected") color = "red";
        if (status === "Interview") color = "blue";
        if (status === "Shortlisted") color = "purple";

        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <div>
      <h2>Candidates</h2>

      <Table
        columns={columns}
        dataSource={candidates}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}