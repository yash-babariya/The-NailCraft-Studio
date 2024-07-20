import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/logo/logo.png';
import { HiUserCircle } from "react-icons/hi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(true);
    }

    const closeNav = () => {
        setIsNavOpen(false);
    }


    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <div className='header-main'>
            <div className={`sidenav ${isNavOpen ? 'open' : ''}`}>
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <Link className="menu-item" to={"/"}>Home</Link>
                <div className='menu-item category' onClick={toggleDropdown} >Category<FaCaretDown /></div>
                <div className={`dropdown-category ${dropdownOpen ? 'open' : ''}`}>
                    <Link onClick={closeNav}>Furniture</Link>
                    <Link onClick={closeNav}>Cosmetic</Link>
                    <Link onClick={closeNav}>Electronics</Link>
                    <Link onClick={closeNav}>Clothes</Link>
                </div>
                <Link className="menu-item" to={"/shop"} onClick={closeNav}>Shop</Link>
                <Link className="menu-item" to={"/profile"} onClick={closeNav}>Profile </Link>
            </div>
            <div className="container">
                <header>
                    <Link to={"/"}>
                        <div className="logo">
                            <img loading="lazy" src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className="menu">
                        <div className="menu-items"><Link to={"/"}>Home</Link></div>
                        <div className="menu-items category">
                            <Link>Category</Link>
                            <div className="drop-down">
                                <Link>add</Link>
                                <Link>add</Link>
                                <Link>add</Link>
                                <Link>add</Link>
                                <Link>add</Link>
                            </div>
                        </div>
                        <div className="menu-items"><Link to={"/shop"}>Shop</Link></div>
                        <div className="menu-items"><Link to={"/profile"}>Profile</Link></div>
                    </div>
                    <div className="buttons">
                        <div className="login">
                            <HiUserCircle className='icon' />
                        </div>
                        <div onClick={openNav} className="menu-bar">
                            <IoMenu className='menu-icon' />
                        </div>
                    </div>
                </header>
            </div >
        </div >
    )
}
