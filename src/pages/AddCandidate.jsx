import React from "react";
import { Form, Input, Button, Select, Card, message } from "antd";
import { useCandidates } from "../context/CandidateContext";

const { Option } = Select;

export default function AddCandidate() {
  const { addCandidate } = useCandidates();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addCandidate(values);

    message.success("Candidate added successfully!");

    form.resetFields();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Candidate</h2>

      <Card style={{ maxWidth: 600 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Candidate Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter candidate name",
              },
            ]}
          >
            <Input placeholder="Enter candidate name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter email",
              },
              {
                type: "email",
                message: "Enter a valid email",
              },
            ]}
          >
            <Input placeholder="Enter email" />
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
            <Select placeholder="Select candidate status">
              <Option value="Applied">Applied</Option>
              <Option value="Shortlisted">Shortlisted</Option>
              <Option value="Interview">Interview</Option>
              <Option value="Selected">Selected</Option>
              <Option value="Rejected">Rejected</Option>
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Add Candidate
          </Button>
        </Form>
      </Card>
    </div>
  );
}