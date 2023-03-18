import React from "react";

const Legend = () => {
    return (
        <div
            className="flex w-full flex-col gap-0.5 rounded-lg bg-light
        shadow-xl"
        >
            <div
                className="flex h-12 w-full items-center rounded-t-lg
                bg-green-600 px-3 py-2"
            >
                <span className="text-2xl font-black text-light shadow-black drop-shadow-lg">
                    A
                </span>
                <span className="mt-0.5 ml-2 text-lg font-bold shadow-black drop-shadow-xl">
                    Ausgezeichnet
                </span>
            </div>
            <div
                className="flex h-12 w-full items-center
                bg-lime-500 px-3 py-2"
            >
                <span className="text-2xl font-black text-light">B</span>
                <span className="drop-shadow-xls mt-0.5 ml-2 text-lg font-bold shadow-black">
                    Gut
                </span>
            </div>
            <div
                className="flex h-12 w-full items-center
                bg-yellow-400 px-3 py-2"
            >
                <span className="text-2xl font-black text-light shadow-black drop-shadow-lg">
                    C
                </span>
                <span className="mt-0.5 ml-2 text-lg font-bold shadow-black drop-shadow-xl">
                    Durchschnittlich
                </span>
            </div>
            <div
                className="flex h-12 w-full items-center
                bg-orange-500 px-3 py-2"
            >
                <span className="text-2xl font-black text-light shadow-black drop-shadow-lg">
                    D
                </span>
                <span className="mt-0.5 ml-2 text-lg font-bold shadow-black drop-shadow-xl">
                    Ungenügend
                </span>
            </div>
            <div
                className="flex h-12 w-full items-center
                rounded-b-lg bg-red-500 px-3 py-2"
            >
                <span className="text-2xl font-black text-light shadow-black drop-shadow-lg">
                    E
                </span>
                <span className="mt-0.5 ml-2 text-lg font-bold shadow-black drop-shadow-xl">
                    Schlecht
                </span>
            </div>
        </div>
    );
};

export default Legend;
