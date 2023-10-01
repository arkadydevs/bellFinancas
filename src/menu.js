const urlMicrosoft = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&interval=5min&apikey=3E887CSJSW1LMFS4';

fetch(urlMicrosoft)
    .then(response => response.json())
    .then(data => {
        const dataAtual = new Date();
        dataAtual.setDate(dataAtual.getDate() - 2);
        const ano = dataAtual.getFullYear();
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const dataDiaAnterior = `${ano}-${mes}-${dia}`;

        console.log(dataDiaAnterior);

        const timeSeries = data['Time Series (Daily)'];
        const dadosDiaAnterior = timeSeries[dataDiaAnterior];

        if (dadosDiaAnterior) {
            const openPrice = dadosDiaAnterior['1. open'];
            const highPrice = dadosDiaAnterior['2. high'];
            const lowPrice = dadosDiaAnterior['3. low'];
            const closePrice = dadosDiaAnterior['4. close'];
            const volume = dadosDiaAnterior['5. volume'];

            console.log(`Dados do dia anterior (data: ${dataDiaAnterior}):`);
            console.log(`Preço de Abertura: ${openPrice}`);
            console.log(`Preço Máximo: ${highPrice}`);
            console.log(`Preço Mínimo: ${lowPrice}`);
            console.log(`Preço de Fechamento: ${closePrice}`);
            console.log(`Volume: ${volume}`);

            // Aqui você pode fazer qualquer processamento adicional ou atualizar elementos na sua aplicação front-end
        } else {
            console.log(`Dados do dia anterior não encontrados para ${dataDiaAnterior}`);
        }
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
    });

    const spanValorMicrosoft = document.getElementsByName("valor-da-microsoft");
    spanValorMicrosoft.forEach(element => {
        element.textContent = openPrice; 
    });
        