import { compareCities, printReport } from './weather.js';

const cities = ['Paris', 'Tokyo', 'Cairo']; 

try {
    const ranked = await compareCities(cities);
    printReport(ranked[0]); //sorted so warmest is 0 
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Trip report complete.');
}