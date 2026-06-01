import React from "react";

const shapes = [
    { type: "ring", size: 80, top: "12%", left: "8%", duration: 22, delay: 0, rot: 0 },
    { type: "diamond", size: 24, top: "25%", right: "12%", duration: 19, delay: 2, rot: 45 },
    { type: "circle", size: 120, bottom: "18%", left: "5%", duration: 26, delay: 5, rot: 0 },
    { type: "ring", size: 50, top: "60%", right: "8%", duration: 20, delay: 1, rot: 0 },
    { type: "diamond", size: 18, top: "40%", left: "15%", duration: 17, delay: 3, rot: 45 },
    { type: "circle", size: 40, bottom: "30%", right: "18%", duration: 24, delay: 7, rot: 0 },
    { type: "ring", size: 35, top: "75%", left: "22%", duration: 21, delay: 4, rot: 0 },
    { type: "diamond", size: 30, top: "15%", left: "45%", duration: 23, delay: 6, rot: 45 },
];

function FloatingShapes() {
    return (
        <div className="floating-shapes" aria-hidden="true">
            {shapes.map((s, i) => {
                const style = {
                    width: s.size,
                    height: s.size,
                    top: s.top,
                    left: s.left,
                    right: s.right,
                    bottom: s.bottom,
                    "--duration": `${s.duration}s`,
                    "--delay": `${s.delay}s`,
                    "--rot": `${s.rot}deg`,
                };
                return (
                    <div
                        key={i}
                        className={`float-shape float-shape--${s.type}`}
                        style={style}
                    />
                );
            })}
        </div>
    );
}

export default FloatingShapes;
