import React from "react";
import { Form, Input, Button, Select, Card, message } from "antd";
import { useCandidates } from "../context/CandidateContext";

export default function AddCandidate() {
  const { addCandidate } = useCandidates();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addCandidate(values);
    message.success("Candidate added successfully");
    form.resetFields();
  };

  return (
    <Card title="Add Candidate" style={{ maxWidth: 700 }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true },
            { type: "email" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Applied For"
          name="appliedFor"
          rules={[{ required: true }]}
        >
          <Input placeholder="Frontend Developer" />
        </Form.Item>

        <Form.Item
          label="Experience"
          name="experience"
          rules={[{ required: true }]}
        >
          <Input placeholder="" />
        </Form.Item>

        

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="Applied">Applied</Select.Option>
            <Select.Option value="Shortlisted">Shortlisted</Select.Option>
            <Select.Option value="Interview">Interview</Select.Option>
            <Select.Option value="Selected">Selected</Select.Option>
            <Select.Option value="Rejected">Rejected</Select.Option>
          </Select>
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Add Candidate
        </Button>
      </Form>
    </Card>
  );
}