import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";
import {
  ChevronDown,
  FileUp,
} from "lucide-react";
import "./ReportWastePage.css";
import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/sidebar/sidebar";

export default function ReportWaste() {
  const [formData, setFormData] = useState({
    location: "",
    wasteType: "",
    date: "",
    time: "",
    instructions: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      console.error("User is not authenticated.");
      return;
    }

    try {
      const reportRef = doc(db, "wasteReports", auth.currentUser.uid);
      await setDoc(reportRef, formData, { merge: true });
      console.log("Report submitted successfully.");
      navigate("/overview");
    } catch (error) {
      console.error("Error submitting report:", error);
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} activePage="subscription" />
      <TopBar />
      <div className="main-content">
        <main className="content">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Waste Type</label>
                <div className="select-container">
                  <select
                    name="wasteType"
                    value={formData.wasteType}
                    onChange={handleChange}
                    className="form-select"
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
              </div>
              <div className="form-group">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select time</option>
                  <option value="08:00">8:00 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
            </div>
            <div className="text-area">
              <label className="form-label-p">Pickup Instructions</label>
              <textarea
                rows="10"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                className="text-input"
                placeholder="Text"
                required
              />
            </div>
            <div className="Bottom-btns">
              <button type="submit" className="Submit-btn">Submit Report</button>
              <button type="button" className="Cancel-btn" onClick={() => navigate("/overview")}>Cancel</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
