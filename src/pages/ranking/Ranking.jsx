import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
    getCO2Emissionen,
    getEnergiefoerderProgramm,
    getEnergieverbrauch,
    getErneuerbareElektrizitaet,
} from "../../api/api";
import {
    addIndexToData,
    addIndexToDataGeneral,
    addInverseIndexToData,
} from "../home/calculate";

const Ranking = () => {
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

    const [energieVerbrauchData, setEnergieVerbrauchData] = useState(null);
    const [co2EmissionenData, setco2EmissionenData] = useState(null);
    const [erneuerbareElektrizitaetData, seterneuerbareElektrizitaetData] =
        useState(null);

    useEffect(() => {
        if (!energieVerbrauchQuery.isSuccess) {
            return;
        }

        const normalized = addIndexToData(
            energieVerbrauchQuery.data,
            "energieVerbrauchIndex"
        );

        setEnergieVerbrauchData(normalized);
    }, [energieVerbrauchQuery.data]);

    useEffect(() => {
        if (!erneuerbareElektrizitaetQuery.isSuccess) {
            return;
        }

        console.log(erneuerbareElektrizitaetQuery.data);

        const normalized = addIndexToData(
            erneuerbareElektrizitaetQuery.data,
            "erneuerbareElektrizitaetIndex"
        );
        seterneuerbareElektrizitaetData(normalized);
    }, [erneuerbareElektrizitaetQuery.data]);

    useEffect(() => {
        if (!co2EmissionenQuery.isSuccess) {
            return;
        }

        const normalized = addInverseIndexToData(
            co2EmissionenQuery.data,
            "co2EmissionenIndex"
        );
        setco2EmissionenData(normalized);
    }, [co2EmissionenQuery.data]);

    useEffect(() => {
        if (
            !co2EmissionenData ||
            !erneuerbareElektrizitaetData ||
            !energieVerbrauchData
        ) {
            return;
        }

        const map = {};
        co2EmissionenData.records.forEach((record) => {
            map[record.fields["gemeinde_name"]] = {
                co2EmissionenIndex: record.fields.co2EmissionenIndex,
            };
        });

        erneuerbareElektrizitaetData.records.forEach((record) => {
            map[record.fields["gemeinde_name"]][
                "erneuerbareElektrizitaetIndex"
            ] = record.fields.erneuerbareElektrizitaetIndex;
        });

        energieVerbrauchData.records.forEach((record) => {
            map[record.fields["gemeinde_name"]]["energieVerbrauchIndex"] =
                record.fields.energieVerbrauchIndex;
        });

        console.log(map);
    }, [co2EmissionenData, erneuerbareElektrizitaetData, energieVerbrauchData]);

    return (
        <div className="p-4">
            <h3 className="text-3xl font-bold">Ranking</h3>
        </div>
    );
};

export default Ranking;
