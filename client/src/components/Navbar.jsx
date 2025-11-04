import { Link ,useNavigate} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import "./Navbar.css";
function Navbar(){
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : "guest"; // fallback nếu chưa đăng nhập

<<<<<<< HEAD
   
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // quay về trang đăng nhập
  };
    return (
    <>
      <div className="navbar">
        {/* Bên trái */}
        <div className="navbar-left">
          <Link to="/">
            <img
              src="https://www.coolmate.me/images/logo.png"
              alt="Coolmate"
              className="logo"
            />
          </Link>
=======
            <div className="navbar-links">
                <Link to="/products/man">NAM</Link>
                <Link to="/products/woman">NỮ</Link>
                <Link to="/products">THỂ THAO</Link>
            </div>
            
            <div className="navbar-right">
                <div className="search-box">
                    <input type="text" placeholder="Tìm kiếm..." /> 
                    <FaSearch size={20} color="gray" className="search-icon"/>
                </div>
                <Link to="/login"><GoPersonFill size={25} /></Link>
                <Link to="/cart"><FaShoppingCart size={25} /></Link>
            </div>
>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f
        </div>

        {/* Các link chính */}
        <div className="navbar-links">
          <Link to={`/home/${userId}/products`}>NAM</Link>
          <Link to={`/home/${userId}/products`}>NỮ</Link>
          <Link to={`/home/${userId}/products`}>THỂ THAO</Link>
        </div>

        {/* Bên phải */}
        <div className="navbar-right">
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm..." />
            <FaSearch size={20} color="gray" className="search-icon" />
          </div>

          {/* 🔹 Nếu chưa đăng nhập */}
          {!user && (
            <Link to="/login">
              <GoPersonFill size={25} />
            </Link>
          )}

          {/* 🔹 Nếu đã đăng nhập */}
          {user && (
            <div className="user-info">
              <span className="welcome-text">Xin chào, {user.username}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Đăng xuất
              </button>
            </div>
          )}

          <Link to="/cart">
            <FaShoppingCart size={25} />
          </Link>
        </div>
      </div>

      {/* Dòng chữ khuyến mãi */}
      <div className="sales">
        <div className="marquee-text">
          NHẬP COOLNEW GIẢM 50K ĐƠN ĐẦU TIÊN TỪ 299K
        </div>
      </div>
    </>
  );
}

export default Navbar;
