import React, { useState } from "react";
import { Segmented } from "antd";
import {
  BarsOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import { useCandidates } from "../context/CandidateContext";
import CandidateTable from "../components/CandidateTable";
import CandidateCards from "../components/CandidateCards";

export default function Candidates() {
  const { candidates } = useCandidates();

  const [view, setView] = useState("table");

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
        <h2>Candidates</h2>

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

      {view === "table" ? (
        <CandidateTable candidates={candidates} />
      ) : (
        <CandidateCards candidates={candidates} />
      )}
    </div>
  );
}