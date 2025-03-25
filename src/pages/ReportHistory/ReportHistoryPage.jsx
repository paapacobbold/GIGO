import Sidebar from "../../components/sidebar/sidebar";
import TopBar from "../../components/TopBar/TopBar";
import { useState, useEffect } from "react";
import "./ReportHistoryPage.css";

function ReportHistory() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [reports, setReports] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});

  // Load reports from localStorage
  useEffect(() => {
    try {
      const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
      setReports(storedReports);
    } catch (error) {
      console.error("Error loading reports:", error);
      setReports([]);
    }
  }, []);

  // Toggle selecting individual rows
  const toggleSelectRow = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };

  // Toggle selecting all rows
  const toggleSelectAll = () => {
    setSelectedRows(
      selectedRows.length === reports.length
        ? []
        : reports.map((_, index) => index)
    );
  };

  // Toggle expand/collapse instructions
  const toggleExpand = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Delete selected reports
  const handleDelete = () => {
    if (selectedRows.length === 0) return;

    const updatedReports = reports.filter(
      (_, index) => !selectedRows.includes(index)
    );

    localStorage.setItem("reports", JSON.stringify(updatedReports));
    setReports(updatedReports);
    setSelectedRows([]);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="report-history"
      />
      <TopBar />
      <div className="main-content">
        <h1 className="reports-title">Recent Reports</h1>

        <div className="reports-table-container">
          {reports.length > 0 ? (
            <>
              <table className="reports-table">
                <thead>
                  <tr>
                    <th className="checkbox-column">
                      <input
                        type="checkbox"
                        checked={selectedRows.length === reports.length}
                        onChange={toggleSelectAll}
                      />
                    </th>
                    <th>Location</th>
                    <th>Waste Type</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Pickup Instructions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "even-row" : "odd-row"}
                    >
                      <td className="checkbox-column">
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(index)}
                          onChange={() => toggleSelectRow(index)}
                        />
                      </td>
                      <td>{report.location || "N/A"}</td>
                      <td>{report.wasteType || "N/A"}</td>
                      <td>{report.date || "N/A"}</td>
                      <td>{report.time || "N/A"}</td>
                      <td className="instructions-column">
                        {report.instructions ? (
                          <div className="instructions-wrapper">
                            {expandedRows[index] ? (
                              <>
                                {report.instructions}{" "}
                                <button
                                  onClick={() => toggleExpand(index)}
                                  className="view-more-btn"
                                >
                                  Show Less
                                </button>
                              </>
                            ) : (
                              <>
                                {report.instructions
                                  .split(" ")
                                  .slice(0, 3)
                                  .join(" ")}
                                {report.instructions.split(" ").length > 3 && (
                                  <>
                                    ...{" "}
                                    <button
                                      onClick={() => toggleExpand(index)}
                                      className="view-more-btn"
                                    >
                                      Show More
                                    </button>
                                  </>
                                )}
                              </>
                            )}
                          </div>
                        ) : (
                          "No instructions"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button
                className="delete-button"
                onClick={handleDelete}
                disabled={selectedRows.length === 0}
              >
                Delete
              </button>
            </>
          ) : (
            <p className="no-data-message">No reports found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReportHistory;
