import React from "react";
import { Card, Row, Col, Tag } from "antd";
import "./CandidateCards.css";
import Changes from "./Changes";

export default function CandidateCards({ candidates }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Selected":
        return "#22c55e";
      case "Rejected":
        return "#ef4444";
      case "Interview":
        return "#3b82f6";
      case "Shortlisted":
        return "#8b5cf6";
      default:
        return "#f59e0b";
    }
  };

  return (
    <Row gutter={[20, 20]}>
      {candidates.map((candidate) => (
        <Col xs={24} sm={12} md={12} lg={6} key={candidate.key}>
          <Card className="candidate-card">
            <div className="card-header">
              <h3>{candidate.name}</h3>

              <Tag
                className="status-pill"
                color={getStatusColor(candidate.status)}
              >
                {candidate.status.toUpperCase()}
              </Tag>
            </div>

            <div className="card-divider"></div>

            <div className="card-section">
              <label>EMAIL :</label>
              <p>{candidate.email}</p>
            </div>

            <div className="card-section">
              <label>APPLIED ROLE :</label>
              <p>{candidate.role}</p>
            </div>

            <div className="card-section">
              <label>EXPERIENCE :</label>
              <p>{candidate.experience}</p>
            </div>
                           <div
                           style={{
                           marginTop: 16,
                           display: "flex",
                           justifyContent: "flex-end",
                         }}
                         >
                           <Changes candidate={candidate} />
                        </div>
            
          </Card>
        </Col>
      ))}
    </Row>
  );
}