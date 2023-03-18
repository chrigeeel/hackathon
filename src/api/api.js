import axios from "axios"

const ENERGIEVERBRAUCH_DATASET = "div-energie-5"
const ERNEUERBARE_ELEKTRIZITAET_DATASET = "div-energie-10"
const CO2_EMISSIONEN_DATASET = "div-energie-8"
const ENERGIEFOERDERPROGRAMM_DATASET ="div-energie-2"

export const getEnergieverbrauch = async () => {
    const response = await axios.get(calculateUrl(ENERGIEVERBRAUCH_DATASET))

    return response.data
}

export const getErneuerbareElektrizitaet = async () => {
    const response = await axios.get(calculateUrl(ERNEUERBARE_ELEKTRIZITAET_DATASET))

    return response.data
}

export const getCO2Emissionen = async () => {
    const response = await axios.get(calculateUrl(CO2_EMISSIONEN_DATASET))

    return response.data
}

export const getEnergiefoerderProgramm = async () => {
    const response = await axios.get(calculateUrl(ENERGIEFOERDERPROGRAMM_DATASET))

    return response.data
}
const calculateUrl = (dataset) => (`https://data.tg.ch/api/records/1.0/search/?rows=1000&sort=total&start=0&${dataset}&timezone=Europe%2FZurich&lang=en`)