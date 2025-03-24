// import { useState, useRef, useCallback } from "react";
// import { ChevronDown, FileUp, File } from "lucide-react";
// import "./ReportWastePage.css";
// import TopBar from "../../components/TopBar/TopBar";
// import Sidebar from "../../components/sidebar/sidebar";

// export default function ReportWaste() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [file, setFile] = useState(null);
//   const [filePreview, setFilePreview] = useState(null);
//   const [fileType, setFileType] = useState(null);
//   const [formData, setFormData] = useState({
//     location: "",
//     wasteType: "",
//     date: "",
//     time: "",
//     instructions: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const fileInputRef = useRef(null);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle file selection
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;

//     handleFile(selectedFile);
//   };

//   // Process the selected file
//   const handleFile = (selectedFile) => {
//     setFile(selectedFile);

//     // Determine file type
//     if (selectedFile.type.startsWith("image/")) {
//       setFileType("image");
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setFilePreview(e.target.result);
//       };
//       reader.readAsDataURL(selectedFile);
//     } else if (selectedFile.type.startsWith("video/")) {
//       setFileType("video");
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setFilePreview(e.target.result);
//       };
//       reader.readAsDataURL(selectedFile);
//     } else {
//       setFileType("file");
//       setFilePreview(null);
//     }
//   };

//   // Handle drag and drop
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       const droppedFile = e.dataTransfer.files[0];
//       handleFile(droppedFile);
//     }
//   }, []);

//   // Trigger file input click
//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     // Create form data for submission
//     const submitData = new FormData();
//     submitData.append("location", formData.location);
//     submitData.append("wasteType", formData.wasteType);
//     submitData.append("date", formData.date);
//     submitData.append("time", formData.time);
//     submitData.append("instructions", formData.instructions);

//     if (file) {
//       submitData.append("file", file);
//     }

//     try {
//       // Send data to the server
//       const response = await fetch("/api/send-report", {
//         method: "POST",
//         body: submitData,
//       });

//       if (response.ok) {
//         setSubmitStatus({
//           type: "success",
//           message: "Report submitted successfully!",
//         });
//         // Reset form after successful submission
//         setFormData({
//           location: "",
//           wasteType: "",
//           date: "",
//           time: "",
//           instructions: "",
//         });
//         setFile(null);
//         setFilePreview(null);
//         setFileType(null);
//       } else {
//         const error = await response.json();
//         setSubmitStatus({
//           type: "error",
//           message:
//             error.message || "Failed to submit report. Please try again.",
//         });
//       }
//     } catch (error) {
//       setSubmitStatus({
//         type: "error",
//         message: "An error occurred. Please try again.",
//       });
//       console.error("Error submitting form:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
//       <Sidebar
//         isDarkMode={isDarkMode}
//         setIsDarkMode={setIsDarkMode}
//         activePage="subscription"
//       />

//       <TopBar />
//       {/* Main Content */}
//       <div className="main-content">
//         <main className="content">
//           <form onSubmit={handleSubmit}>
//             {/* Upload Area */}
//             <div
//               className="upload-area"
//               onClick={handleUploadClick}
//               onDragOver={handleDragOver}
//               onDrop={handleDrop}
//             >
//               {filePreview && fileType === "image" ? (
//                 <div style={{ textAlign: "center" }}>
//                   <img
//                     src={filePreview || "/placeholder.svg"}
//                     alt="Preview"
//                     style={{
//                       maxWidth: "100%",
//                       maxHeight: "300px",
//                       marginBottom: "1rem",
//                     }}
//                   />
//                   <p>{file.name}</p>
//                 </div>
//               ) : filePreview && fileType === "video" ? (
//                 <div style={{ textAlign: "center" }}>
//                   <video
//                     src={filePreview}
//                     controls
//                     style={{
//                       maxWidth: "100%",
//                       maxHeight: "300px",
//                       marginBottom: "1rem",
//                     }}
//                   />
//                   <p>{file.name}</p>
//                 </div>
//               ) : file && fileType === "file" ? (
//                 <div
//                   style={{
//                     textAlign: "center",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <File size={64} />
//                   <p style={{ marginTop: "1rem" }}>{file.name}</p>
//                 </div>
//               ) : (
//                 <>
//                   <div className="upload-icon-container">
//                     <FileUp size={32} className="upload-icon" />
//                   </div>
//                   <h3 className="upload-title">
//                     Upload a file, or drag and drop
//                   </h3>
//                   <p className="upload-description">
//                     PNG, JPEG, GIF up to 10MB
//                   </p>
//                 </>
//               )}
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 style={{ display: "none" }}
//                 accept="image/*,video/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//               />
//             </div>

//             {/* Verify Button */}
//             <button
//               type="button"
//               className="verify-button"
//               onClick={handleUploadClick}
//             >
//               {file ? "Change File" : "Verify Waste"}
//             </button>

//             {/* Form */}
//             <div className="form-grid">
//               <div className="form-group">
//                 <label className="form-label">Location</label>
//                 <input
//                   type="text"
//                   className="form-input"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="form-label">Waste Type</label>
//                 <div className="select-container">
//                   <select
//                     className="form-select"
//                     name="wasteType"
//                     value={formData.wasteType}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="">Select waste type</option>
//                     <option value="organic">Organic Waste</option>
//                     <option value="plastic">Plastic</option>
//                     <option value="glass">Glass</option>
//                     <option value="metal">Metal</option>
//                     <option value="paper">Paper</option>
//                     <option value="electronics">Electronic Waste</option>
//                     <option value="textiles">Textiles</option>
//                     <option value="hazardous">Hazardous Waste</option>
//                     <option value="construction">Construction Debris</option>
//                     <option value="medical">Medical Waste</option>
//                   </select>
//                   <ChevronDown className="select-icon" size={20} />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label className="form-label">Date</label>
//                 <div className="input-with-icon">
//                   <input
//                     type="date"
//                     className="form-input"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Time</label>
//                 <div className="select-container">
//                   <select
//                     className="form-select"
//                     name="time"
//                     value={formData.time}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="">Select time</option>
//                     <option value="08:00">8:00 AM</option>
//                     <option value="09:00">9:00 AM</option>
//                     <option value="10:00">10:00 AM</option>
//                     <option value="11:00">11:00 AM</option>
//                     <option value="12:00">12:00 PM</option>
//                     <option value="13:00">1:00 PM</option>
//                     <option value="14:00">2:00 PM</option>
//                     <option value="15:00">3:00 PM</option>
//                     <option value="16:00">4:00 PM</option>
//                   </select>
//                   <ChevronDown className="select-icon" size={20} />
//                 </div>
//               </div>
//             </div>
//             <div className="text-area">
//               <label className="form-label-p">Pickup Instructions</label>
//               <div className="text-input">
//                 <textarea
//                   rows="10"
//                   placeholder="Text"
//                   name="instructions"
//                   value={formData.instructions}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Status message */}
//             {submitStatus && (
//               <div
//                 style={{
//                   marginTop: "1rem",
//                   padding: "0.75rem",
//                   borderRadius: "0.5rem",
//                   backgroundColor:
//                     submitStatus.type === "success" ? "#dcfce7" : "#fee2e2",
//                   color:
//                     submitStatus.type === "success" ? "#166534" : "#b91c1c",
//                 }}
//               >
//                 {submitStatus.message}
//               </div>
//             )}

//             <div className="Bottom-btns">
//               <button
//                 type="submit"
//                 className="Submit-btn"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Report"}
//               </button>
//               <button
//                 type="button"
//                 className="Cancel-btn"
//                 onClick={() => {
//                   // Reset form
//                   setFormData({
//                     location: "",
//                     wasteType: "",
//                     date: "",
//                     time: "",
//                     instructions: "",
//                   });
//                   setFile(null);
//                   setFilePreview(null);
//                   setFileType(null);
//                   setSubmitStatus(null);
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </main>
//       </div>
//     </div>
//   );
// }

// function NavItem({ icon, label, active, hasDropdown, iconColor }) {
//   return (
//     <div className={`nav-item ${active ? "active" : ""} ${iconColor || ""}`}>
//       <span className="nav-icon">{icon}</span>
//       <span className="nav-label">{label}</span>
//       {hasDropdown && <ChevronDown size={16} className="dropdown-icon" />}
//     </div>
//   );
// }

// import { useState, useRef, useCallback } from "react";
// import { ChevronDown, FileUp, File } from "lucide-react";
// import "./ReportWastePage.css";
// import TopBar from "../../components/TopBar/TopBar";
// import Sidebar from "../../components/sidebar/sidebar";

// export default function ReportWaste() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [file, setFile] = useState(null);
//   const [filePreview, setFilePreview] = useState(null);
//   const [fileType, setFileType] = useState(null);
//   const [formData, setFormData] = useState({
//     location: "",
//     wasteType: "",
//     date: "",
//     time: "",
//     instructions: "",
//   });

//   const fileInputRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;
//     handleFile(selectedFile);
//   };

//   const handleFile = (selectedFile) => {
//     setFile(selectedFile);

//     if (selectedFile.type.startsWith("image/")) {
//       setFileType("image");
//       const reader = new FileReader();
//       reader.onload = (e) => setFilePreview(e.target.result);
//       reader.readAsDataURL(selectedFile);
//     } else if (selectedFile.type.startsWith("video/")) {
//       setFileType("video");
//       const reader = new FileReader();
//       reader.onload = (e) => setFilePreview(e.target.result);
//       reader.readAsDataURL(selectedFile);
//     } else {
//       setFileType("file");
//       setFilePreview(null);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.dataTransfer.files.length > 0) {
//       handleFile(e.dataTransfer.files[0]);
//     }
//   }, []);

//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newReport = {
//       location: formData.location,
//       wasteType: formData.wasteType,
//       date: formData.date,
//       time: formData.time,
//     };

//     const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
//     storedReports.push(newReport);
//     localStorage.setItem("reports", JSON.stringify(storedReports));

//     setFormData({
//       location: "",
//       wasteType: "",
//       date: "",
//       time: "",
//       instructions: "",
//     });
//     setFile(null);
//     setFilePreview(null);
//     setFileType(null);
//   };

//   return (
//     <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
//       <Sidebar
//         isDarkMode={isDarkMode}
//         setIsDarkMode={setIsDarkMode}
//         activePage="subscription"
//       />
//       <TopBar />
//       <div className="main-content">
//         <main className="content">
//           <form onSubmit={handleSubmit}>
//             <div
//               className="upload-area"
//               onClick={handleUploadClick}
//               onDragOver={handleDragOver}
//               onDrop={handleDrop}
//             >
//               {filePreview && fileType === "image" ? (
//                 <img src={filePreview} alt="Preview" className="file-preview" />
//               ) : filePreview && fileType === "video" ? (
//                 <video src={filePreview} controls className="file-preview" />
//               ) : file ? (
//                 <div className="file-preview">
//                   <File size={64} />
//                   <p>{file.name}</p>
//                 </div>
//               ) : (
//                 <>
//                   <FileUp size={32} className="upload-icon" />
//                   <h3 className="upload-title">
//                     Upload a file, or drag and drop
//                   </h3>
//                   <p className="upload-description">
//                     PNG, JPEG, GIF, MP4, PDF, DOCX (up to 10MB)
//                   </p>
//                 </>
//               )}
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 style={{ display: "none" }}
//                 accept="image/*,video/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//               />
//             </div>

//             <button
//               type="button"
//               className="verify-button"
//               onClick={handleUploadClick}
//             >
//               {file ? "Change File" : "Verify Waste"}
//             </button>

//             <div className="form-grid">
//               <div className="form-group">
//                 <label className="form-label">Location</label>
//                 <input
//                   type="text"
//                   className="form-input"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Waste Type</label>
//                 <div className="select-container">
//                   <select
//                     className="form-select"
//                     name="wasteType"
//                     value={formData.wasteType}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="">Select waste type</option>
//                     <option value="organic">Organic Waste</option>
//                     <option value="plastic">Plastic</option>
//                     <option value="glass">Glass</option>
//                     <option value="metal">Metal</option>
//                     <option value="paper">Paper</option>
//                     <option value="electronics">Electronic Waste</option>
//                     <option value="textiles">Textiles</option>
//                     <option value="hazardous">Hazardous Waste</option>
//                     <option value="construction">Construction Debris</option>
//                     <option value="medical">Medical Waste</option>
//                   </select>
//                   <ChevronDown className="select-icon" size={20} />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Date</label>
//                 <input
//                   type="date"
//                   className="form-input"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">Time</label>
//                 <select
//                   className="form-select"
//                   name="time"
//                   value={formData.time}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Select time</option>
//                   <option value="08:00">8:00 AM</option>
//                   <option value="09:00">9:00 AM</option>
//                   <option value="10:00">10:00 AM</option>
//                   <option value="11:00">11:00 AM</option>
//                   <option value="12:00">12:00 PM</option>
//                   <option value="13:00">1:00 PM</option>
//                   <option value="14:00">2:00 PM</option>
//                   <option value="15:00">3:00 PM</option>
//                   <option value="16:00">4:00 PM</option>
//                 </select>
//               </div>
//             </div>

//             <div className="text-area">
//               <label className="form-label">Pickup Instructions</label>
//               <textarea
//                 rows="4"
//                 name="instructions"
//                 value={formData.instructions}
//                 onChange={handleInputChange}
//                 className="form-input"
//               />
//             </div>

//             <div className="Bottom-btns">
//               <button type="submit" className="Submit-btn">
//                 Submit Report
//               </button>
//               <button
//                 type="button"
//                 className="Cancel-btn"
//                 onClick={() =>
//                   setFormData({
//                     location: "",
//                     wasteType: "",
//                     date: "",
//                     time: "",
//                     instructions: "",
//                   })
//                 }
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </main>
//       </div>
//     </div>
//   );
// }

import { useState, useRef, useCallback } from "react";
import { ChevronDown, FileUp, File } from "lucide-react";
import "./ReportWastePage.css";
import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/sidebar/sidebar";

export default function ReportWaste() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    wasteType: "",
    date: "",
    time: "",
    instructions: "",
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    handleFile(selectedFile);
  };

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    if (selectedFile.type.startsWith("image/")) {
      setFileType("image");
      const reader = new FileReader();
      reader.onload = (e) => setFilePreview(e.target.result);
      reader.readAsDataURL(selectedFile);
    } else if (selectedFile.type.startsWith("video/")) {
      setFileType("video");
      const reader = new FileReader();
      reader.onload = (e) => setFilePreview(e.target.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setFileType("file");
      setFilePreview(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      location: formData.location,
      wasteType: formData.wasteType,
      date: formData.date,
      time: formData.time,
      instructions: formData.instructions,
    };

    const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
    storedReports.push(newReport);
    localStorage.setItem("reports", JSON.stringify(storedReports));

    setShowPopup(true); // Show popup
    setTimeout(() => setShowPopup(false), 3000); // Hide after 3s

    setFormData({
      location: "",
      wasteType: "",
      date: "",
      time: "",
      instructions: "",
    });
    setFile(null);
    setFilePreview(null);
    setFileType(null);
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage=""
      />
      <TopBar />
      <div className="main-content">
        <main className="content">
          <form onSubmit={handleSubmit}>
            <div
              className="upload-area"
              onClick={handleUploadClick}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {filePreview && fileType === "image" ? (
                <img src={filePreview} alt="Preview" className="file-preview" />
              ) : filePreview && fileType === "video" ? (
                <video src={filePreview} controls className="file-preview" />
              ) : file ? (
                <div className="file-preview">
                  <File size={64} />
                  <p>{file.name}</p>
                </div>
              ) : (
                <>
                  <FileUp size={32} className="upload-icon" />
                  <h3 className="upload-title">
                    Upload a file, or drag and drop
                  </h3>
                  <p className="upload-description">
                    PNG, JPEG, GIF, MP4, PDF, DOCX (up to 10MB)
                  </p>
                </>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
                accept="image/*,video/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </div>

            <button
              type="button"
              className="verify-button"
              onClick={handleUploadClick}
            >
              {file ? "Change File" : "Verify Waste"}
            </button>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-input"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Waste Type</label>
                <select
                  className="form-select"
                  name="wasteType"
                  value={formData.wasteType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select waste type</option>
                  <option value="organic">Organic Waste</option>
                  <option value="plastic">Plastic</option>
                  <option value="glass">Glass</option>
                  <option value="metal">Metal</option>
                  <option value="paper">Paper</option>
                  <option value="electronics">Electronic Waste</option>
                  <option value="textiles">Textiles</option>
                  <option value="hazardous">Hazardous Waste</option>
                  <option value="construction">Construction Debris</option>
                  <option value="medical">Medical Waste</option>
                </select>
                <ChevronDown className="select-icon" size={20} />
              </div>

              <div className="form-group">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-input"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Time</label>
                <input
                  type="time"
                  className="form-input"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="text-area">
              <label className="form-label">Pickup Instructions</label>
              <textarea
                rows="4"
                name="instructions"
                value={formData.instructions}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="Bottom-btns">
              <button type="submit" className="Submit-btn">
                Submit Report
              </button>
              <button
                type="button"
                className="Cancel-btn"
                onClick={() => {
                  setFormData({
                    location: "",
                    wasteType: "",
                    date: "",
                    time: "",
                    instructions: "",
                  });
                  setFile(null); // Clear the uploaded file
                  setFilePreview(null); // Remove the preview image/video
                  setFileType(null); // Reset the file type
                  if (fileInputRef.current) {
                    fileInputRef.current.value = ""; // Clear the file input field
                  }
                }}
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Success Popup */}
          {showPopup && (
            <div className="popup">Report Submitted Successfully!</div>
          )}
        </main>
      </div>
    </div>
  );
}
