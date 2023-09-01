import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { FaChartBar, FaRegUser, FaBars} from 'react-icons/fa6';

import { IoIosClose } from 'react-icons/io';

import './navbar.css';

import SideAbout from '../SideAbout/SideAbout';

import logo from '../../assets/maximus-logo.png';

const Menu = (props) => (
  <>
    <p><Link to="/" onClick={() => {props.setToggleMenu(false)}} >Home</Link></p>
    <p><Link to="/about" onClick={() => {props.setToggleMenu(false)}} >About</Link></p>
    <p><Link to="/gallery/page-1" onClick={() => {props.setToggleMenu(false)}} >Gallery</Link></p>
    <p><Link to="/schedule/monday" onClick={() => {props.setToggleMenu(false)}} >Schedule</Link></p>
    <p><Link to="/blog" onClick={() => {props.setToggleMenu(false)}} >Blog</Link></p>
    <p><Link to="/pricing" onClick={() => {props.setToggleMenu(false)}} >Pricing</Link></p>
    <p><Link to="/classes" onClick={() => {props.setToggleMenu(false)}} >Classes</Link></p>
    <p><Link to="/contact" onClick={() => {props.setToggleMenu(false)}} >Contact</Link></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [toggleSideAbout, setToggleSideAbout] = useState(false);

  return (
    <>
    <nav className="maximus__navbar">
      <div className="maximus__navbar-logo">
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      
      <div className="maximus__navbar-links">
        <Menu />
      </div>
      
      <div className="maximus__navbar-cta">
        <div className="maximus__navbar-cta_links">
          <FaBars size={27} onClick={() => setToggleMenu(true)} />
        </div>

        <div className="maximus__navbar-cta_sign-info">
          <Link to="/signup"><FaRegUser size={24} /></Link>
          <FaChartBar size={24} onClick={() => setToggleSideAbout(!toggleSideAbout)} />
        </div>

        <div className="maximus__navbar-cta_join">
          <Link to="/contact"><FaPlus size={36} />
            <div className="maximus__navbar-cta_join-text">
            JOIN CLASS NOW
            </div>
          </Link>
        </div>
      </div>
    </nav>

        <SideAbout className={toggleSideAbout ? "open-sideabout" : "closed-sideabout"} setToggleSideAbout={setToggleSideAbout}/>

    <div className={`maximus__navbar-mobile ${toggleMenu ? "open-menu" : "closed-menu"}`}>
      <IoIosClose color="#ff0336" size={56} onClick={() => setToggleMenu(false)} />
      <Menu setToggleMenu={setToggleMenu}/>
    </div>
    </>
  )
}

export default Navbar