import "./TicketList.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TicketList = ({ location }) => {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
  if (!location) return;

  const getTicketsByLocation = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/ticket/${location}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch tickets");
      }

      const data = await res.json();
      setTickets(data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  getTicketsByLocation();
}, [location]);

  const handleBook = (ticket) => {
    navigate(`/booking/${location}/checkout`, {
      state: {
        ticketType: ticket.loai,
        originalPrice: ticket.giabth,
        discountedPrice: ticket.gia,
      },
    });
  };

  return (
    <div className="ticket-list">
      <h2>Available Ticket</h2>

      {tickets.map((ticket, i) => (
        <div key={i} className="ticket-card">
          <div className="ticket-left">
            <h3>{ticket.loai}</h3>
            <p>{ticket.mota}</p>
            <a href="#">More detail</a>
            <div className="label-buttons">
              <span className="label-btn">📝 Get Refund</span>
              <span className="label-btn">🎟 Available Voucher</span>
            </div>
          </div>

          <div className="ticket-right">
            <div className="price">
              <strong>{ticket.gia.toLocaleString()} VND</strong>
              <del>{ticket.giabth.toLocaleString()} VND</del>
            </div>

            <button
              className="book-ticket-btn"
              onClick={() => handleBook(ticket)}
            >
              Book ticket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
