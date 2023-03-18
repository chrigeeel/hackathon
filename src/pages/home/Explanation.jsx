import React from "react";
import Divider from "../../components/Divider";

const Explanation = () => {
    return (
        <div className="flex flex-col">
            <h4 className="text-2xl font-bold">Unser Nachhaltigkeitsindex</h4>
            <div className="flex flex-col font-semibold">
                <span className="text-sm">
                    Folgende Faktoren machen den Nachhaltigkeitsindex aus:
                </span>
                <div className="mt-4 flex flex-col gap-2 text-mute">
                    <span className="font-semibold">
                        1.
                        <span className="ml-4">Endenergieverbrauch</span>
                    </span>
                    <span className="font-semibold">
                        2.
                        <span className="ml-4">CO2-Emissionen</span>
                    </span>
                    <span className="font-semibold">
                        3.
                        <span className="ml-4">
                            Umgesetzte Energieförderprogramme
                        </span>
                    </span>
                    <span className="font-semibold">
                        3.
                        <span className="ml-4">
                            Erneuerbare Elektrizitätsproduktion
                        </span>
                    </span>
                </div>
            </div>
            <Divider className="my-4" />
        </div>
    );
};

export default Explanation;
