import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { RiSearchLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);
    const [hamOpen, setHamOpen] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
            let targ = event.target;

            if (!targ.closest(".navbar__search")) {
                setSearchOpen(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className="navbar__container">
                <div className="navbar__logo">Deadsea</div>
                <ul className="navbar__links">
                    <li
                        className={`navbar__link ${
                            searchOpen && "navbar__link-search-open"
                        }`}
                    >
                        <a className="navbar__link-item" href="#">
                            Discover
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link-item" href="#">
                            Marketplace
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link-item" href="#">
                            About Us
                        </a>
                    </li>
                </ul>
                <div className="navbar__extras">
                    <motion.div
                        animate={
                            searchClicked && {
                                width: [
                                    searchOpen ? "56px" : "220px",
                                    searchOpen ? "220px" : "56px",
                                ],
                            }
                        }
                        initial={{ width: "56px" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="navbar__search"
                    >
                        <RiSearchLine
                            className="navbar__search-icon"
                            onClick={() => {
                                setSearchOpen(!searchOpen);
                                setSearchClicked(true);
                            }}
                        />

                        <motion.input
                            className={searchOpen && "navbar__search-input"}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            type="text"
                            placeholder="try adamaontina"
                        />
                    </motion.div>
                    <div className="navbar__button">Connect Wallet</div>
                    <div className="navbar__ham">
                        <span
                            onClick={() => setHamOpen(!hamOpen)}
                            className="navbar__ham-icon"
                        >
                            <HiMenuAlt3 />
                        </span>
                    </div>
                </div>
            </div>
            <div
                className={`navbar__ham-menu-container ${
                    hamOpen && "ham-open"
                }`}
            >
                <ul className="navbar__ham-menu">
                    <li className="navbar__ham-menu-item">
                        <a className="navbar__ham-menu-links" href="#">
                            Discover
                        </a>
                    </li>
                    <li className="navbar__ham-menu-item">
                        <a className="navbar__ham-menu-links" href="#">
                            Marketplace
                        </a>
                    </li>
                    <li className="navbar__ham-menu-item">
                        <a className="navbar__ham-menu-links" href="#">
                            About Us
                        </a>
                    </li>
                    <li className="navbar__ham-menu-item">
                        <a className="navbar__ham-menu-links" href="#">
                            Search
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
