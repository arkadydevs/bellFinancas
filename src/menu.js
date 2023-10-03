/*const urlMicrosoft = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&interval=5min&apikey=3E887CSJSW1LMFS4';
    
fetch(urlMicrosoft)
    .then(response => response.json())
    .then(data => {
        const dataAtual = new Date();
        dataAtual.setDate(dataAtual.getDate());
        const ano = dataAtual.getFullYear();
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const dataDiaAnterior = `${ano}-${mes}-${dia}`;

        console.log(dataDiaAnterior);

        const timeSeries = data['Time Series (Daily)'];
        const dadosDiaAnterior = timeSeries[dataDiaAnterior];

        if (dadosDiaAnterior) {

            const closePrice = dadosDiaAnterior['4. close'];
            const volume = dadosDiaAnterior['5. volume'];

                        
            const spanValorMicrosoft = document.getElementsByName("valor-da-microsoft");
            if (spanValorMicrosoft.length > 0) {
                spanValorMicrosoft.forEach(element => {
                    element.textContent = `Valor MSFT: $${closePrice}`;
                });
            }
        } else {
            console.log(`Dados do dia anterior não encontrados para ${dataDiaAnterior}`);
        }
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
    });*/

    