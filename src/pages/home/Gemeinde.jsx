import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
    getCO2Emissionen,
    getEnergiefoerderProgramm,
    getEnergieverbrauch,
    getErneuerbareElektrizitaet,
    getSpecificGemeinde,
} from "../../api/api";
import {
    addInverseIndexToData,
    addIndexToData,
    addIndexToDataGeneral,
} from "./calculate";
import Pie from "./Pie";

function normalize_and_inversion(value, min, max) {
    return 1 - (value - min) / (max - min);
}

function normalize(value, min, max) {
    return (value - min) / (max - min);
}

const Gemeinde = ({ name }) => {
    const energieVerbrauchQuery = useQuery({
        queryKey: ["energieVerbrauch", name],
        queryFn: getEnergieverbrauch,
    });

    const erneuerbareElektrizitaetQuery = useQuery({
        queryKey: ["erneuerbareElektrizitaet", name],
        queryFn: getErneuerbareElektrizitaet,
    });

    const co2EmissionenQuery = useQuery({
        queryKey: ["co2Emissionen", name],
        queryFn: getCO2Emissionen,
    });

    const energiefoerderProgrammQuery = useQuery({
        queryKey: ["energiefoerderProgramm", name],
        queryFn: getEnergiefoerderProgramm,
    });

    const [energieVerbrauchData, setEnergieVerbrauchData] = useState(null);
    const [co2EmissionenData, setco2EmissionenData] = useState(null);
    const [erneuerbareElektrizitaetData, seterneuerbareElektrizitaetData] =
        useState(null);
    const [energiefoerderProgrammData, setEnergiefoerderProgrammData] =
        useState(null);

    const [totalIndex, setTotalIndex] = useState(0);

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
    }, [energieVerbrauchQuery.data, name]);

    useEffect(() => {
        if (!erneuerbareElektrizitaetQuery.isSuccess) {
            return;
        }

        const normalized = addIndexToData(
            erneuerbareElektrizitaetQuery.data,
            "erneuerbareElektrizitaetIndex"
        );

        const data = getSpecificGemeinde(normalized, name);
        seterneuerbareElektrizitaetData(data);
    }, [erneuerbareElektrizitaetQuery.data]);

    useEffect(() => {
        if (!co2EmissionenQuery.isSuccess) {
            return;
        }

        const normalized = addInverseIndexToData(
            co2EmissionenQuery.data,
            "co2EmissionenIndex"
        );

        const data = getSpecificGemeinde(normalized, name);
        setco2EmissionenData(data);
    }, [co2EmissionenQuery.data, name]);

    useEffect(() => {
        if (!energiefoerderProgrammQuery.isSuccess) {
            return;
        }

        const normalized = addIndexToDataGeneral(
            energiefoerderProgrammQuery.data,
            "energiefoerderProgrammIndex"
        );

        const data = getSpecificGemeinde(normalized, name);
        setEnergiefoerderProgrammData(data);
    }, [energiefoerderProgrammQuery.data, name]);

    useEffect(() => {
        if (!energieVerbrauchData) {
            return;
        }
        if (!co2EmissionenData) {
            return;
        }
        if (!erneuerbareElektrizitaetData) {
            return;
        }
        //if (!energiefoerderProgrammData) {
        //    return;
        //}

        console.log(energieVerbrauchData.fields.energieVerbrauchIndex);
        let totalIndex = 0;
        totalIndex += energieVerbrauchData.fields.energieVerbrauchIndex;

        totalIndex += co2EmissionenData.fields.co2EmissionenIndex;

        totalIndex +=
            erneuerbareElektrizitaetData.fields.erneuerbareElektrizitaetIndex;

        //totalIndex +=
        //    energiefoerderProgrammData.fields.energiefoerderProgrammIndex;

        if (totalIndex > 3) {
            totalIndex = 2.9;
        }
        if (totalIndex < 0.4) {
            totalIndex = 0.4;
        }

        console.log((totalIndex * 100) / 3);
        setTotalIndex(Math.round((totalIndex * 100) / 3));
    }, [
        energieVerbrauchData,
        co2EmissionenData,
        erneuerbareElektrizitaetData,
        //energiefoerderProgrammData,
        name,
    ]);

    return (
        <div className="mt-4">
            <Pie value={totalIndex} />
        </div>
    );
};

export default Gemeinde;
