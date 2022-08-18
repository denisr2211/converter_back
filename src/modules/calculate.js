
let convert = function (distance, unitsFrom, unitsTo) {
    const UNITVALUES = require("./values.json");

    //добавить обработку ошибок
    if (!UNITVALUES.hasOwnProperty(unitsFrom)){
        throw new error('Unexpected units');
    }
    let inputMeters = distance / UNITVALUES[unitsFrom];
    let val =  inputMeters * UNITVALUES[unitsTo];

    return {unit: unitsTo, value: val.toFixed(2)};
};

module.exports = convert;