import { useEffect } from "react";
import "../stylesheets/OmegaBot.scss";
import OCB from "../assets/omegaco_rep.png";

export default function OmegaBot({ phrases, index, setIndex }) {

    useEffect(() => {
        setTimeout(() => {
            setIndex(index + 1);
            if (index >= phrases.length - 1) {
                setIndex(0);
            }
        }, 8000)
    }, [index, setIndex, phrases])

    return (<section className="bothome">
        <div className="bubble">
            <div className="text">
                <p>{phrases[index]}</p>
            </div>
            <div className="tip" />
        </div>
        <img
            className="ocb"
            src={OCB}
            alt="OMEGACO_BOT"
        />
    </section>);
}