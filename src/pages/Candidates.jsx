import React, { useState } from "react";
import { Segmented } from "antd";
import ExportCandidates from "../components/ExportCandidates";
import {
  BarsOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import { useCandidates } from "../context/CandidateContext";

import CandidateTable from "../components/CandidateTable";
import CandidateCards from "../components/CandidateCards";
import CandidateFilters from "../components/CandidateFilters";

export default function Candidates() {
  const { candidates } = useCandidates();

  const [view, setView] = useState("table");
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      candidate.email
        .toLowerCase()
        .includes(searchText.toLowerCase());

    const matchesStatus =
      !statusFilter || candidate.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
  }}
>
  <h2 style={{ margin: 0 }}>
    Candidates
  </h2>

  <ExportCandidates
    candidates={candidates}
    filteredCandidates={filteredCandidates}
  />
</div>

        <Segmented
          value={view}
          onChange={setView}
          options={[
            {
              value: "table",
              icon: <BarsOutlined />,
            },
            {
              value: "card",
              icon: <AppstoreOutlined />,
            },
          ]}
        />
      </div>

      <CandidateFilters
        searchText={searchText}
        setSearchText={setSearchText}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {view === "table" ? (
        <CandidateTable candidates={filteredCandidates} />
      ) : (
        <CandidateCards candidates={filteredCandidates} />
      )}
    </div>
  );
}