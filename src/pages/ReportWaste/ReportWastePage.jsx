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
                {/* <ChevronDown className="select-icon" size={20} /> */}
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
