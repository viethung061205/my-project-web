import { useEffect, useState } from "react";
import "./Admin.css";

/* ================= CONSTANT ================= */

const LOCATIONS = ["paris", "tokyo", "california", "shanghai", "hongkong"];

const PARK_IMAGES = {
  paris:
    "https://framerusercontent.com/images/GRCANQ8lb09NH3ijt4GGN3pzz4c.png",
  tokyo:
    "https://i.pinimg.com/1200x/b9/de/f4/b9def46f4a7db9cb87e341baf45df05a.jpg",
  california:
    "https://i.pinimg.com/736x/a5/40/5b/a5405b9f6ff4b5e8ba26302fd9c7f02d.jpg",
  shanghai:
    "https://i.pinimg.com/1200x/c7/d1/ac/c7d1ac1c96cf8b166ad1f6db2ae91947.jpg",
  hongkong:
    "https://i.pinimg.com/736x/0b/1f/60/0b1f604a3dba6faab603b06aafabe77f.jpg"
};

const TICKET_TYPES = [
  "1-day admission ticket",
  "Couple admission tickets",
  "2-day admission ticket",
  "1 day full option"
];

/* ================= COMPONENT ================= */

const BookingManagement = () => {
  const [tickets, setTickets] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [priceUpdate, setPriceUpdate] = useState({});
  const [newTicket, setNewTicket] = useState({
    loai: "",
    gia: "",
    giabth: "",
    location: "",
    image: null
  });

  /* ================= INIT LOCAL DATA ================= */
  useEffect(() => {
    /* ---- MOCK TICKETS ---- */
    setTickets([
      {
        id: 1,
        loai: "1-day admission ticket",
        giabth: 2880000,
        image: PARK_IMAGES.paris
      },
      {
        id: 2,
        loai: "Couple admission tickets",
        giabth: 5760000,
        image: PARK_IMAGES.paris
      },
      {
        id: 3,
        loai: "2-day admission ticket",
        giabth: 3199000,
        image: PARK_IMAGES.paris
      },
      {
        id: 4,
        loai: "1 day full option",
        giabth: 3999000,
        image: PARK_IMAGES.paris
      }
    ]);

    /* ---- MOCK BOOKINGS ---- */
    setBookings([
      {
        location: "paris",
        ticketType: "1-day admission ticket",
        status: "success",
        createdAt: new Date().toISOString()
      },
      {
        location: "paris",
        ticketType: "Couple admission tickets",
        status: "success",
        createdAt: new Date().toISOString()
      },
      {
        location: "tokyo",
        ticketType: "2-day admission ticket",
        status: "fail",
        createdAt: new Date().toISOString()
      },
      {
        location: "california",
        ticketType: "1 day full option",
        status: "success",
        createdAt: new Date().toISOString()
      }
    ]);
  }, []);

  /* ================= UTIL ================= */

  const isLast24h = (time) =>
    new Date() - new Date(time) <= 24 * 60 * 60 * 1000;

  const countBooking = (loc, type) =>
    bookings.filter(
      b =>
        b.location === loc &&
        b.ticketType === type &&
        isLast24h(b.createdAt)
    ).length;

  /* ================= HANDLERS (DEMO) ================= */

  const submitPrice = () => {
    alert("Update price (demo only)");
  };

  const submitNewTicket = () => {
    alert("Add ticket (demo only)");
  };

  /* ================= PAYMENT STATUS ================= */

  const success = bookings.filter(
    b => b.status === "success" && isLast24h(b.createdAt)
  ).length;

  const fail = bookings.filter(
    b => b.status === "fail" && isLast24h(b.createdAt)
  ).length;

  /* ================= RENDER ================= */

  return (
    <div className="booking-manage">

      {/* ========== KHUNG 1: BOOKING STATISTIC ========== */}
      <section className="box">
        <h3>NUMBERS OF BOOKING IN EACH PARK</h3>

        {LOCATIONS.map(loc => (
          <div key={loc} className="park-box-horizontal">

            <img
              className="park-img"
              src={PARK_IMAGES[loc]}
              alt={loc}
            />

            <div className="park-info">
              <h4>{loc.toUpperCase()}</h4>
              <span className="sub">TOTAL IN YESTERDAY</span>

              {TICKET_TYPES.map(type => (
                <div key={type} className="row">
                  <span>{type}</span>
                  <span className="count">
                    {countBooking(loc, type)}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </section>

      {/* ========== KHUNG 2: UPDATE PRICE ========== */}
      <section className="box">
        <h3>UPDATE PRICE OF TICKET</h3>

        {tickets.map(t => (
          <div key={t.id} className="update-row">
            <img src={t.image} alt={t.loai} />

            <div className="update-info">
              <p>{t.loai}</p>

              <input
                value={t.giabth.toLocaleString() + " VND"}
                disabled
              />

              <input
                placeholder="Update price"
                onChange={e =>
                  setPriceUpdate({
                    ...priceUpdate,
                    [t.id]: Number(e.target.value)
                  })
                }
              />

              <button onClick={submitPrice}>
                DONE
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ========== KHUNG 3: UPDATE MORE TICKET ========== */}
      <section className="box">
        <h3>UPDATE MORE TICKET</h3>

        <input
          type="file"
          onChange={e =>
            setNewTicket({ ...newTicket, image: e.target.files[0] })
          }
        />

        <input
          placeholder="Name of ticket"
          onChange={e =>
            setNewTicket({ ...newTicket, loai: e.target.value })
          }
        />

        <input
          placeholder="Original price"
          onChange={e =>
            setNewTicket({ ...newTicket, giabth: e.target.value })
          }
        />

        <input
          placeholder="Update price"
          onChange={e =>
            setNewTicket({ ...newTicket, gia: e.target.value })
          }
        />

        <select
          onChange={e =>
            setNewTicket({ ...newTicket, location: e.target.value })
          }
        >
          <option value="">Select park</option>
          {LOCATIONS.map(l => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>

        <button onClick={submitNewTicket}>
          DONE
        </button>
      </section>

      {/* ========== KHUNG 4: PAYMENT STATUS ========== */}
      <section className="box status-box">
        <h3>STATUS OF PAYMENT</h3>

        <div className="status success">
          SUCCESS <strong>{success}</strong>
        </div>

        <div className="status fail">
          FAIL <strong>{fail}</strong>
        </div>
      </section>

    </div>
  );
};

export default BookingManagement;
