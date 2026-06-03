import React from "react";
import { Row, Col, Input, Select } from "antd";

const { Search } = Input;

export default function CandidateFilters({
  searchText,
  setSearchText,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <Row gutter={16} style={{ marginBottom: 20 }}>
      <Col xs={24} md={16}>
        <Search
          placeholder="Search by name or email"
          allowClear
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Col>

      <Col xs={24} md={8}>
        <Select
          style={{ width: "100%" }}
          placeholder="Filter by Status"
          allowClear
          value={statusFilter || undefined}
          onChange={(value) => setStatusFilter(value || "")}
        >
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
      </Col>
    </Row>
  );
}