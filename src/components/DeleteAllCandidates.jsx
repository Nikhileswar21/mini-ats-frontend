import React from "react";
import { Button, Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useCandidates } from "../context/CandidateContext";

const DeleteAllCandidates = () => {
  const { removeAllCandidates } = useCandidates();

  const handleDeleteAll = async () => {
    try {
      await removeAllCandidates();
      message.success("All candidates deleted successfully");
    } catch (error) {
      console.error(error);
      message.error("Failed to delete candidates");
    }
  };

  return (
    <Popconfirm
      title="Delete all candidates?"
      description="This action cannot be undone."
      onConfirm={handleDeleteAll}
      okText="Yes"
      cancelText="No"
    >
      <Button danger icon={<DeleteOutlined />}>
        Delete All
      </Button>
    </Popconfirm>
  );
};

export default DeleteAllCandidates;