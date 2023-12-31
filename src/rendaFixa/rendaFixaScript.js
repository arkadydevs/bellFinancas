var mapaTexto = new Map();
var numeroTexto = 0
var spanElement = document.getElementById("spanMascot");
var aElement = document.getElementById("paginaAtual");
var tipoRenda = document.getElementById("tipoRenda")

function setLCA(){
    numeroTexto=0

    mapaTexto.clear();
    mapaTexto.set(0, 'A sigla LCA significa Letra de Crédito de Agronegócio, é uma renda fixa, que ocorre quando um investidor aplica o seu dinheiro em um projeto agrícola. O título LCA é emitido por uma instituição especializada no mundo das finanças, como um banco. O emissor do empréstimo não aplica o seu dinheiro diretamente no projeto, primeiro o dinheiro vai para o banco ou outra instituição financeira, e a partir da aplicação, o banco direciona o dinheiro para as atividades agrícolas negociadas na construção do contrato. E o retorno financeiro, dividendos, vai se basear no pagamento devolutivo da quantia aplicada que o banco vai pagar combinada com as taxas de juros pagos pelos agropecuários que realizam um empréstimo com a instituição. ');
    mapaTexto.set(1, 'A aplicação em LCA´s não apenas proporciona uma oportunidade de investimento segura, mas também contribui para o financiamento do setor agropecuário, desempenhando um papel importante no suporte ao desenvolvimento desse segmento econômico. É importante entender os termos e condições específicas de cada LCA antes de investir, a fim de tomar decisões informadas.');
    spanElement.textContent = mapaTexto.get(numeroTexto);
    tipoRenda.textContent = "LCA"
    aTextoMudanca()
}
function setLCI(){
    numeroTexto=0

    mapaTexto.clear();
    mapaTexto.set(0, 'A sigla LCI significa Letra de Crédito Imobiliário, ela é uma forma de empréstimo que um investidor pode realizar para instituições que aplicam o seu dinheiro em empreendimentos de imóveis. Dessa forma, a LCI é um título de renda fixa (são investimentos mais seguros que normalmente ocorrem ao serem adquiridos por meio de um título, um contrato) que você pode comprar a partir de uma corretora, emitidos por instituições financeiras e bancos. O retorno financeiro recebido a quem aplica o seu dinheiro é alicerçado na maneira como ocorre o desenvolvimento do projeto, centro das negociações, podendo oferecer uma ótima perspectiva de lucro dependendo do seu desempenho. Entretanto, a maior fonte de dividendos surge das taxas de juros envolvidas durante a consolidação e acontecimento das etapas do negócio. Além da isenção de Imposto de Renda sobre os rendimentos, posicionando a compra desses títulos como uma alternativa mais segura e previsível em relação às outras formas de investimento.');
    mapaTexto.set(1, 'No entanto, é importante observar que as LCIs são títulos de renda fixa e estão sujeitas a flutuações nas taxas de juros do mercado, o que pode afetar seu valor de mercado se o investidor decidir vendê-las antes do vencimento. Portanto, é importante considerar o prazo e os objetivos de investimento ao escolher LCI´s como uma opção de investimento.  ');
    spanElement.textContent = mapaTexto.get(numeroTexto);
    tipoRenda.textContent = "lCI"

    aTextoMudanca()
}
function setCDB(){
    numeroTexto=0

    mapaTexto.clear();
    mapaTexto.set(0, 'O CDB, sigla equivalente para Certificado de Depósito Bancário, é um título de renda fixa, o que indica que este tipo de investimento oferece segurança e mais estabilidade para o investidor que apresenta interesse em aplicar o seu dinheiro. A negociação de título CDB funciona como um “empréstimo” ao banco, de quem compra o documento. Assim, quando a data de vencimento do CDB negociado for alcançada, o banco vai retornar o dinheiro investido com o acréscimo dos rendimentos acordados durante o processo de negociação. É interessante destacarmos que este investimento é garantido e protegido pelo FGC (Fundo Garantidor de Crédito, fundo que almeja proteger o patrimônio de quem realiza o investimento');
    mapaTexto.set(1, 'Os CDBś são uma alternativa dos bancos e outras instituições financeiras de mobilizar fundos através dos investidores (quem compra o título) e aplicarem esse dinheiro arrecadado em empréstimos para outros empreendimentos, como na área da agropecuária. A escolha do tipo de CDB também é relevante, visto que existem os prefixados, que têm uma taxa de juros fixa definida no momento da aplicação, e os pós-fixados, cujos rendimentos estão atrelados a indicadores econômicos, como o CDI (Certificado de Depósito Interbancário). Além disso, é importante verificar a liquidez do CDB, ou seja, a facilidade de resgatar o valor investido antes do vencimento. Alguns CDBs permitem resgates antes do prazo estabelecido, enquanto outros podem ter carência.');
    spanElement.textContent = mapaTexto.get(numeroTexto);
    tipoRenda.textContent = "CDB"

    aTextoMudanca()
}
function setPOUPANCA(){
    numeroTexto=0

    mapaTexto.clear();
    mapaTexto.set(0, 'Uma conta poupança é uma alternativa muito conhecida de guardar dinheiro, sendo oferecida pelas principais instituições financeiras do país. Elas apresentam o objetivo de permitir que os clientes reservem o seu dinheiro com baixo risco e oportunidade de rendimento oriundo dos juros vigentes do valor depositado. As contas poupança são uma opção popular entre os poupadores, pois geralmente não envolvem custos de manutenção, tornando-se acessíveis a um grande número de pessoas. As regras de funcionamento das contas poupança podem variar de acordo com o país e a instituição financeira, mas, em geral, os fundos depositados nesse tipo de conta são seguros, uma vez que também costumam ser protegidos por agências reguladoras e garantidos pelo governo em muitos lugares.');
    mapaTexto.set(1, 'As contas poupança são fáceis de abrir, geralmente exigindo apenas um depósito inicial mínimo. Os titulares de contas podem acessar seu saldo a qualquer momento, o que proporciona uma grande flexibilidade para depósitos e retiradas. No entanto, a rentabilidade das contas poupança pode variar com base na taxa de juros estabelecida pelas instituições financeiras ou pelos governos.');
    spanElement.textContent = mapaTexto.get(numeroTexto);
    tipoRenda.textContent = "POUPANÇA"

    aTextoMudanca()
}



function mudarFalaFrente() {
    numeroTexto++;

    if (numeroTexto > mapaTexto.size - 1) {
        numeroTexto = 0;
    }

    spanElement.textContent = mapaTexto.get(numeroTexto);
    console.log(numeroTexto)
    aTextoMudanca();
}


function mudarFalaTras() {
    numeroTexto--;
    if(numeroTexto<0){
        numeroTexto=0;
    }
    spanElement.textContent = mapaTexto.get(numeroTexto);
    console.log(numeroTexto)
    
    aTextoMudanca()
}


function aTextoMudanca(){
    if(mapaTexto.size > 0){
        aElement.textContent = numeroTexto+1 + "/" + mapaTexto.size
    }
    else{
        console.log("Nenhum tipo de ativo selecionado")
    }

}

function exibirCaracterPorCaracter(elemento, texto) {
    elemento.textContent = ""; 
    var i = 0;
    var interval = setInterval(function () {
        elemento.textContent += texto[i];
        i++;
        if (i === texto.length) {
            clearInterval(interval);
            document.getElementById("bellImagem").removeAttribute("disabled");
        }
    }, 50); 
}


