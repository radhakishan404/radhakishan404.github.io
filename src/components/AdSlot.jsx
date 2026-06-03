import React, { useEffect, useRef } from "react";

function AdSlot({ slot, format = "auto", responsive = true, className = "" }) {
    const adRef = useRef(null);
    const pushed = useRef(false);

    useEffect(() => {
        if (pushed.current || !adRef.current) return;
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            pushed.current = true;
        } catch (_) { /* AdSense not loaded or blocked */ }
    }, []);

    return (
        <div className={`ad-slot-wrap ${className}`}>
            <ins
                className="adsbygoogle"
                ref={adRef}
                style={{ display: "block" }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive ? "true" : "false"}
            />
        </div>
    );
}

export default AdSlot;
