import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'
import logo from './logo.png'
import darkLogo from './dark-logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars , faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { ThemeContext } from '../../../Contexts/ThemeContext';

const Header = () => {
    const [open,setOpen]= useState(false);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const {handleTheme , dark} = useContext(ThemeContext);
    const location = useLocation();
    const handleSignOut=()=>{
        signOut(auth)
    }

    setTimeout(()=>document.getElementById("checkbox").checked=dark ,1)
    setTimeout(()=>document.getElementById("mobile-checkbox").checked=dark ,1)
    return (
        <div className={`header ${dark?"dark-header" : "" } `}>
        <div className='mobile-nav'>
        <label htmlFor="dashboard-drawer" className={`${location.pathname.includes("/dashboard") ? "":"hidden"}`}>
        <FontAwesomeIcon className='drawer-button lg:hidden' icon={faArrowRightToBracket}></FontAwesomeIcon>
        </label>
        {dark?
        <img onClick={()=>navigate('/home')} className='logo' src={darkLogo} alt="" />:
        <img onClick={()=>navigate('/home')} className='logo' src={logo} alt="" />
        }
        <div className='flex'>
        <FontAwesomeIcon onClick={()=>setOpen(!open)} className='bar' icon={faBars}></FontAwesomeIcon>
        <input id='mobile-checkbox' onClick={handleTheme} type="checkbox" className="toggle toggle-secondary mb-toggle" />
        </div>
      
        </div>
            <div className={`navLinks ${open?"show" : "hide"} ${dark ?"text-accent" : "text-secondary"}`}>
            <Link to='/home'>Home</Link>
            <Link to='/appointment'>Appointment</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            {
                user? <Link to='/login' onClick={handleSignOut}>Log out</Link> : <Link to='/login'>Login</Link>

            }
            </div>
            <div className='toggle-btn flex'>
            <p className={`font-bold mr-3 ${dark? "text-accent" : "text-secondary"}`}>Dark</p>
            <input onClick={handleTheme} type="checkbox" id='checkbox' className="toggle toggle-secondary"/>
            </div>
        </div>
    );
};

export default Header;