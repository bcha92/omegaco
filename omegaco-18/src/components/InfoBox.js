import "../stylesheets/InfoBox.scss";

export default function InfoBox({
    faicon="", title="", sub="", p=""
}) {
    return (
        <section>
            {faicon !== "" ? <div className={`fas ${faicon}`} /> : <></>}
            <div>
                {title !== "" ? <h2>{title}</h2> : <></>}
                {sub !== "" ? <p>{sub}</p> : <></>}
                {p !== "" ? <p>{p}</p> : <></>}
            </div>
        </section>
    );
}