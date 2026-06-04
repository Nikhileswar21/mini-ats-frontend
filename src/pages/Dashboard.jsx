import { Card, Row, Col } from "antd";
import { useCandidates } from "../context/CandidateContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { candidates } = useCandidates();
  const navigate = useNavigate();

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
    {
      title: "Total Candidates",
      value: totalCandidates,
      status: "",
    },
    {
      title: "Applied",
      value: applied,
      status: "Applied",
    },
    {
      title: "Shortlisted",
      value: shortlisted,
      status: "Shortlisted",
    },
    {
      title: "Interview Scheduled",
      value: interviewScheduled,
      status: "Interview",
    },
    {
      title: "Selected",
      value: selected,
      status: "Selected",
    },
    {
      title: "Rejected",
      value: rejected,
      status: "Rejected",
    },
  ];

  const handleCardClick = (status) => {
    if (status) {
      navigate(`/candidates?status=${status}`);
    } else {
      navigate("/candidates");
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <Row gutter={[16, 16]}>
        {stats.map((item) => (
          <Col xs={24} sm={12} md={8} key={item.title}>
            <Card
              hoverable
              onClick={() =>
                handleCardClick(item.status)
              }
              style={{
                cursor: "pointer",
              }}
            >
              <h3>{item.title}</h3>
              <h1>{item.value}</h1>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}