const poundsInput = document.getElementById('poundsInput');
const kilogramsInput = document.getElementById('kilogramsInput');
const ouncesInput = document.getElementById('ouncesInput');
const gramsInput = document.getElementById('gramsInput');
const stonesInput = document.getElementById('stonesInput');

poundsInput.addEventListener('input', convertFromPounds);
kilogramsInput.addEventListener('input', convertFromKilograms);
ouncesInput.addEventListener('input', convertFromOunces);
gramsInput.addEventListener('input', convertFromGrams);
stonesInput.addEventListener('input', convertFromStones);

function convertFromPounds() {
    const pounds = parseFloat(poundsInput.value);
    if (isNaN(pounds)) {
        kilogramsInput.value = '';
        ouncesInput.value = '';
        gramsInput.value = '';
        stonesInput.value = '';
        return;
    }

    kilogramsInput.value = (pounds * 0.453592).toFixed(2);
    ouncesInput.value = (pounds * 16).toFixed(2);
    gramsInput.value = (pounds * 453.592).toFixed(2);
    stonesInput.value = (pounds / 14).toFixed(2);
}

function convertFromKilograms() {
    const kilograms = parseFloat(kilogramsInput.value);
    if (isNaN(kilograms)) {
        poundsInput.value = '';
        ouncesInput.value = '';
        gramsInput.value = '';
        stonesInput.value = '';
        return;
    }

    poundsInput.value = (kilograms * 2.20462).toFixed(2);
    ouncesInput.value = (kilograms * 35.274).toFixed(2);
    gramsInput.value = (kilograms * 1000).toFixed(2);
    stonesInput.value = (kilograms * 0.157473).toFixed(2);
}

function convertFromOunces() {
    const ounces = parseFloat(ouncesInput.value);
    if (isNaN(ounces)) {
        poundsInput.value = '';
        kilogramsInput.value = '';
        gramsInput.value = '';
        stonesInput.value = '';
        return;
    }

    poundsInput.value = (ounces / 16).toFixed(2);
    kilogramsInput.value = (ounces / 35.274).toFixed(2);
    gramsInput.value = (ounces * 28.3495).toFixed(2);
    stonesInput.value = (ounces / 224).toFixed(2);
}

function convertFromGrams() {
    const grams = parseFloat(gramsInput.value);
    if (isNaN(grams)) {
        poundsInput.value = '';
        kilogramsInput.value = '';
        ouncesInput.value = '';
        stonesInput.value = '';
        return;
    }

    poundsInput.value = (grams / 453.592).toFixed(2);
    kilogramsInput.value = (grams / 1000).toFixed
}