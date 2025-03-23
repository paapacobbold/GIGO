"use client";
import { useState, useEffect, useRef } from "react";
import { Bell, Search, X, ChevronRight } from "lucide-react";
import { useUser } from "../../context/UserContext";
import "./TopBar.css";

// Mock search data - in a real application, this would come from an API or database
const mockSearchData = [
  {
    id: 1,
    title: "Recycling Tips",
    category: "Articles",
    url: "/recycling-tips",
  },
  {
    id: 2,
    title: "Waste Collection Schedule",
    category: "Services",
    url: "/pickup-schedule",
  },
  {
    id: 3,
    title: "Earth Day Events",
    category: "Events",
    url: "/events/earth-day",
  },
  {
    id: 4,
    title: "Composting Guide",
    category: "Guides",
    url: "/guides/composting",
  },
  {
    id: 5,
    title: "Eco-Friendly Products",
    category: "Shop",
    url: "/shop/eco-friendly",
  },
  {
    id: 6,
    title: "Waste Reduction Strategies",
    category: "Articles",
    url: "/waste-reduction",
  },
  {
    id: 7,
    title: "Community Cleanup",
    category: "Events",
    url: "/events/community-cleanup",
  },
  {
    id: 8,
    title: "Subscription Plans",
    category: "Services",
    url: "/subscription",
  },
  { id: 9, title: "Report Waste", category: "Services", url: "/report-waste" },
  { id: 10, title: "Contact Support", category: "Help", url: "/help" },
];

const TopBar = () => {
  const { userData } = useUser();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef(null);

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setShowSearchResults(false);
      return;
    }

    // Filter search results based on input
    const filteredResults = mockSearchData.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
    setShowSearchResults(true);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      // In a real application, you might redirect to a search results page
      console.log("Searching for:", searchTerm);
      // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;

      // For this demo, we'll just close the search results
      setShowSearchResults(false);
    }
  };

  // Handle clicking on a search result
  const handleResultClick = (url) => {
    // In a real application, you would navigate to the URL
    console.log("Navigating to:", url);
    // window.location.href = url;

    // Clear search and close results
    setSearchTerm("");
    setShowSearchResults(false);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="search-container" ref={searchRef}>
          <form onSubmit={handleSearchSubmit}>
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search for anything..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() =>
                searchTerm.trim() !== "" && setShowSearchResults(true)
              }
            />
          </form>

          {/* Search Results Dropdown */}
          {showSearchResults && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                <>
                  <div className="search-results-header">
                    <h3>Search Results</h3>
                    <span>{searchResults.length} results found</span>
                  </div>
                  <div className="search-results-list">
                    {searchResults.map((result) => (
                      <div
                        key={result.id}
                        className="search-result-item"
                        onClick={() => handleResultClick(result.url)}
                      >
                        <div className="result-info">
                          <div className="result-title">{result.title}</div>
                          <div className="result-category">
                            {result.category}
                          </div>
                        </div>
                        <ChevronRight size={16} className="result-icon" />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="no-results">
                  <p>No results found for "{searchTerm}"</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="actions">
          <div className="icon notification">
            <Bell size={20} color="#16a34a" />
          </div>

          <div className="profile" onClick={toggleProfileModal}>
            <img
              src={
                userData?.profileImage || "/placeholder.svg?height=40&width=40"
              }
              alt="Profile"
              className="profile-pic"
            />
            <div className="profile-info">
              <span className="name">
                {userData?.firstName && userData?.lastName
                  ? `${userData.firstName} ${userData.lastName}`
                  : "John Doe"}
              </span>
              <span className="role">User</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="profile-modal-backdrop" onClick={toggleProfileModal}>
          <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-profile-pic">
                <img
                  src={
                    userData?.profileImage ||
                    "/placeholder.svg?height=100&width=100"
                  }
                  alt="Profile"
                />
              </div>
              <h2>
                {userData?.firstName && userData?.lastName
                  ? `${userData.firstName} ${userData.lastName}`
                  : "John Doe"}
              </h2>
              <span className="user-role">User</span>
            </div>

            <div className="modal-content">
              <div className="info-group">
                <label>Email</label>
                <div className="info-value">
                  {userData?.email || "email@example.com"}
                </div>
              </div>

              <div className="info-group">
                <label>Phone Number</label>
                <div className="info-value">
                  {userData?.phoneNumber || "Not provided"}
                </div>
              </div>

              <div className="info-group">
                <label>Date of Birth</label>
                <div className="info-value">
                  {userData?.dateOfBirth || "Not provided"}
                </div>
              </div>

              <div className="info-group">
                <label>Location</label>
                <div className="info-value">
                  {userData?.location || "Not provided"}
                </div>
              </div>

              <div className="info-group">
                <label>Language</label>
                <div className="info-value">
                  {userData?.language || "English"}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="view-profile-btn" onClick={toggleProfileModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
