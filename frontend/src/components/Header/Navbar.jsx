import './Navbar.css'
import logo  from '../../image/logo.png'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); // ניווט לנתיב הראשי
  };

  return (
    <div className="navbar">
<img
        src={logo}
        alt="Logo"
        onClick={handleLogoClick} // פונקציה שתפעל בלחיצה
        style={{ cursor: 'pointer' }} // מצביע על כך שהתמונה לחיצה
      />
          </div>
  )
}

export default Navbar
