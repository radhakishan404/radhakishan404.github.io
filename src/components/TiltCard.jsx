import React from "react";
import useTilt from "../hooks/useTilt";

function TiltCard({ children, className = "", as: Tag = "div", ...rest }) {
    const { ref, tiltProps } = useTilt({ max: 6, scale: 1.03 });

    return (
        <Tag ref={ref} className={className} {...tiltProps} {...rest}>
            {children}
        </Tag>
    );
}

export default TiltCard;
