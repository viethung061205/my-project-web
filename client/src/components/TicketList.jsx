import "./TicketList.css"; 
import { useNavigate } from "react-router-dom";

const tickets = [ 
  {
    type: "1-day admission ticket",
    description: "Enjoy a discount of 500.000 VND/person when booking tickets for groups of 4-6 people",
    price: "2.600.000 VND",
    original: "2.880.000 VND"
  },
  {
    type: "Couple admission tickets",
    description: "Includes meal voucher. 100,000 VND discount/person when buying additional meal vouchers",
    price: "5.000.000 VND",
    original: "5.760.000 VND"
  },
  {
    type: "2-day admission ticket",
    description: "Enjoy a discount of 500.000 VND/person when booking tickets for groups of 4-6 people",
    price: "4.800.000 VND",
    original: "5.760.000 VND"
  },
  {
    type: "1 day full option",
    description: "Includes meal voucher. Enjoy a discount of 100.000 VND/person when booking tickets for 2 people",
    price: "2.899.000 VND",
    original: "3.199.000 VND"
  }
];

const TicketList = ({ location }) => { 
  const navigate = useNavigate();

const handleBook = (ticket) => {
  navigate(`/booking/${location}/checkout`, {
    state: {
      ticketType: ticket.type,
      originalPrice: ticket.original,
      discountedPrice: ticket.price,
    },
  });
};

  return (
    <div className="ticket-list">
      <h2>Available Ticket</h2>
      {tickets.map((ticket, i) => (
        <div key={i} className="ticket-card">
          <div className="ticket-left">
            <h3>{ticket.type}</h3>
            <p>{ticket.description}</p>
            <a href="#">More detail</a>
            <div className="label-buttons">
              <span className="label-btn">📝 Get Refund</span>
              <span className="label-btn">🎟 Available Voucher</span>
            </div>
          </div>
          <div className="ticket-right">
            <div className="price">
              <strong>{ticket.price}</strong>
              <del>{ticket.original}</del>
            </div>
            <button className="book-ticket-btn" onClick={() => handleBook(ticket)}>
              Book ticket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
