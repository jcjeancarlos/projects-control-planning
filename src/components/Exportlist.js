import React from "react";

function ExportList({ projects }) {
  const handleExport = () => {
    const jsonData = JSON.stringify(projects, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;

    const date = new Date().toISOString().split("T")[0];
    link.download = `projects-${date}.json`;

    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="BtnExport">
      <button onClick={handleExport}> Export list .JSON</button>
    </div>
  );
}

export default ExportList;
