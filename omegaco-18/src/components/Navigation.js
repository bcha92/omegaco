// import { Link } from "react-router-dom";
import "../stylesheets/Navigation.scss";
import OmegaCo_Icon from "../assets/omegaco_icon.png";
import { useState } from "react";

export default function Navigation() {
    const [ menu, setMenu ] = useState(false);

    return (
        <header className={menu ? "" : "min"}>
            <div className="logo">
                <img
                    src={OmegaCo_Icon}
                    alt="oc_icon"
                    onClick={() => {
                        setMenu(!menu)
                    }}
                    onTouchCancel={() => {setMenu(false)}}
                />
                {menu && <h1>OMEGACO</h1>}
            </div>
            {menu && <nav>
                <a href="#!">What is Omega</a>
                <a href="#!">Why buy Omega</a>
                <a href="#!">Franchising§</a>
                <a href="#!">Contact Us</a>
            </nav>}
        </header>
    );
}