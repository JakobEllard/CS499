import getPackingAdvice from './advice.js'
import { toMph, toFahrenheit , round} from './convert.js';
import { GEO_URL, FORECAST_URL } from './config.js';

import { delay, checkIn , checkInWithRetry } from './flight.js';

import { getCoordinates } from './weather.js';
import { compareCities } from './weather.js';

//part 1 test
//console.log(toFahrenheit(20), round(toMph(10)), getPackingAdvice(12));

//part 2
//check ins
// checkIn('Ana', 100)//always succeeds
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Check-in closed.'));

// checkIn('Ana', 0)//always fails
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Check-in closed.'));

//delay
// console.log('Gate opens');
// delay(1000)
//     .then(() => {
//         console.log('Boarding');
//         return delay(1000);
//     })
//     .then(() => {
//         console.log('Takeoff!');
//     });



//part 3
// async function runTest(chance) {
//     try {
//         await checkInWithRetry('Ana', 3, chance);
//         } 
//     catch (error) {
//         console.log(error.message);
//         } 
//     finally {
//         console.log('Check-in closed.');
//         }
// }


// await runTest(100);//succeeds
// await runTest(0);//fails

//part 4
//console.log(await getCoordinates('Evansville'));

await compareCities(['Oslo', 'Cairo', 'Lima']);