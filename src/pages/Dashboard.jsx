import { Card, Row, Col } from "antd";

export default function Dashboard() {
  const stats = [
    { title: "Total Candidates", value: 0 },
    { title: "Applied", value: 0 },
    { title: "Shortlisted", value: 0 },
    { title: "Interview Scheduled", value: 0 },
    { title: "Selected", value: 0 },
    { title: "Rejected", value: 0  },
  ];

  return (
    <div>
      <h2>Dashboard</h2>

      <Row gutter={[16, 16]}>
        {stats.map((item, index) => (
          <Col span={8} key={index}>
            <Card>
              <h3>{item.title}</h3>
              <h1>{item.value}</h1>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}