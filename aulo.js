
const converterbutton = document.querySelector(".convert-btn");
const currencySelect = document.querySelector(".currency-select");


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value;
    const currencyValeuToconvert = document.querySelector(".currency-value-to-convert");
    const currencyValeu = document.querySelector(".currency-value");

    const DolarToday = 1150;
    const EuroToday = 1300;
    const BRLToday = 0.0056;
    const CDFToday = 2.48;
    const RUBToday = 14.4;

    console.log(currencySelect.value);

    /*  currencyValeuToconvert.innerHTML=inputCurrencyValue; */
    /* currencyValeu.innerHTML=convertedValue; */

    currencyValeuToconvert.innerHTML = new Intl.NumberFormat("pt-AO", {
        style: "currency",
        currency: "AOA"
    }).format(inputCurrencyValue);

    if (currencySelect.value == "USDT") {
        currencyValeu.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarToday);
    }
    if (currencySelect.value == "Dolar") {
        currencyValeu.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarToday);
    }
    if (currencySelect.value == "Euro") {
        currencyValeu.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroToday);
    }
    if (currencySelect.value == "BRL") {
        currencyValeu.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * BRLToday);
    }
    if (currencySelect.value == "CDF") {
        currencyValeu.innerHTML = new Intl.NumberFormat("fr-CD", {
            style: "currency",
            currency: "CDF"
        }).format(inputCurrencyValue * CDFToday);
    }
    if (currencySelect.value == "Rubre") {
        currencyValeu.innerHTML = new Intl.NumberFormat("ru-Ru", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrencyValue / RUBToday);
    }

    /* console.log(convertedValue); */
}
function changeCurency() {
    const descriptionName = document.getElementById("currency-name");
    const descriptionImage = document.getElementById("currency-img");

    if (currencySelect.value == "USDT") {
        descriptionName.innerHTML = "USDT";
        descriptionImage.src = "./imagens/usdt.png";
    }
    if (currencySelect.value == "Dolar") {
        descriptionName.innerHTML = "Dólar Americano";
        descriptionImage.src = "./imagens/bandeira.png";
    }
    if (currencySelect.value == "Euro") {
        descriptionName.innerHTML = "Euro";
        descriptionImage.src = "./imagens/redondo.png";
    }
    if (currencySelect.value == "BRL") {
        descriptionName.innerHTML = "Reias Brasileiro";
        descriptionImage.src = "./imagens/brasilia.png";
    }
    if (currencySelect.value == "CDF") {
        descriptionName.innerHTML = "Franco Congolês";
        descriptionImage.src = "./imagens/RDC.png";
    }
    if (currencySelect.value == "Rubre") {
        descriptionName.innerHTML = "Rubro Russo";
        descriptionImage.src = "./imagens/russia.png"
    }
    convertValues()
}


converterbutton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurency);