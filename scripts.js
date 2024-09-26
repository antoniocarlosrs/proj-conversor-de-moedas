const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".choose-currency");

// Função para converter os valores usando a API AwesomeAPI
async function convertValues() {
    const inputCorrencyValue = document.querySelector(".input-value").value;
    const valueToConvert = document.querySelector(".value-to-convert"); // Moeda para converter
    const valueConverted = document.querySelector(".value"); // Moeda convertida

    // Consumir a API para obter os valores de câmbio atualizados
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,ARS-BRL,CNY-BRL,BTC-BRL")
        .then(response => response.json());

    // Extrair as taxas de câmbio da API
    const rates = {
        dolar: data.USDBRL.high,
        euro: data.EURBRL.high,
        libra: data.GBPBRL.high,
        iene: data.JPYBRL.high,
        peso: data.ARSBRL.high,
        yuan: data.CNYBRL.high,
        bitcoin: data.BTCBRL.high
    };

    const selectedCurrency = currencySelect.value;
    const currencyFormats = {
        dolar: { locale: "en-US", currency: "USD" },
        euro: { locale: "de-DE", currency: "EUR" },
        libra: { locale: "en-GB", currency: "GBP" },
        iene: { locale: "ja-JP", currency: "JPY" },
        peso: { locale: "es-AR", currency: "ARS" },
        yuan: { locale: "zh-CN", currency: "CNY" },
        bitcoin: { locale: "en-US", currency: "BTC" }
    };

    // Atualizar o valor convertido usando a taxa de câmbio real
    if (rates[selectedCurrency]) {
        valueConverted.innerHTML = new Intl.NumberFormat(currencyFormats[selectedCurrency].locale, {
            style: "currency",
            currency: currencyFormats[selectedCurrency].currency
        }).format(inputCorrencyValue / rates[selectedCurrency]);
    }

    // Atualizar o valor digitado no input no formato BRL
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCorrencyValue);
}

// Função para alterar a moeda selecionada e imagem
function changeCurrency() {
    const currencyName = document.getElementById("currency_name");
    const currencyImg = document.querySelector(".currency-img");

    const currencies = {
        dolar: { name: "Dólar Americano", img: "assets/img/dolar.png" },
        euro: { name: "Euro", img: "assets/img/euro.png" },
        libra: { name: "Libra", img: "assets/img/libra.png" },
        iene: { name: "Iene", img: "assets/img/ienejp.png" },
        peso: { name: "Peso", img: "assets/img/peso.png" },
        yuan: { name: "Yuan", img: "assets/img/yuan.png" },
        bitcoin: { name: "Bitcoin", img: "assets/img/bitcoin.png" }
    };

    if (currencies[currencySelect.value]) {
        currencyName.innerHTML = currencies[currencySelect.value].name;
        currencyImg.src = currencies[currencySelect.value].img;
    }

    convertValues(); // Atualizar a conversão após mudar a moeda
}

// Eventos
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);