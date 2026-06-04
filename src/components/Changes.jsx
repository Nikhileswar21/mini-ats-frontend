import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Button,
  Popconfirm,
  message,
} from "antd";

import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { useCandidates } from "../context/CandidateContext";

export default function Changes({ candidate }) {
  const { editCandidate, removeCandidate } = useCandidates();

  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleEdit = () => {
    form.setFieldsValue(candidate);
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();

      editCandidate(candidate._id, {
        ...values,
      });

      message.success("Candidate updated successfully");
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    removeCandidate(candidate._id);
    message.success("Candidate deleted successfully");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        <Button
          type="primary"
          ghost
          icon={<EditOutlined />}
          onClick={handleEdit}
        >
          Edit
        </Button>

        <Popconfirm
          title="Delete Candidate"
          description="Are you sure you want to delete this candidate?"
          onConfirm={handleDelete}
          okText="Yes"
          cancelText="No"
        >
          <Button
            danger
            icon={<DeleteOutlined />}
          >
            Delete
          </Button>
        </Popconfirm>
      </div>

      <Modal
        title="Edit Candidate"
        open={open}
        onOk={handleSave}
        onCancel={() => setOpen(false)}
        okText="Save Changes"
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Applied For"
            name="role"
            rules={[
              {
                required: true,
                message: "Please enter role",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Experience"
            name="experience"
            rules={[
              {
                required: true,
                message: "Please enter experience",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[
              {
                required: true,
                message: "Please select status",
              },
            ]}
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