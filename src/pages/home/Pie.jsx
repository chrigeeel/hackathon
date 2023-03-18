import React, { useEffect, useState } from "react";

const Pie = ({ value }) => {
    const [background, setBackground] = useState("transparent");

    useEffect(() => {
        const degrees = (360 * value) / 100;
        let color = "";
        if (value > 80) {
            color = "#22c55e";
        } else if (value > 60) {
            color = "#84cc16";
        } else if (value > 40) {
            color = "#facc15";
        } else if (value > 20) {
            color = "#fb923c";
        } else {
            color = "#ef4444";
        }

        setBackground(
            `conic-gradient(${color} ${degrees}deg, #393869 ${degrees}deg)`
        );
    }, [value]);

    return (
        <div
            style={{
                background,
            }}
            className="bg-green relative aspect-square w-full rounded-full
            border-2 border-light border-opacity-100"
        >
            <div
                className="absolute left-0 right-0 top-0 bottom-0 m-auto flex aspect-square 
                w-3/4 flex-col items-center justify-center rounded-full border-2 border-light
                border-opacity-100 bg-[#25244E]"
            >
                <span className="text-7xl font-black md:text-6xl lg:text-7xl">
                    {value}
                </span>
                <span className="text-sm font-semibold text-mute">/100</span>
            </div>
        </div>
    );
};

export default Pie;
