import React from "react";
import { BsHeart } from "react-icons/bs";
import "./Hero.scss";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import HapeBeast from "../../assets/hapebeast.jpg";
import Chainmask from "../../assets/chainmask.jpeg";
import profile from "../../assets/profile.jpg";
import share from "../../assets/share.svg";
const animateCard1 = {
    whileInView: {
        rotate: [10, 10, 0, -15],
        y: [0, -10, 201, 85],
        x: [0, 0, 0, 80],
        transition: {
            duration: 3,
            ease: "easeInOut",
        },
    },
};

const animateCard2 = {
    whileInView: {
        rotate: [10, 25, 0, 15],
        y: [0, -10, -50, 52],
        x: [0, 0, 0, -35],
        transition: {
            duration: 3,
            ease: "easeInOut",
        },
    },
};
const Hero = () => {
    return (
        <div className="hero__wrapper">
            <div className="hero__container">
                <motion.div
                    variants={animateCard1}
                    animate="whileInView"
                    className="hero__card-1"
                >
                    <div className="hero__card-1-tagName">
                        <span>Hapebeast</span>
                        <span>@antony_essien</span>
                    </div>
                    <div className="hero__card-1-pic">
                        <img src={HapeBeast} alt="hapebeast" />
                    </div>
                    <div className="hero__card-1-pricing">
                        <section className="hero__card-1-bid">
                            <span>20h : 12m : 12s</span>
                            <span>remaining time</span>
                        </section>
                        <section className="hero__card-1-bid">
                            <span>16.07 ETH</span>
                            <span>Highest bid</span>
                        </section>
                    </div>
                    <div className="hero__card-1-button">
                        <button>Place a bid</button>
                    </div>
                    <div className="hero__card-1-user-info">
                        <div className="hero__card-1-user-img">
                            <img src={profile} alt="" />
                        </div>
                        <div className="hero__card-1-user-likes">
                            <BsHeart />
                            <span>127.2k</span>
                        </div>
                        <div className="hero__card-1-user-shares">
                            <img src={share} alt="share" />
                            <span>50k</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={animateCard2}
                    animate="whileInView"
                    className="hero__card-2"
                >
                    <div className="hero__card-2-tagName">
                        <span>Chainmask</span>
                        <span>@lekanpraiz</span>
                    </div>
                    <div className="hero__card-2-pic">
                        <img src={Chainmask} alt="Chainmask" />
                    </div>
                    <div className="hero__card-2-pricing">
                        <section className="hero__card-2-bid">
                            <span>09h : 12m : 12s</span>
                            <span>remaining time</span>
                        </section>
                        <section className="hero__card-2-bid">
                            <span>8.12 ETH</span>
                            <span>Highest bid</span>
                        </section>
                    </div>
                    <div className="hero__card-2-button">
                        <button>Place a bid</button>
                    </div>
                    <div className="hero__card-2-user-info">
                        <div className="hero__card-2-user-img">
                            <img src={profile} alt="" />
                        </div>
                        <div className="hero__card-2-user-likes">
                            <BsHeart />
                            <span>200k</span>
                        </div>
                        <div className="hero__card-2-user-shares">
                            <img src={share} alt="share" />
                            <span>3k</span>
                        </div>
                    </div>
                </motion.div>
                <div className="hero__content">
                    <h2>
                        Discover.Collect.Sell <br />
                        rare collections of <br />
                        artwork and NFTs
                    </h2>

                    <span className="hero__content-description">
                        Deadsea is the largest digital marketplace for
                        cryptocurrency <br /> collectibles and non-fungible
                        tokens
                    </span>
                </div>
                <div className="hero__navigation">
                    <button className="hero__navigation-button">
                        Discover Artwork <BsArrowRight />
                    </button>
                    <a className="hero__navigation-link">
                        Sell Artwork <BsArrowUpRight />
                    </a>
                </div>
                <div className="hero__accessories">
                    <div className="hero__accessories-artwork">
                        <h2>33k+</h2>
                        <span>Artwork</span>
                    </div>
                    <div className="hero__accessories-artist">
                        <h2>1.7M+</h2>
                        <span>Artist</span>
                    </div>
                    <div className="hero__accessories-auction">
                        <h2>45k+</h2>
                        <span>Auction</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
