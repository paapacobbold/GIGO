import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";
import "./ProfilePage.css";
import Sidebar from "../../components/sidebar/sidebar";
import TopBar from "../../components/TopBar/TopBar";
import { Loader2 } from "lucide-react"; // Importing loader icon

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    location: "",
    language: "",
  });

  const [loading, setLoading] = useState(false); // New state for handling loading
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

    setLoading(true); // Start loader

    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userDocRef, formData, { merge: true });
      console.log("Profile saved successfully.");
      navigate("/overview"); 
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const fetchUserProfile = async () => {
    if (!auth.currentUser) return;

    const userDocRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      setFormData(docSnap.data());
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="profile"
      />

      <TopBar />

      <div className="main-content">
        <div className="content">
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-info">
                <h2>{formData.firstName || "User"}</h2>
                <p>This will be displayed on your profile.</p>
              </div>
            </div>

            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input 
                    type="date" 
                    name="dateOfBirth" 
                    value={formData.dateOfBirth} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Location</label>
                  <input 
                    type="text" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Language</label>
                  <input 
                    type="text" 
                    name="language" 
                    value={formData.language} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={18} />
                    Saving...
                  </div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 