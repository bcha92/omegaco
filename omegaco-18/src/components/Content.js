import "../stylesheets/Content.scss";

// Sub-Components
import InfoBox from "./InfoBox";

export default function Content({
    img = {}, info = []
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
        </main>
    );
}