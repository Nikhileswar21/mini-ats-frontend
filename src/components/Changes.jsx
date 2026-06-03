import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Space,
  Popconfirm,
  message,
} from "antd";

import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { useCandidates } from "../context/CandidateContext";

export default function Changes({ candidate }) {
  const { updateCandidate, deleteCandidate } = useCandidates();

  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleEdit = () => {
    form.setFieldsValue(candidate);
    setOpen(true);
  };

  const handleSave = async () => {
    const values = await form.validateFields();

    updateCandidate({
      ...candidate,
      ...values,
    });

    message.success("Candidate updated successfully");
    setOpen(false);
  };

  const handleDelete = () => {
    deleteCandidate(candidate.key);
    message.success("Candidate deleted successfully");
  };

  return (
    <>
      <Space size="middle">
        <EditOutlined
          onClick={handleEdit}
          style={{
            color: "#1677ff",
            cursor: "pointer",
            fontSize: "18px",
          }}
        />

        <Popconfirm
          title="Delete Candidate?"
          onConfirm={handleDelete}
        >
          <DeleteOutlined
            style={{
              color: "#ff4d4f",
              cursor: "pointer",
              fontSize: "18px",
            }}
          />
        </Popconfirm>
      </Space>

      <Modal
        title="Edit Candidate"
        open={open}
        onOk={handleSave}
        onCancel={() => setOpen(false)}
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Applied For"
            name="appliedFor"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Experience"
            name="experience"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
          >
            <Select>
              <Select.Option value="Applied">
                Applied
              </Select.Option>

              <Select.Option value="Shortlisted">
                Shortlisted
              </Select.Option>

              <Select.Option value="Interview">
                Interview
              </Select.Option>

              <Select.Option value="Selected">
                Selected
              </Select.Option>

              <Select.Option value="Rejected">
                Rejected
              </Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}