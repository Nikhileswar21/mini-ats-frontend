import { Card, Row, Col } from "antd";
import { useCandidates } from "../context/CandidateContext";

export default function Dashboard() {
  const { candidates } = useCandidates();

  const totalCandidates = candidates.length;

  const applied = candidates.filter(
    (candidate) => candidate.status === "Applied"
  ).length;

  const shortlisted = candidates.filter(
    (candidate) => candidate.status === "Shortlisted"
  ).length;

  const interviewScheduled = candidates.filter(
    (candidate) => candidate.status === "Interview"
  ).length;

  const selected = candidates.filter(
    (candidate) => candidate.status === "Selected"
  ).length;

  const rejected = candidates.filter(
    (candidate) => candidate.status === "Rejected"
  ).length;

  const stats = [
    { title: "Total Candidates", value: totalCandidates },
    { title: "Applied", value: applied },
    { title: "Shortlisted", value: shortlisted },
    { title: "Interview Scheduled", value: interviewScheduled },
    { title: "Selected", value: selected },
    { title: "Rejected", value: rejected },
  ];

  return (
    <div>
      <h2>Dashboard</h2>

      <Row gutter={[16, 16]}>
        {stats.map((item) => (
          <Col xs={24} sm={12} md={8} key={item.title}>
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