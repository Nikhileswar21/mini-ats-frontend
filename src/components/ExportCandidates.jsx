import React from "react";
import { Dropdown, Button, message } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function ExportCandidates({ candidates }) {
  const exportToExcel = (data, fileName) => {
    if (!data.length) {
      message.warning("No candidates found");
      return;
    }

    const exportData = data.map((candidate) => ({
      Name: candidate.name,
      Email: candidate.email,
      "Applied For": candidate.appliedFor,
      Experience: candidate.experience,
      Status: candidate.status,
    }));

    const worksheet =
      XLSX.utils.json_to_sheet(exportData);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Candidates"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }
    );

    saveAs(blob, `${fileName}.xlsx`);
  };

  const exportByStatus = (status) => {
    const filtered = candidates.filter(
      (candidate) => candidate.status === status
    );

    exportToExcel(
      filtered,
      status.toLowerCase()
    );
  };

  const items = [
    {
      key: "all",
      label: "All Candidates",
      onClick: () =>
        exportToExcel(
          candidates,
          "all-candidates"
        ),
    },
    {
      type: "divider",
    },
    {
      key: "applied",
      label: "Applied",
      onClick: () =>
        exportByStatus("Applied"),
    },
    {
      key: "shortlisted",
      label: "Shortlisted",
      onClick: () =>
        exportByStatus("Shortlisted"),
    },
    {
      key: "interview",
      label: "Interview",
      onClick: () =>
        exportByStatus("Interview"),
    },
    {
      key: "selected",
      label: "Selected",
      onClick: () =>
        exportByStatus("Selected"),
    },
    {
      key: "rejected",
      label: "Rejected",
      onClick: () =>
        exportByStatus("Rejected"),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
    >
      <Button
        type="primary"
        icon={<DownloadOutlined />}
      >
        Export Excel
      </Button>
    </Dropdown>
  );
}