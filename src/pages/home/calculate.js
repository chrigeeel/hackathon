function normalize_and_inversion(value, min, max) {
    return 1 - (value - min) / (max - min);
}

function normalize(value, min, max) {
    return (value - min) / (max - min);
}

export const addIndexToData = (data, indexName) => {
    const newData = {...data}

    const lowest_total =
    newData.records[79].fields["totalPerKopf"];
    const highest_total =
    newData.records[0].fields["totalPerKopf"];


    console.log(highest_total, lowest_total)
       
    newData.records = newData.records.map((record) => {
        const index = normalize(
            record.fields["totalPerKopf"],
            lowest_total,
            highest_total
        )
        record.fields[indexName] = index

        return record
    })

    return newData
}

export const addIndexToDataGeneral = (data, indexName) => {
    const newData = {...data}

    const lowest_total =
    newData.records[79].fields["total"];
    const highest_total =
    newData.records[0].fields["total"];
       
    newData.records = newData.records.map((record) => {
        const index = normalize(
            record.fields["total"],
            lowest_total,
            highest_total
        )
        record.fields[indexName] = index

        return record
    })

    return newData
}


export const addInverseIndexToData = (data, indexName) => {
    const newData = {...data}
    
    const lowest_total =
            newData.records[79].fields["totalPerKopf"];
    const highest_total =
            newData.records[0].fields["totalPerKopf"];
       
    newData.records = newData.records.map((record) => {
        const index = normalize_and_inversion(
            record.fields["totalPerKopf"],
            lowest_total,
            highest_total
        )
        record.fields[indexName] = index

        return record
    })

    return newData
}