import { Form, Input, Button, Select, Card } from "antd";
import { useCandidates } from "../context/CandidateContext";
import { useNavigate } from "react-router-dom";

export default function AddCandidate() {
  const { addCandidate } = useCandidates();
  const navigate = useNavigate();

  const onFinish = (values) => {
    addCandidate(values);
    navigate("/candidates"); // redirect after adding
  };

  return (
    <div>
      <h2>Add Candidate</h2>

      <Card style={{ maxWidth: 500 }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="status" label="Status">
            <Select
              options={[
                { value: "Applied", label: "Applied" },
                { value: "Shortlisted", label: "Shortlisted" },
                { value: "Interview", label: "Interview" },
                { value: "Selected", label: "Selected" },
                { value: "Rejected", label: "Rejected" },
              ]}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Add Candidate
          </Button>
        </Form>
      </Card>
    </div>
  );
}