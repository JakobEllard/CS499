export function delay(ms) {

    return new Promise((resolve) => {
        setTimeout(resolve, ms);
        });

}

export function checkIn(name, successChance) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() * 100 < successChance) {
                resolve(`${name} is checked in.`);
                } 
            else {
                reject('Check-in failed: server busy.');
                }
            }, 1000);
        });
}

//part 3
export async function checkInWithRetry(name, maxTries, chance) {
    for (let i = 1; i <= maxTries; i++) {
        try {
            const message = await checkIn(name, chance);
            console.log(message);
            return;
        } catch (error) {
            console.log(`Try ${i} failed: ${error}`);
            await delay(500);
        }
    }

    throw new Error(`Could not check in ${name} after ${maxTries} tries`);
}