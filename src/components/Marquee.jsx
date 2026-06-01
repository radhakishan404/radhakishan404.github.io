import React from "react";

function Marquee({ items = [], separator = " // ", speed = 30 }) {
    const text = items.join(separator) + separator;
    const style = { "--marquee-duration": `${speed}s` };

    return (
        <div className="marquee" style={style} aria-hidden="true">
            <div className="marquee-track">
                <span className="marquee-text">{text}</span>
                <span className="marquee-text">{text}</span>
            </div>
        </div>
    );
}

export default Marquee;
