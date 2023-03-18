import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
    getCO2Emissionen,
    getEnergiefoerderProgramm,
    getEnergieverbrauch,
    getErneuerbareElektrizitaet,
    getSpecificGemeinde,
} from "../../api/api";
import { addInverseIndexToData } from "./calculate";
import Pie from "./Pie";

function normalize_and_inversion(value, min, max) {
    return 1 - (value - min) / (max - min);
}

function normalize(value, min, max) {
    return (value - min) / (max - min);
}

const Gemeinde = ({ name }) => {
    const energieVerbrauchQuery = useQuery({
        queryKey: ["energieVerbrauch"],
        queryFn: getEnergieverbrauch,
    });

    const erneuerbareElektrizitaetQuery = useQuery({
        queryKey: ["erneuerbareElektrizitaet"],
        queryFn: getErneuerbareElektrizitaet,
    });

    const co2EmissionenQuery = useQuery({
        queryKey: ["co2Emissionen"],
        queryFn: getCO2Emissionen,
    });

    const energiefoerderProgrammQuery = useQuery({
        queryKey: ["energiefoerderProgramm"],
        queryFn: getEnergiefoerderProgramm,
    });

    const [energieVerbrauchData, setEnergieVerbrauchData] = useState({});
    const [CO2Emissionen, setCO2Emissionen] = useState({});
    const [ErneuerbareElektrizitaet, setErneuerbareElektrizitaet] = useState(
        {}
    );
    const [EnergiefoerderProgramm, setEnergiefoerderProgramm] = useState({});

    useEffect(() => {
        if (!energieVerbrauchQuery.isSuccess) {
            return;
        }

        const normalized = addInverseIndexToData(
            energieVerbrauchQuery.data,
            "energieVerbrauchIndex"
        );

        const data = getSpecificGemeinde(normalized, name);
        setEnergieVerbrauchData(data);
    }, [energieVerbrauchQuery.data]);

    useEffect(() => {
        if (!energieVerbrauchQuery.isSuccess) {
            return;
        }

        const normalized = addInverseIndexToData(
            energieVerbrauchQuery.data,
            "energieVerbrauchIndex"
        );

        const data = getSpecificGemeinde(normalized, name);
        setEnergieVerbrauchData(data);
    }, [energieVerbrauchQuery.data]);

    useEffect(() => {
        if (!energieVerbrauchQuery.isSuccess) {
            return;
        }

        const normalized = addInverseIndexToData(
            energieVerbrauchQuery.data,
            "energieVerbrauchIndex"
        );

        const data = getSpecificGemeinde(normalized, name);
        setEnergieVerbrauchData(data);
    }, [energieVerbrauchQuery.data]);

    useEffect(() => {
        if (!energieVerbrauchQuery.isSuccess) {
            return;
        }

        const normalized = addInverseIndexToData(
            energieVerbrauchQuery.data,
            "energieVerbrauchIndex"
        );

        const data = getSpecificGemeinde(normalized, name);
        setEnergieVerbrauchData(data);
    }, [energieVerbrauchQuery.data]);

    return (
        <div className="mt-4">
            <Pie value={90} />
        </div>
    );
};

export default Gemeinde;
