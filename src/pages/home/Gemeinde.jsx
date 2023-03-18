import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getEnergieverbrauch, getSpecificGemeinde } from "../../api/api";
import Pie from "./Pie";

const Gemeinde = ({ name }) => {
    const energieVerbrauchQuery = useQuery({
        queryKey: ["energieVerbrauch"],
        queryFn: getEnergieverbrauch,
    });

    const [energieVerbrauchData, setEnergieVerbrauchData] = useState(0);

    useEffect(() => {
        if (!energieVerbrauchQuery.isSuccess) {
            return;
        }

        console.log(energieVerbrauchQuery.data);

        const data = getSpecificGemeinde(energieVerbrauchQuery.data, name);
        console.log(data);

        setEnergieVerbrauchData(data);
    }, [energieVerbrauchQuery.data]);

    return (
        <div className="mt-4">
            <Pie value={90} />
        </div>
    );
};

export default Gemeinde;
