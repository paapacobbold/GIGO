import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import "./ChatPage.css";
import {
  Paperclip,
  Send,
  X,
  Plus,
  MoreHorizontal,
  Phone,
  Mail,
  Globe,
  ArrowLeft,
} from "lucide-react";

const ChatApp = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedContact, setSelectedContact] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, I'm having issues with my scheduling.",
      time: "8:29 pm",
      date: "Today",
      sent: false,
    },
    {
      id: 2,
      text: "GIGO customer service here. Is there anything I can help you with?",
      time: "8:29 pm",
      date: "Today",
      sent: true,
    },
    {
      id: 3,
      text: "Okay. It says the location isn't available.",
      time: "8:29 pm",
      date: "Today",
      sent: false,
    },
    {
      id: 4,
      text: "Could you specify the exact problem so that I could help you?",
      time: "Just now",
      date: "Today",
      sent: true,
    },
  ]);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setShowInfo(false); // Close info section when selecting a contact
  };

  const handleProfileClick = () => {
    setShowInfo(!showInfo); // Toggle info panel
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: messageInput,
      time: "Just now",
      date: "Today",
      sent: true,
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  const handleInfoClose = () => {
    setShowInfo(false);
  };

  // Add a class to manage visibility on mobile
  const containerClass = () => {
    let classes = "chat-container";
    if (selectedContact) classes += " show-chat";
    if (showInfo) classes += " show-info";
    return classes;
  };

  // Handle back button for mobile view
  const handleBackToContacts = () => {
    setSelectedContact(null);
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="chat"
      />

      <div className={containerClass()}>
        <MessagesSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onContactSelect={handleContactSelect}
        />

        {selectedContact ? (
          <ChatSection
            contact={selectedContact}
            messages={messages}
            setMessages={setMessages}
            messageInput={messageInput}
            setMessageInput={setMessageInput}
            onSendMessage={handleSendMessage}
            onProfileClick={handleProfileClick}
            onBack={handleBackToContacts}
          />
        ) : (
          <EmptyChat />
        )}

        {showInfo && selectedContact && (
          <InfoSection contact={selectedContact} onClose={handleInfoClose} />
        )}
      </div>
    </div>
  );
};

// Messages List Section
const MessagesSection = ({ activeTab, setActiveTab, onContactSelect }) => {
  const tabs = [
    { id: "all", label: "All", count: 2 },
    { id: "unread", label: "Unread", count: 0 },
    { id: "archive", label: "Archive", count: null },
  ];

  const contacts = [
    {
      id: 1,
      name: "Brian Griffin",
      avatar: team1,
      message: "I just completed it 😀😀",
      time: "10:48",
      date: "Today",
      unread: true,
    },
    {
      id: 2,
      name: "GIGO",
      avatar: team2,
      message: "omg! this is amazing🔥🔥🔥",
      time: "9:25",
      date: "Today",
      unread: false,
      isAdmin: true,
    },
    {
      id: 3,
      name: "Meg Griffin",
      avatar: team3,
      message: "Wow, this is really fast 😎",
      time: "Yesterday",
      date: "Yesterday",
      unread: true,
    },
    {
      id: 4,
      name: "Cleveland Brown",
      avatar: team1,
      message: "just ideas for next time 😉",
      time: "Yesterday",
      date: "Yesterday",
      unread: false,
    },
    {
      id: 5,
      name: "Neil",
      avatar: team2,
      message: "I'm on the side of the road 🤣🤣",
      time: "Jul 30, 2024",
      date: "Jul 30, 2024",
      unread: false,
    },
    {
      id: 6,
      name: "Herbert",
      avatar: team3,
      message: "perfect! 💯💯",
      time: "Jun 10, 2024",
      date: "Jun 10, 2024",
      unread: false,
    },
    {
      id: 7,
      name: "Adam West",
      avatar: team1,
      message: "I can't see you 😭",
      time: "Apr 20, 2024",
      date: "Apr 20, 2024",
      unread: false,
    },
  ];

  // Filter contacts based on active tab
  const filteredContacts = contacts.filter(contact => {
    if (activeTab === "unread") return contact.unread;
    if (activeTab === "archive") return false; // No archived contacts in this example
    return true; // "all" tab shows everything
  });

  return (
    <div className="messages-section">
      <div className="messages-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {tab.count !== null && <span className="count">{tab.count}</span>}
          </button>
        ))}
      </div>

      <div className="messages-header">
        <h2>Messages</h2>
        <button className="new-message-btn">
          <Plus size={20} />
        </button>
      </div>

      <div className="contact-list">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className={`contact-item ${contact.id === 2 ? "highlighted" : ""}`}
            onClick={() => onContactSelect(contact)}
          >
            <div className="avatar">
              <img src={contact.avatar} alt={contact.name} />
            </div>
            <div className="contact-info">
              <div className="contact-header">
                <h3>{contact.name}</h3>
                <span className="time">{contact.time}</span>
              </div>
              <p className="last-message">{contact.message}</p>
            </div>
            {contact.unread && <div className="unread-badge">2</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

// Chat Section
const ChatSection = ({
  contact,
  messages,
  setMessages,
  messageInput,
  setMessageInput,
  onSendMessage,
  onProfileClick,
  onBack,
}) => {
  const fileInputRef = React.useRef(null);
  const messagesContainerRef = React.useRef(null);

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFileAttach = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // You can handle multiple files
    files.forEach((file) => {
      // Create a message with file attachment
      const newMessage = {
        id: messages.length + 1,
        text: `Sent file: ${file.name}`,
        time: "Just now",
        date: "Today",
        sent: true,
        attachment: {
          name: file.name,
          size: file.size,
          type: file.type,
          url: URL.createObjectURL(file),
        },
      };

      // Fixed: Using setMessages function properly
      setMessages((prev) => [...prev, newMessage]);
    });

    // Clear the file input
    e.target.value = "";
  };

  // Group messages by date
  const messagesByDate = messages.reduce((groups, message) => {
    if (!groups[message.date]) {
      groups[message.date] = [];
    }
    groups[message.date].push(message);
    return groups;
  }, {});

  return (
    <div className="chat-section">
      <div className="chat-header">
        <div className="chat-title">
          <button className="back-button" onClick={onBack}>
            <ArrowLeft size={16} />
          </button>
          <div 
            className="avatar" 
            onClick={onProfileClick} 
            style={{ cursor: "pointer" }}
          >
            <img
              src={contact.avatar}
              alt={contact.name}
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          </div>
          <h2 onClick={onProfileClick} style={{ cursor: "pointer" }}>{contact.name}</h2>
        </div>
        <div className="chat-actions">
          <button className="action-btn more">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>

      <div className="messages-container" ref={messagesContainerRef}>
        {Object.entries(messagesByDate).map(([date, dateMessages]) => (
          <React.Fragment key={date}>
            <div className="date-separator">{date}</div>
            {dateMessages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sent ? "sent" : "received"}`}
              >
                <div className="message-bubble">
                  <p>{message.text}</p>
                  {message.attachment && (
                    <div className="attachment-preview">
                      {message.attachment.type.startsWith("image/") ? (
                        <img
                          src={message.attachment.url}
                          alt={message.attachment.name}
                        />
                      ) : (
                        <div className="file-attachment">
                          <Paperclip size={16} />
                          <span>{message.attachment.name}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="message-time">{message.time}</div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="message-input-container">
        <form onSubmit={onSendMessage}>
          <div className="form-inner">
            <input
              type="text"
              placeholder="Message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <div className="input-actions">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                style={{ display: "none" }}
                multiple
              />
              <button
                type="button"
                className="attach-btn"
                onClick={handleFileAttach}
              >
                <Paperclip size={18} />
              </button>
              <button type="submit" className="send-btn" disabled={!messageInput.trim()}>
                <Send size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Empty Chat State
const EmptyChat = () => {
  return (
    <div className="chat-section">
      <div className="empty-chat">
        <div className="empty-chat-content">
          <p>Select a conversation to start chatting</p>
        </div>
      </div>
    </div>
  );
};

// Info Section
const InfoSection = ({ contact, onClose }) => {
  return (
    <div className="info-section">
      <div className="info-header">
        <h2>Contact Info</h2>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <div className="info-content">
        <div className="contact-profile">
          <div className="avatar large">
            <img
              src={contact.avatar}
              alt={contact.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h3>{contact.name}</h3>
          <p className="user-role">{contact.isAdmin ? "Administrator" : "User"}</p>
        </div>

        {/* Contact details now directly under profile */}
        <div className="contact-info-list">
          <div className="info-item">
            <span className="icon">
              <Phone size={20} />
            </span>
            <p>+233 245778986</p>
          </div>
          <div className="info-item">
            <span className="icon">
              <Mail size={20} />
            </span>
            <p>info@gigo.com</p>
          </div>
          <div className="info-item">
            <span className="icon">
              <Globe size={20} />
            </span>
            <p>www.gigo.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;