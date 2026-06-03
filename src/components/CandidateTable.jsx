import React from "react";
import { Table, Tag } from "antd";
import Changes from "./Changes";

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
      dataIndex: "role",
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

    {
  title: "Actions",
  render: (_, record) => (
    <Changes candidate={record} />
  ),
}
  ];

  return (
    <Table
      columns={columns}
      dataSource={candidates}
      pagination={{ pageSize: 5 }}
    />
  );
}