import React from "react";
import Divider from "../../components/Divider";
import Gemeinde from "./Gemeinde";
import GemeindeInput from "./GemeindeInput";

const Comparison = () => {
    return (
        <div className="mx-auto flex w-full max-w-4xl flex-col p-4">
            <h3 className="text-center text-3xl font-black">
                Nachhaltigkeitsindex der 80 Gemeinden Thurgaus
            </h3>
            <Divider className="mt-4" />
            <div className="flex w-full flex-col gap-4 md:flex-row">
                <div className="mt-4 w-full md:w-1/2">
                    <GemeindeInput />
                    <Gemeinde name="Romanshorn" />
                </div>
                <div className="h-full w-0.5 bg-[#393869]"></div>
                <div className="mt-4 w-full md:w-1/2">
                    <GemeindeInput />
                    <Gemeinde name="Romanshorn" />
                </div>
            </div>
        </div>
    );
};

export default Comparison;
