import { Table, Tag } from "antd";
import { useCandidates } from "../context/CandidateContext";

export default function Candidates() {
  const { candidates } = useCandidates();

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        let color =
          status === "Selected"
            ? "green"
            : status === "Rejected"
            ? "red"
            : status === "Interview"
            ? "blue"
            : "orange";

        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <div>
      <h2>Candidates</h2>
      <Table dataSource={candidates} columns={columns} />
    </div>
  );
}