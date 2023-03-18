import axios from "axios"

const ENERGIEVERBRAUCH_DATASET = "div-energie-5"
const ERNEUERBARE_ELEKTRIZITAET_DATASET = "div-energie-10"
const CO2_EMISSIONEN_DATASET = "div-energie-8"
const ENERGIEFOERDERPROGRAMM_DATASET ="div-energie-2"

export const getSpecificGemeinde = (data, name) => {
    return data.records.find((record) => {
        return record.fields["gemeinde_name"] === name
    })
}

export const getEnergieverbrauch = async () => {
    let response = await axios.get(calculateUrl(ENERGIEVERBRAUCH_DATASET))
    
    response = sortResponse(response)

    return response.data
}

export const getErneuerbareElektrizitaet = async () => {
    let response = await axios.get(calculateUrl(ERNEUERBARE_ELEKTRIZITAET_DATASET))

    response = sortResponse(response)

    return response.data
}

export const getCO2Emissionen = async () => {
    const response = await axios.get(calculateUrl(CO2_EMISSIONEN_DATASET))

    response = sortResponse(response)

    return response.data
}

export const getEnergiefoerderProgramm = async () => {
    let response = await axios.get(calculateUrl(ENERGIEFOERDERPROGRAMM_DATASET))

    response = sortResponse(response)

    return response.data
}

const sortResponse = (response) => {
    try {
        response.data.records = response.data.records.sort((a, b) => {
            if (a.fields.total < b.fields.total) {
                return 1
            }
            if (a.fields.total > b.fields.total) {
                return -1
            }
            return 0
        })
    } catch (err) {
        console.log(err)
    }

    return response
}

const calculateUrl = (dataset) => (`https://data.tg.ch/api/records/1.0/search/?rows=80&sort=total&start=0&dataset=${dataset}&timezone=Europe%2FZurich&lang=en`)