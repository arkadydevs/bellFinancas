/*
const urlMicrosoft = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&interval=5min&apikey=VJ3VUIZPVMBRLTP5';
const urlApple = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&interval=5min&apikey=VJ3VUIZPVMBRLTP5';
const urlIBM = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&interval=5min&apikey=VJ3VUIZPVMBRLTP5';
const urlNIKE = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NKE&interval=5min&apikey=VJ3VUIZPVMBRLTP5';
const urlAMAZON = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&interval=5min&apikey=VJ3VUIZPVMBRLTP5';

function carroselDados(url, nomeElemento) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dataAtual = new Date();
            dataAtual.setDate(dataAtual.getDate() - 1);
            const ano = dataAtual.getFullYear();
            const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
            const dia = String(dataAtual.getDate()).padStart(2, '0');
            const dataDiaAnterior = `${ano}-${mes}-${dia}`;

            const timeSeries = data['Time Series (Daily)'];
            const dadosDiaAnterior = timeSeries[dataDiaAnterior];



            if (dadosDiaAnterior) {
                const closePrice = dadosDiaAnterior['4. close'];
                const closePriceArredondadoAnterior = Number(closePrice).toFixed(2);

                const closePriceAtual = Number(data['Time Series (Daily)'][dataDiaAnterior]['4. close']).toFixed(2);

                const elementos = document.getElementsByName(nomeElemento);
                if (elementos.length > 0) {
                    elementos.forEach(element => {
                        const closePriceArredondado = closePriceAtual;

                        if (closePriceArredondado < closePriceArredondadoAnterior) {
                            element.style.color = 'red'; 
                        }

                        element.textContent = `${nomeElemento}: $${closePriceArredondado}`;
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
    { url: urlApple, nomeElemento: "valor-da-apple" },
    { url: urlNIKE, nomeElemento: "valor-da-nike" },
    { url: urlAMAZON, nomeElemento: "valor-da-amazon" }

];

urls.forEach(({ url, nomeElemento }) => {
    carroselDados(url, nomeElemento);
});*/

const botaoAna = document.getElementById("gitAna");
botaoAna.addEventListener("click", function() {
    window.open("https://github.com/tiredmoth", "_blank");
  });

const botaoCarlos = document.getElementById("gitCarlos");
botaoCarlos.addEventListener("click", function() {
    window.open("https://github.com/ca12loss", "_blank");
});

const botaoJoao = document.getElementById("gitJoao");
botaoJoao.addEventListener("click", function() {
    window.open("https://github.com/JoaoAHaupt", "_blank");
});


const botaoMariana = document.getElementById("gitMariana");
botaoMariana.addEventListener("click", function() {
    window.open("https://github.com/MarianaMegumi", "_blank");
});
var falaNum = 0;
var audioElement = new Audio('/src/audio/vozBell.mp3');

function mudarFala() {
    audioElement
    var spanElement = document.getElementById("spanMascot");
    var bellImage = document.getElementById("bellImagem");
    var texto = spanElement.textContent || "...";

    if (spanElement.textContent !== texto) {
        return;
    }

    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }

    if (falaNum === 1) {
        texto = "Muito prazer! Meu nome é Bell, o dono desse incrível site! Hoje eu lhe ensinarei e o guiarei pelo caminho seguro dos investimentos!";
        bellImage.src = "/src/logos/bell2.png";
        falaNum++;

        audioElement.play();
    } else if (falaNum === 2) {
        texto = "Vamos embarcar nessa!!??";
        bellImage.src = "/src/logos/bell3.png";
        falaNum++;
        audioElement.play();

    } else {
        texto = "Olá! Bem-vindo ao nosso site!";
        bellImage.src = "/src/logos/bell.png";
        falaNum = 1;;

        audioElement.play();
    }

    document.getElementById("bellMascot").setAttribute("disabled", "disabled");

    exibirCaracterPorCaracter(spanElement, texto, function () {
        document.getElementById("bellMascot").removeAttribute("disabled");
        audioElement.pause();
        
    });
}

function exibirCaracterPorCaracter(elemento, texto, callback) {
    elemento.textContent = "";
    var i = 0;
    var interval = setInterval(function () {
        elemento.textContent += texto[i];
        i++;
        if (i === texto.length) {
            clearInterval(interval);
            if (callback) {
                callback();
            }
        }
    }, 50);
}



