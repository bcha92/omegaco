import "../stylesheets/Navigation.scss";
import OmegaCo_Icon from "../assets/omegaco_icon.png";

export default function Navigation() {
    return (
        <header>
            <div className="logo">
                <img
                    src={OmegaCo_Icon}
                    alt="oc_icon"
                    width="50px"
                />
                <h1>OMEGACO</h1>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                </ul>
            </nav>
        </header>
    );
}