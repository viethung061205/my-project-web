import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";

function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src="https://www.coolmate.me/images/logo.png" alt="Coolmate" className="logo"/>
                </Link>
            </div>    

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
        </div>
        <div className="sales">
            <div className="marquee-text">
                NHẬP COOLNEW GIẢM 50K ĐƠN ĐẦU TIÊN TỪ 299K
            </div>
        </div>
        </>
    )
}

export default Navbar;
