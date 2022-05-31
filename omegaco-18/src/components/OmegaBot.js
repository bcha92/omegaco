import "../stylesheets/OmegaBot.scss";
import OCB from "../assets/omegaco_rep.png";

export default function OmegaBot({ phrases }) {
    let text = phrases[Math.floor(Math.random() * phrases.length)];

    return (<section className="bothome">
        <div className="bubble">
            <div className="text">{text}</div>
            <div className="tip" />
        </div>
        <img
            className="ocb"
            src={OCB}
            alt="OMEGACO_BOT"
        />
    </section>);
}