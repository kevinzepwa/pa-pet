import React from 'react'
import logo from '../assets/images/Logo-2.png'
import { Link } from 'react-router-dom'

const mainNav = [
    {
        display: "Trang chu",
        path: "/"
    },
    {
        display: "San pham",
        path: "/catalog"
    },
    {
        display: "Phu kien",
        path: "/accessories"
    },
    {
        display: "Lien he",
        path: "/contact"
    }
]

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header_logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header_menu">
                    <div className="header_menu_left">
                    <div className="header_menu_mobile-toggle">
                    <i className="bx bx-menu-alt-left"></i>
                    </div>
                    {
                        mainNav.map((item, index) => (
                            <div key={index} className="header_menu_left_item">
                                <Link to={item.path}>
                                    <span>{item.display}</span>                                
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    </div>
    )
}

export default Header
