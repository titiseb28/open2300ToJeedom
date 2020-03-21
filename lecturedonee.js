const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser({ attrkey: "ATTR" });

// this example reads the file synchronously
// you can read it asynchronously also
let xml_string = fs.readFileSync("currentxml.xml", "utf8");

parser.parseString(xml_string, function (error, result) {
    if (error === null) {

        let temperatureOut = result.ws2300.Temperature[0].Outdoor[0].Value[0]
        let humidityOut = result.ws2300.Humidity[0].Outdoor[0].Value[0]
        let dewPoinnt = result.ws2300.Dewpoint[0].Value[0]
        let windChill = result.ws2300.Windchill[0].Value[0]
        let pressure = result.ws2300.Pressure[0].Value[0]
        let rainOneHour = result.ws2300.Rain[0].OneHour[0].Value[0]
        let rainTwntyFourHour = result.ws2300.Rain[0].TwentyFourHour[0].Value[0]
        let windDirection = windDirectionF(result.ws2300.Wind[0].Direction[0].Text[0])
        let windValue = result.ws2300.Wind[0].Value[0]
        let pressureTendency = pressionF(result.ws2300.Pressure[0].Tendency[0])
        let forecast = forecastF(result.ws2300.Forecast[0])

    }
    else {
        console.log(error);
    }
});

function forecastF(current) {
    if (current == "Sunny") {
        return "Ensoleillé"
    } else if (current == "Cloudy") {
        return "Nuageux"
    } else {
        return "Pluvieux"
    }
}

function pressionF(current) {
    if (current == "Rising") {
        return "En hausse"
    } else {
        return "En Chute"
    }
}

function windDirectionF(current) {
    switch (current) {
        case "N":
            return "Nord"
        case "NNE":
            return "Nord-nord-est"
        case "NE":
            return "Nord-est"
        case "ENE":
            return "Est-nord-est"
        case "E":
            return "Est"
        case "ESE":
            return "Est-sud-est"
        case "SE":
            return "Sud-est"
        case "SSE":
            return "Sud-sud-est"
        case "S":
            return "Sud"
        case "SSW":
            return "Sud-sud-ouest"
        case "SW":
            return "Sud-ouest"
        case "WSW":
            return "Ouest-sud-ouest"
        case "W":
            return "Ouest"
        case "WNW":
            return "Ouest-nord-ouest"
        case "NW":
            return "Nord-ouest"
        case "NNW":
            return "Nord-nord-ouest"
    }
}

// type de prevision:
// Ensoleillé, nuageux et pluvieux

// Sunny , Cloudy , Rainy

// pression tendence

// Rising , Falling

// En hausse, En Chute

// Abreviation Direction du vent Degres 
// N Nord 0
// NNE nord-nord-est 22.5 
// NE nord-est 45
// ENE est-nord-est 67.5 
// E est 90 
// ESE est-sud-est 112.5 
// SE sud-est 135 
// SSE sud-sud-est 157.5 
// S sud 180 
// SSW sud-sud-ouest 202.5 
// SW sud-ouest 225 
// WSW ouest-sud-ouest 247.5 
// W ouest 270 
// WNW ouest-nord-ouest 292.5 
// NW nord-ouest 315
// NNW 	nord-nord-ouest 	337.5