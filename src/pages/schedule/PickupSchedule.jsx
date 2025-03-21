import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import TopBar from "../../components/TopBar/TopBar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./PickupSchedule.css";

const PickupSchedule = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("January 2025");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Add window width tracking
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Add resize listener
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const events = [
    {
      id: 1,
      title: "Recyclable Waste",
      date: "30",
      color: "#e6f7e6",
      type: "recycling",
    },
    {
      id: 2,
      title: "General Waste",
      date: "31",
      color: "#ffe6e6",
      type: "general",
    },
    {
      id: 3,
      title: "Organic Waste",
      date: "2",
      color: "#fff2e6",
      type: "organic",
    },
    {
      id: 4,
      title: "Special Pickup",
      date: "15",
      color: "#e6f3ff",
      type: "special",
    },
  ];

  // Calendar data
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const days = [
    [30, 31, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 1, 2],
  ];

  const getEventForDate = (date) =>
    events.find((event) => event.date === date.toString());

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handlePreviousMonth = () => {
    setCurrentMonth("December 2024"); // Add logic for previous month
  };

  const handleNextMonth = () => {
    setCurrentMonth("February 2025"); // Add logic for next month
  };

  // Responsive calendar days
  const getResponsiveDayLabel = (day) => {
    if (windowWidth <= 480) {
      return day.substring(0, 1); // Show only first letter on mobile
    }
    return day;
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="pickup-schedule"
      />
      <TopBar />

      <div className="pickup-schedule-container">
        <div className="schedule-header">
          {/* Remove the button from here */}
        </div>

        <div className="schedule-content">
          <div className="calendar-section">
            <div className="month-navigation">
              <button className="nav-btn" onClick={handlePreviousMonth}>
                <ChevronLeft
                  size={windowWidth <= 480 ? 20 : 24}
                  strokeWidth={2}
                />
              </button>
              <h2>{currentMonth}</h2>
              <button className="nav-btn" onClick={handleNextMonth}>
                <ChevronRight
                  size={windowWidth <= 480 ? 20 : 24}
                  strokeWidth={2}
                />
              </button>
            </div>

            <div className="calendar-grid">
              {daysOfWeek.map((day) => (
                <div key={day} className="day-header">
                  {getResponsiveDayLabel(day)}
                </div>
              ))}

              {days.flat().map((day, index) => {
                const event = getEventForDate(day);
                return (
                  <div
                    key={index}
                    className={`calendar-day ${event ? "has-event" : ""}`}
                    onClick={() => event && handleEventClick(event)}
                  >
                    <span className="day-number">{day}</span>
                    {event && (
                      <div
                        className="event-indicator"
                        style={{ backgroundColor: event.color }}
                      >
                        {event.title}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="schedule-details">
            {selectedEvent && (
              <div className="selected-event-details">
                <h3>Selected Pickup Details</h3>
                <div
                  className="event-card"
                  style={{ backgroundColor: selectedEvent.color }}
                >
                  <h4>{selectedEvent.title}</h4>
                  <p>Date: January {selectedEvent.date}, 2025</p>
                  <p>Type: {selectedEvent.type}</p>
                  <p>Time: 8:00 AM</p>
                  <button
                    className="close-details"
                    onClick={() => setSelectedEvent(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <div className="event-list">
              <h3 className="event-list-title">Upcoming Pickups</h3>
              <div className="events-container">
                {events.map((event) => (
                  <div key={event.id} className="event-card">
                    <div className="event-card-header">
                      <span className="event-date">Jan {event.date}, 2025</span>
                      <button className="event-menu-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                    <h4 className="event-title">{event.title}</h4>
                    <div className="event-time">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="time-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      7:00 AM
                    </div>
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Add the floating action button */}
        <button className="floating-action-button" onClick={() => console.log('New pickup')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PickupSchedule;
