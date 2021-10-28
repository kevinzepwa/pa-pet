import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-3.png'

const footerAboutLinks = [
    {
        display: "Ask to meet",
        path: "/about"
    },
    {
        display: "Contact",
        path: "/about"
    },
    {
        display: "Know more",
        path: "/about"
    },
    {
        display: "Get notified",
        path: "/about"
    },
    {
        display: "Shop",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Return Policy",
        path: "/about"
    },
    {
        display: "Warranty",
        path: "/about"
    },
    {
        display: "Refund",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            CUSTOMER SUPPORT
                        </div>
                        <div className="footer__content">
                            <p>
                                Contact at <strong>0712345678</strong>
                            </p>
                            <p>
                                Customer service <strong>0723456789</strong>
                            </p>
                            <p>
                                Comments <strong>0712345678</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            About Pa-Pet
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Customer care
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            We bring new joy to millions of lives, both for our clients and the pet of their choice.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
