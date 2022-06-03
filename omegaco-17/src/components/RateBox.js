import "../stylesheets/RateBox.scss";

export default function RateBox({
    title = "", rate = "", text = []
}) {
    return (
        <div className="rate">
            <div className="title">
                <h3>{title === "" ? "" : title}</h3>
            </div>
            <div>
                {rate !== "" ?
                <h2>from §{rate}/hr</h2> : <></>}
                {text.map((t, i) => <p key={`para-${i}`}>{
                    t.split(" ").map(word => word === "§40/hr)" ?
                    <span key={`double-${i}`}><span className="double">§40/hr</span>) </span> :
                    word === "GOLD" ? <b key={`gold-${i}`} className="gold">GOLD </b> : `${word} `)
                }</p>)}
                <button className="select">SELECT</button>
            </div>
        </div>
    );
}