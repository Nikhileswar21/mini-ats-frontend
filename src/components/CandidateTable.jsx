import React from "react";
import { Table, Tag } from "antd";

export default function CandidateTable({ candidates }) {
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
    <Table
      columns={columns}
      dataSource={candidates}
      pagination={{ pageSize: 5 }}
    />
  );
}