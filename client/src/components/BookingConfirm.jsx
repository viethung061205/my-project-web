import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./BookingConfirm.css";

const BookingConfirm = () => {
  const { location: locationId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Nếu thiếu dữ liệu → quay về trang chủ
  if (!state || !state.customerInfo) {
    navigate("/");
    return null;
  }

  // Lấy dữ liệu từ state
  const {
    customerInfo,
    locationData,
    ticketQty,
    mealQty,
    selectedDate,
    total,
    ticketType
  } = state;

  // Xác nhận & lưu booking
  const handleConfirm = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          locationId,
          customerInfo,
          bookingDetails: {
            locationName: locationData?.name || locationId,
            ticketType,
            ticketQty,
            mealQty,
            selectedDate,
            totalPrice: total
          }
        })
      });

      if (!res.ok) {
        alert("Booking failed. Please try again.");
        return;
      }

      const data = await res.json();

      alert("Booking Successful!");
      navigate("/booking/success", {
        state: { booking: data }
      });
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="confirm-container">
      <div className="confirm-card">
        <div className="confirm-header">
          <h2>Booking Confirmation</h2>
          <p>Please verify your details before payment</p>
        </div>

        <div className="confirm-body">
          {/* CUSTOMER INFO */}
          <section className="info-section">
            <h3>
              <i className="fas fa-user"></i> Customer Information
            </h3>
            <div className="info-grid">
              <div className="info-item">
                <span>Full Name:</span>
                <strong>{customerInfo.hoten}</strong>
              </div>
              <div className="info-item">
                <span>Phone:</span>
                <strong>{customerInfo.sdt}</strong>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <strong>{customerInfo.email}</strong>
              </div>
              <div className="info-item">
                <span>Address:</span>
                <strong>{customerInfo.diachi || "N/A"}</strong>
              </div>
            </div>
          </section>

          {/* TICKET INFO */}
          <section className="ticket-section">
            <h3>
              <i className="fas fa-ticket-alt"></i> Ticket Details
            </h3>

            <div className="ticket-paper">
              <div className="ticket-main">
                <div className="ticket-row">
                  <div className="t-col">
                    <span>Destination</span>
                    <strong>{locationData?.name || locationId}</strong>
                  </div>
                  <div className="t-col">
                    <span>Date</span>
                    <strong>{selectedDate}</strong>
                  </div>
                </div>

                <div className="ticket-row">
                  <div className="t-col">
                    <span>Ticket Type</span>
                    <strong>{ticketType}</strong>
                  </div>
                  <div className="t-col">
                    <span>Quantity</span>
                    <strong>{ticketQty}</strong>
                  </div>
                </div>

                <div className="ticket-row">
                  <div className="t-col">
                    <span>Meal Voucher</span>
                    <strong>{mealQty} unit(s)</strong>
                  </div>
                </div>
              </div>

              <div className="ticket-footer">
                <span>Total Amount</span>
                <span className="total-price">
                  {total?.toLocaleString()} VND
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* ACTIONS */}
        <div className="confirm-actions">
          <button className="btn-back" onClick={() => navigate(-1)}>
            BACK
          </button>
          <button className="btn-pay" onClick={handleConfirm}>
            CONFIRM & PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirm;