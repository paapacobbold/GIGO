// import Sidebar from "../../components/sidebar/sidebar";
// import TopBar from "../../components/TopBar/TopBar";
// import { React, useState } from "react";
// import "./ReportHistoryPage.css";

// function ReportHistory() {
//   const [selectedRows, setSelectedRows] = useState([]);

//   const reports = [
//     {
//       id: 1,
//       location: "Unity Hall",
//       room: "2nd Floor, Room 43",
//       type: "Cell Text",
//       date: "Cell Text",
//       time: "Cell Text",
//       orderId: "Cell Text",
//       status: "Completed",
//     },
//     {
//       id: 2,
//       location: "Unity Hall",
//       room: "2nd Floor, Room 43",
//       type: "Cell Text",
//       date: "Cell Text",
//       time: "Cell Text",
//       orderId: "Cell Text",
//       status: "Cancelled",
//     },
//     {
//       id: 3,
//       location: "Unity Hall",
//       room: "2nd Floor, Room 43",
//       type: "Cell Text",
//       date: "Cell Text",
//       time: "Cell Text",
//       orderId: "Cell Text",
//       status: "Open",
//     },
//     {
//       id: 4,
//       location: "Unity Hall",
//       room: "2nd Floor, Room 43",
//       type: "Cell Text",
//       date: "Cell Text",
//       time: "Cell Text",
//       orderId: "Cell Text",
//       status: "Completed",
//     },
//     {
//       id: 5,
//       location: "Unity Hall",
//       room: "2nd Floor, Room 43",
//       type: "Cell Text",
//       date: "Cell Text",
//       time: "Cell Text",
//       orderId: "Cell Text",
//       status: "Completed",
//     },
//     {
//       id: 6,
//       location: "Unity Hall",
//       room: "2nd Floor, Room 43",
//       type: "Cell Text",
//       date: "Cell Text",
//       time: "Cell Text",
//       orderId: "Cell Text",
//       status: "Completed",
//     },
//     {
//       id: 7,
//       location: "Unity Hall",
//       room: "2nd Floor, Room 43",
//       type: "Cell Text",
//       date: "Cell Text",
//       time: "Cell Text",
//       orderId: "Cell Text",
//       status: "Completed",
//     },
//     {
//       id: 8,
//       location: "Unity Hall",
//       room: "2nd Floor, Room 43",
//       type: "Cell Text",
//       date: "Cell Text",
//       time: "Cell Text",
//       orderId: "Cell Text",
//       status: "Completed",
//     },
//     {
//       id: 9,
//       location: "Unity Hall",
//       room: "2nd Floor, Room 43",
//       type: "Cell Text",
//       date: "Cell Text",
//       time: "Cell Text",
//       orderId: "Cell Text",
//       status: "Completed",
//     },
//     {
//       id: 10,
//       location: "Unity Hall",
//       room: "2nd Floor, Room 43",
//       type: "Cell Text",
//       date: "Cell Text",
//       time: "Cell Text",
//       orderId: "Cell Text",
//       status: "Completed",
//     },
//   ];
//   const toggleSelectRow = (id) => {
//     if (selectedRows.includes(id)) {
//       setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
//     } else {
//       setSelectedRows([...selectedRows, id]);
//     }
//   };

//   const toggleSelectAll = () => {
//     if (selectedRows.length === reports.length) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows(reports.map((report) => report.id));
//     }
//   };
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   return (
//     <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
//       <Sidebar
//         isDarkMode={isDarkMode}
//         setIsDarkMode={setIsDarkMode}
//         activePage="payment"
//       />
//       <TopBar />
//       <div className="main-content">
//         <h1 className="reports-title">Recent Reports</h1>

//         <div className="reports-table-container">
//           <table className="reports-table">
//             <thead>
//               <tr>
//                 <th className="checkbox-column">
//                   <input
//                     type="checkbox"
//                     checked={selectedRows.length === reports.length}
//                     onChange={toggleSelectAll}
//                   />
//                 </th>
//                 <th className="location-column">Location</th>
//                 <th>Type</th>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Order ID</th>
//                 <th>Status</th>
//                 <th className="actions-column"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {reports.map((report, index) => (
//                 <tr
//                   key={report.id}
//                   className={index % 2 === 0 ? "even-row" : "odd-row"}
//                 >
//                   <td className="checkbox-column">
//                     <input
//                       type="checkbox"
//                       checked={selectedRows.includes(report.id)}
//                       onChange={() => toggleSelectRow(report.id)}
//                     />
//                   </td>
//                   <td className="location-column">
//                     <div className="location-cell">
//                       <div className="location-icon">
//                         <svg
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
//                             stroke="#0e7a3c"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
//                             stroke="#0e7a3c"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </div>
//                       <div className="location-info">
//                         <div className="location-name">{report.location}</div>
//                         <div className="location-room">{report.room}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td>{report.type}</td>
//                   <td>{report.date}</td>
//                   <td>{report.time}</td>
//                   <td>{report.orderId}</td>
//                   <td>
//                     <span
//                       className={`status-badge status-${report.status.toLowerCase()}`}
//                     >
//                       {report.status}
//                     </span>
//                   </td>
//                   <td className="actions-column">
//                     <button className="action-button">
//                       <svg
//                         width="16"
//                         height="4"
//                         viewBox="0 0 16 4"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M2 2C2 2.53043 1.78929 3.03914 1.41421 3.41421C1.03914 3.78929 0.53043 4 0 4C-0.53043 4 -1.03914 3.78929 -1.41421 3.41421C-1.78929 3.03914 -2 2.53043 -2 2C-2 1.46957 -1.78929 0.96086 -1.41421 0.58579C-1.03914 0.21071 -0.53043 0 0 0C0.53043 0 1.03914 0.21071 1.41421 0.58579C1.78929 0.96086 2 1.46957 2 2ZM9 2C9 2.53043 8.78929 3.03914 8.41421 3.41421C8.03914 3.78929 7.53043 4 7 4C6.46957 4 5.96086 3.78929 5.58579 3.41421C5.21071 3.03914 5 2.53043 5 2C5 1.46957 5.21071 0.96086 5.58579 0.58579C5.96086 0.21071 6.46957 0 7 0C7.53043 0 8.03914 0.21071 8.41421 0.58579C8.78929 0.96086 9 1.46957 9 2ZM16 2C16 2.53043 15.7893 3.03914 15.4142 3.41421C15.0391 3.78929 14.5304 4 14 4C13.4696 4 12.9609 3.78929 12.5858 3.41421C12.2107 3.03914 12 2.53043 12 2C12 1.46957 12.2107 0.96086 12.5858 0.58579C12.9609 0.21071 13.4696 0 14 0C14.5304 0 15.0391 0.21071 15.4142 0.58579C15.7893 0.96086 16 1.46957 16 2Z"
//                           fill="#666666"
//                         />
//                       </svg>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReportHistory;

// import Sidebar from "../../components/sidebar/sidebar";
// import TopBar from "../../components/TopBar/TopBar";
// import { useState, useEffect } from "react";
// import "./ReportHistoryPage.css";

// function ReportHistory() {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [reports, setReports] = useState([]);

//   // Load reports from localStorage
//   useEffect(() => {
//     const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
//     setReports(storedReports);
//   }, []);

//   // Toggle selecting individual rows
//   const toggleSelectRow = (id) => {
//     setSelectedRows((prevSelected) =>
//       prevSelected.includes(id)
//         ? prevSelected.filter((rowId) => rowId !== id)
//         : [...prevSelected, id]
//     );
//   };

//   // Toggle selecting all rows
//   const toggleSelectAll = () => {
//     setSelectedRows(
//       selectedRows.length === reports.length
//         ? []
//         : reports.map((_, index) => index)
//     );
//   };

//   // Delete selected reports
//   const handleDelete = () => {
//     if (selectedRows.length === 0) return;

//     // Remove selected reports from state
//     const updatedReports = reports.filter(
//       (_, index) => !selectedRows.includes(index)
//     );

//     // Update localStorage
//     localStorage.setItem("reports", JSON.stringify(updatedReports));

//     // Update state
//     setReports(updatedReports);
//     setSelectedRows([]); // Clear selection
//   };

//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
//       <Sidebar
//         isDarkMode={isDarkMode}
//         setIsDarkMode={setIsDarkMode}
//         activePage="report-history"
//       />
//       <TopBar />
//       <div className="main-content">
//         <h1 className="reports-title">Recent Reports</h1>

//         <div className="reports-table-container">
//           {reports.length > 0 ? (
//             <>
//               <table className="reports-table">
//                 <thead>
//                   <tr>
//                     <th className="checkbox-column">
//                       <input
//                         type="checkbox"
//                         checked={selectedRows.length === reports.length}
//                         onChange={toggleSelectAll}
//                       />
//                     </th>
//                     <th>Location</th>
//                     <th>Waste Type</th>
//                     <th>Date</th>
//                     <th>Time</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {reports.map((report, index) => (
//                     <tr
//                       key={index}
//                       className={index % 2 === 0 ? "even-row" : "odd-row"}
//                     >
//                       <td className="checkbox-column">
//                         <input
//                           type="checkbox"
//                           checked={selectedRows.includes(index)}
//                           onChange={() => toggleSelectRow(index)}
//                         />
//                       </td>
//                       <td>{report.location}</td>
//                       <td>{report.wasteType}</td>
//                       <td>{report.date}</td>
//                       <td>{report.time}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Small Green Delete Button */}
//               <button
//                 className="delete-button"
//                 onClick={handleDelete}
//                 disabled={selectedRows.length === 0}
//               >
//                 Delete
//               </button>
//             </>
//           ) : (
//             <p className="no-data-message">No reports found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReportHistory;

// Use this instead this is the correct one

// import Sidebar from "../../components/sidebar/sidebar";
// import TopBar from "../../components/TopBar/TopBar";
// import { useState, useEffect } from "react";
// import "./ReportHistoryPage.css";

// function ReportHistory() {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [reports, setReports] = useState([]);

//   // Load reports from localStorage
//   useEffect(() => {
//     const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
//     setReports(storedReports);
//   }, []);

//   // Toggle selecting individual rows
//   const toggleSelectRow = (id) => {
//     setSelectedRows((prevSelected) =>
//       prevSelected.includes(id)
//         ? prevSelected.filter((rowId) => rowId !== id)
//         : [...prevSelected, id]
//     );
//   };

//   // Toggle selecting all rows
//   const toggleSelectAll = () => {
//     setSelectedRows(
//       selectedRows.length === reports.length
//         ? []
//         : reports.map((_, index) => index)
//     );
//   };

//   // Delete selected reports
//   const handleDelete = () => {
//     if (selectedRows.length === 0) return;

//     // Remove selected reports from state
//     const updatedReports = reports.filter(
//       (_, index) => !selectedRows.includes(index)
//     );

//     // Update localStorage
//     localStorage.setItem("reports", JSON.stringify(updatedReports));

//     // Update state
//     setReports(updatedReports);
//     setSelectedRows([]); // Clear selection
//   };

//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
//       <Sidebar
//         isDarkMode={isDarkMode}
//         setIsDarkMode={setIsDarkMode}
//         activePage="report-history"
//       />
//       <TopBar />
//       <div className="main-content">
//         <h1 className="reports-title">Recent Reports</h1>

//         <div className="reports-table-container">
//           {reports.length > 0 ? (
//             <>
//               <table className="reports-table">
//                 <thead>
//                   <tr>
//                     <th className="checkbox-column">
//                       <input
//                         type="checkbox"
//                         checked={selectedRows.length === reports.length}
//                         onChange={toggleSelectAll}
//                       />
//                     </th>
//                     <th>Location</th>
//                     <th>Waste Type</th>
//                     <th>Date</th>
//                     <th>Time</th>
//                     <th>Instructions</th> {/* New Column */}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {reports.map((report, index) => (
//                     <tr
//                       key={index}
//                       className={index % 2 === 0 ? "even-row" : "odd-row"}
//                     >
//                       <td className="checkbox-column">
//                         <input
//                           type="checkbox"
//                           checked={selectedRows.includes(index)}
//                           onChange={() => toggleSelectRow(index)}
//                         />
//                       </td>
//                       <td>{report.location}</td>
//                       <td>{report.wasteType}</td>
//                       <td>{report.date}</td>
//                       <td>{report.time}</td>
//                       <td>{report.instructions}</td> {/* Show Instructions */}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Small Green Delete Button */}
//               <button
//                 className="delete-button"
//                 onClick={handleDelete}
//                 disabled={selectedRows.length === 0}
//               >
//                 Delete
//               </button>
//             </>
//           ) : (
//             <p className="no-data-message">No reports found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReportHistory;

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
