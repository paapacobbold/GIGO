import Sidebar from "../../components/sidebar/sidebar";
import TopBar from "../../components/TopBar/TopBar";
import { useState } from "react";
import "./PaymentPage.css";

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(0);

  const savedCards = [
    {
      id: 1,
      type: "Finaci",
      number: "•••• •••• •••• 2345",
      name: "Manon Nanzoor",
      expiry: "02/30",
      color: "green",
    },
    {
      id: 2,
      type: "Finaci",
      number: "•••• •••• •••• 2345",
      name: "Manon Nanzoor",
      expiry: "02/30",
      color: "blue",
    },
  ];

  const toggleNewCardForm = () => {
    setShowNewCardForm(!showNewCardForm);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activePage="payment"
      />
      <TopBar />
      <div className="main-content">
        <div className="payment-container">
          <div className="payment-methods">
            <h2>Select Payment Method</h2>

            <div className="payment-option">
              <label className="radio-container">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "card"}
                  onChange={() => setSelectedMethod("card")}
                />
                <span className="radio-checkmark"></span>
                <div className="payment-icon card-icon"></div>
                <span>Credit / Debit Card</span>
              </label>
            </div>

            {selectedMethod === "card" && (
              <div className="card-section">
                <p className="section-title">Saved Cards</p>

                <div className="saved-cards">
                  {savedCards.map((card, index) => (
                    <div
                      key={card.id}
                      className={`saved-card ${card.color} ${
                        selectedCard === index ? "selected" : ""
                      }`}
                      onClick={() => setSelectedCard(index)}
                    >
                      <div className="card-header">
                        <span className="card-type">{card.type}</span>
                        <div className="card-chip"></div>
                      </div>
                      <div className="card-number">{card.number}</div>
                      <div className="card-footer">
                        <div className="card-holder">
                          <small>Card holder name</small>
                          <p>{card.name}</p>
                        </div>
                        <div className="card-expiry">
                          <small>Expiry Date</small>
                          <p>{card.expiry}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="add-card-section">
                  <div className="add-card-header" onClick={toggleNewCardForm}>
                    <span>Add New Card</span>
                    <span
                      className={`arrow ${showNewCardForm ? "up" : "down"}`}
                    ></span>
                  </div>

                  {showNewCardForm && (
                    <div className="card-form">
                      <div className="form-group">
                        <label>Card Name</label>
                        <input type="text" placeholder="Manon Nanzoor" />
                      </div>

                      <div className="form-group">
                        <label>Card Number</label>
                        <input type="text" placeholder="1908 3467 2238 2345" />
                      </div>

                      <div className="form-row">
                        <div className="form-group half">
                          <label>Expiry Date</label>
                          <div className="date-input">
                            <input type="text" placeholder="11/11/27" />
                            <span className="calendar-icon"></span>
                          </div>
                        </div>
                        <div className="form-group half">
                          <label>CVV</label>
                          <input type="text" placeholder="783" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="payment-option">
              <label className="radio-container">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "paypal"}
                  onChange={() => setSelectedMethod("paypal")}
                />
                <span className="radio-checkmark"></span>
                <div className="payment-icon paypal-icon"></div>
                <span>PayPal</span>
              </label>
            </div>

            <div className="payment-option">
              <label className="radio-container">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "google"}
                  onChange={() => setSelectedMethod("google")}
                />
                <span className="radio-checkmark"></span>
                <div className="payment-icon google-icon"></div>
                <span>Google Pay</span>
              </label>
            </div>

            <div className="payment-option">
              <label className="radio-container">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedMethod === "apple"}
                  onChange={() => setSelectedMethod("apple")}
                />
                <span className="radio-checkmark"></span>
                <div className="payment-icon apple-icon"></div>
                <span>Apple Pay</span>
              </label>
            </div>
          </div>

          <div className="payment-summary">
            <div className="summary-section">
              <h3>Total Payment</h3>
              <div className="total-amount">GH₵ 255.00</div>
            </div>

            <div className="summary-details">
              <div className="summary-row">
                <span>Type</span>
                <div className="dotted-line"></div>
                <span>Plastic</span>
              </div>

              <div className="summary-row">
                <span>Location</span>
                <div className="dotted-line"></div>
                <span>Unity Hall</span>
              </div>

              <div className="summary-row">
                <span>Quantity</span>
                <div className="dotted-line"></div>
                <span>15Kg</span>
              </div>

              <div className="summary-row">
                <span>Amount</span>
                <div className="dotted-line"></div>
                <span>₵250.00</span>
              </div>

              <div className="summary-row">
                <span>Booking fee</span>
                <div className="dotted-line"></div>
                <span>₵5.00</span>
              </div>
            </div>

            <div className="appointment-details">
              <div className="day">MONDAY</div>
              <div className="date">January 27, 2025 | 11:30 AM</div>
            </div>

            <button className="pay-button">PAY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
