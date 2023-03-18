import React, { useState } from "react";
import Divider from "../../components/Divider";
import Explanation from "./explanation";
import Gemeinde from "./Gemeinde";
import GemeindeInput from "./GemeindeInput";

const Comparison = () => {
    const [baseGemeinde, setBaseGemeinde] = useState("Romanshorn");
    const [secondGemeinde, setSecondGemeinde] = useState("");

    return (
        <div className="mx-auto flex w-full max-w-4xl flex-col p-4">
            <h3 className="text-center text-3xl font-black">
                Nachhaltigkeitsindex der 80 Gemeinden Thurgaus
            </h3>
            
            <h4 className="text-sm mt-4 text-center font-semibold">
                Nachhaltigkeit ist wichtig, um die Umwelt und die natürlichen Ressourcen zu schützen. Nur durch gemeinsames Handeln können wir eine nachhaltige Zukunft erreichen. Wie steht deine Gemeinde im Vergleich?
            </h4>
            <Divider className="mt-4" />
            <div className="flex w-full flex-col gap-4 md:flex-row">
                <div className="mt-4 w-full pb-4 md:w-1/2">
                    <GemeindeInput
                        defaultValue={"Romanshorn"}
                        value={{
                            label: baseGemeinde,
                            value: baseGemeinde,
                        }}
                        setValue={(val) => {
                            setBaseGemeinde(val.value);
                        }}
                    />
                    <Gemeinde
                        name={baseGemeinde}
                        setGemeinde={setBaseGemeinde}
                    />
                </div>
                <div className="h-full w-0.5 bg-[#393869]"></div>
                <div className="mt-4 w-full pb-4 md:w-1/2">
                    <GemeindeInput
                        value={{
                            label: secondGemeinde,
                            value: secondGemeinde,
                        }}
                        setValue={(val) => {
                            setSecondGemeinde(val.value);
                        }}
                    />
                    <Gemeinde
                        name={secondGemeinde}
                        setGemeinde={setSecondGemeinde}
                    />
                </div>
            </div>
            <Divider className="mb-4" />
            <Explanation />
        </div>
    );
};

export default Comparison;
