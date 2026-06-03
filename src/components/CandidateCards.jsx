import React from "react";
import { Card, Row, Col, Tag } from "antd";

export default function CandidateCards({ candidates }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Selected":
        return "green";
      case "Rejected":
        return "red";
      case "Interview":
        return "blue";
      case "Shortlisted":
        return "purple";
      default:
        return "orange";
    }
  };

  return (
    <Row gutter={[16, 16]}>
      {candidates.map((candidate) => (
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          key={candidate.key}
        >
          <Card
            title={candidate.name}
            hoverable
          >
            <p>
              <strong>Email:</strong>
              <br />
              {candidate.email}
            </p>

            <p>
              <strong>Applied For:</strong>
              <br />
              {candidate.appliedFor}
            </p>

            <p>
              <strong>Experience:</strong>
              <br />
              {candidate.experience}
            </p>

            <Tag color={getStatusColor(candidate.status)}>
              {candidate.status}
            </Tag>
          </Card>
        </Col>
      ))}
    </Row>
  );
}