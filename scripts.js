const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".choose-currency")

//Puxar o click do botão
function convertValues() {
    const inputCorrencyValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector(".value-to-convert") //Moeda pra converter
    const valueConverted  = document.querySelector(".value") //Moeda a ser convertida

    console.log(currencySelect.value)
    const dolarToday = 5.46
    const euroToday = 5.87
    const libraToday = 6.96
    const ieneToday = 0.034
    const pesoToday = 0.0060
    const yuanToday = 0.75
    const bitcoinToday = 349120.52


    // Colocar o valor convertido dolar, estiver selecionado dalor
    if(currencySelect.value == "dolar"){
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCorrencyValue / dolarToday)
    }
    
    // Colocar o valor convertido euro, estiver selecionado euro
    if(currencySelect.value == "euro"){
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCorrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCorrencyValue / libraToday)
    }

    if(currencySelect.value == "iene"){
        valueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCorrencyValue / ieneToday)
    }

    if(currencySelect.value == "peso") {
        valueConverted.innerHTML = new Intl.NumberFormat("es-AG", {
            style: "currency",
            currency: "ARS"
        }).format(inputCorrencyValue / pesoToday)
    }

    if(currencySelect.value == "yuan") {
        valueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputCorrencyValue / yuanToday)
    }

    if(currencySelect.value == "bitcoin"){
        valueConverted.innerHTML = (inputCorrencyValue / bitcoinToday).toFixed(5)
    }

    // Trocar o valor da moeda a ser conv p/valor digitado no input
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCorrencyValue)

}

//Função, todo vez que trocar a moeda a ser convertida
function changeCurrency(){
    const currencyName = document.getElementById("currency_name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar amaricano"
        currencyImg.src = "assets/img/dolar.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/img/euro.png"
    }

    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "assets/img/libra.png"
    }

    if(currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImg.src = "assets/img/ienejp.png"
    }

    if(currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso"
        currencyImg.src = "assets/img/peso.png"
    }

    if(currencySelect.value == "yuan") {
        currencyName.innerHTML = "Yuan"
        currencyImg.src = "assets/img/yuan.png"
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "assets/img/bitcoin.png"
    }

    convertValues() // depois de tracar img e nome, trocar tbm o valor da conversão.
}

//Pega o evento de mudança no segundo input de converter a moeda
currencySelect.addEventListener("change", changeCurrency)


//Pega o evento quando clicar no botão
convertButton.addEventListener("click", convertValues)