export default function getPackingAdvice(tempC) {
    let advice;

    if (tempC < 5) {
        advice = "Heavy Coat";
    } else if (tempC < 20) {
        advice = "light jacket";
    } else {
        advice = "tshirt and sunscreen";
    }

    return advice;
}