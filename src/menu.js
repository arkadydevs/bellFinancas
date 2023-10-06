/*const urlMicrosoft = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&interval=5min&apikey=VJ3VUIZPVMBRLTP5';
const urlApple = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&interval=5min&apikey=VJ3VUIZPVMBRLTP5';
const urlAmericanas = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMER3.SAO&interval=5min&apikey=VJ3VUIZPVMBRLTP5';
const urlIBM = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&interval=5min&apikey=VJ3VUIZPVMBRLTP5';
const urlMagalu ='https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MGLU3.SAO&interval=5min&apikey=VJ3VUIZPVMBRLTP5';
function carroselDados(url, nomeElemento) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dataAtual = new Date();
            dataAtual.setDate(dataAtual.getDate()-1);
            const ano = dataAtual.getFullYear();
            const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
            const dia = String(dataAtual.getDate()).padStart(2, '0');
            const dataDiaAnterior = `${ano}-${mes}-${dia}`;

            const timeSeries = data['Time Series (Daily)'];
            const dadosDiaAnterior = timeSeries[dataDiaAnterior];

            if (dadosDiaAnterior) {
                const closePrice = dadosDiaAnterior['4. close'];
                const closePriceArredondado = Number(closePrice).toFixed(2);

                const elementos = document.getElementsByName(nomeElemento);
                if (elementos.length > 0) {
                    elementos.forEach(element => {
                        element.textContent = `Valor ${nomeElemento}: R$${closePriceArredondado}`;
                    });
                }
            } else {
                console.log(`Dados do dia anterior não encontrados para ${dataDiaAnterior}`);
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

const urls = [
    { url: urlMicrosoft, nomeElemento: "valor-da-microsoft" },
    { url: urlIBM, nomeElemento: "valor-da-ibm" },
    { url: urlAmericanas, nomeElemento: "valor-da-lojasamericanas" },
    { url: urlApple, nomeElemento: "valor-da-apple" },
    { url: urlMagalu, nomeElemento: "valor-da-magazineLuiza" }
];

urls.forEach(({ url, nomeElemento }) => {
    carroselDados(url, nomeElemento); 
});
*/