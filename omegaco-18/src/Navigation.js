import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./stylesheets/Navigation.scss";
import OmegaCo_Icon from "./assets/omegaco_icon.png";

export default function Navigation() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            {menu && <div className="nav-bg" onClick={() => setMenu(false)} />}
            <header className={menu ? "" : "min"}>
                <div className="logo">
                    <img
                        src={OmegaCo_Icon}
                        alt="oc_icon"
                        onClick={() => {
                            setMenu(!menu)
                        }}
                    />
                    <Link to="/">
                        <h1>OMEGACO</h1>
                    </Link>
                </div>
                <nav>
                    <Link to="what">What is Omega</Link>
                    <Link to="why">Why buy Omega</Link>
                    <Link to="rates">Pricing and Rates §</Link>
                    <Link to="contact">Contact Us</Link>
                </nav>
            </header>
        </>
    );
}