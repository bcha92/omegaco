import "../stylesheets/Content.scss";

// Sub-Components
import InfoBox from "./InfoBox";
import RateBox from "./RateBox";

export default function Content({
    img = {}, info = [], rate = [], contact = false
}) {
    return (
        <main>
            {Object.values(img).length === 0 ? <></> :
            <img // Background Image for Content Component
                src={img.src}
                alt={img.alt}
                className={img.class}
            />}
            {info.length === 0 ? <></> : info.map(i =>
                <InfoBox
                    key={i.title}
                    faicon={i.faicon}
                    title={i.title}
                    sub={i.subtitle}
                    p={i.text}
                />
            )}
            {rate.length === 0 ? <></> : rate.map(r =>
                <RateBox
                    key={r.id}
                    title={r.title}
                    rate={r.rate}
                    text={r.text}
                />
            )}
        </main>
    );
}