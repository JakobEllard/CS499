import { toMph, toFahrenheit, round } from './convert.js';
import { GEO_URL, FORECAST_URL } from './config.js';
import getPackingAdvice from './advice.js'


export async function getCoordinates(city) {
    const response = await fetch(`${GEO_URL}?name=${city}&count=1`);
    if (!response.ok) {
        throw new Error(`request failed: ${response.status}`);
    }

    const data = await response.json();
    if (!data.results) {
        throw new Error(`city not found: ${city}`);
    }

    const { name, country, latitude, longitude } = data.results[0];
    return { name, country, latitude, longitude };
}

export async function getTripReport(city) {
    
        const coords = await getCoordinates(city)
    
        const response = await fetch(`${FORECAST_URL}?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);
        if (!response.ok) {
            throw new Error(`request failed: ${response.status}`);
         }
        const data = await response.json();
    

        return {
    city: coords.name,
    country: coords.country,
    tempC: data.current.temperature_2m,
    windKmh: data.current.wind_speed_10m,
    maxC: data.daily.temperature_2m_max[0],
    minC: data.daily.temperature_2m_min[0], 
        }
}

export function printReport(report) {
    const { city, country, tempC, windKmh, maxC, minC } = report;

    const tempF = toFahrenheit(tempC);
    const windMph = toMph(windKmh);
    const advice = getPackingAdvice(tempC);

    const place = city + ", " + country;
    const temps = tempC.toFixed(1) + "°C (" + tempF.toFixed(1) + "°F)";
    const wind = "Wind " + windKmh.toFixed(1) + " km/h (" + windMph.toFixed(1) + " mph)";
    const range = "Today: " + Math.round(minC) + "–" + Math.round(maxC) + "°C";

    console.log(place + " | " + temps + " | " + wind + " | " + range + " | " + advice); //had a ginormous string before this
}

export async function compareCities(cities) {
    
    const reports = await Promise.all(cities.map((city) => getTripReport(city)));

    
    reports.sort((a, b) => b.tempC - a.tempC);

    reports.forEach((report, i) => {
        console.log(`${i + 1}. ${report.city} ${report.tempC.toFixed(1)}°C`);
    });

    return reports;
}