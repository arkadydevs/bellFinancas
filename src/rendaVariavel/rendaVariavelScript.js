var mapaTexto = new Map();
var numeroTexto = 0
var spanElement = document.getElementById("spanMascot");
var aElement = document.getElementById("paginaAtual");
var tipoRenda = document.getElementById("tipoRenda")

function setFII(){
    numeroTexto=0

    mapaTexto.clear();
    mapaTexto.set(0, 'O Fundo de Investimento Imobiliário (FII) como um modelo de investimento em empreendimentos imobiliários. Os investidores aplicam recursos em um empreendimento, como a construção de um estádio, prédio comercial ou habitacional, e compartilham parte dos lucros gerados pelo projeto. O FII é uma forma indireta de investir em imóveis, gerenciada por profissionais, como gestores e administradores de fundos. É uma maneira de comprar imóveis sem ser o proprietário direto, e os investidores ganham ou perdem dinheiro com base na valorização ou desvalorização dos ativos imobiliários do fundo.');
    mapaTexto.set(1, 'O HGLG11, também conhecido como CSHG LOGÍSTICA - FUNDO DE INVESTIMENTO IMOBILIÁRIO (FII), é administrado pela Credit Suisse Hedging Griffo Corretora de Valores e foi introduzido em 2010. Esse FII se especializa na construção de imóveis destinados à logística e à indústria. Seu objetivo é atender às demandas de empresas que necessitam de galpões para armazenar grandes estoques ou para otimizar processos de distribuição. Com o crescimento do comércio virtual, esse tipo de imóvel tornou-se crucial, principalmente para grandes corporações com volumes significativos de mercadorias.');
    mapaTexto.set(2, 'O KNRI11, ou KINEA RENDA IMOBILIÁRIA FUNDO DE INVESTIMENTO IMOBILIÁRIO (FII), é um fundo ativo desde 2010, administrado pela Intrag DTVM e gerido pela KINEA INVESTIMENTOS, uma das maiores em recursos no mercado brasileiro. Especializado em galpões logísticos e prédios corporativos, fornece espaços para empresas envolvidas em operações logísticas e escritórios corporativos. Seus principais locatários são empresas que necessitam de espaços para suas operações administrativas. Assim como o exemplo anterior, a principal fonte de receita desse FII é a locação de seus imóveis. Os rendimentos gerados são distribuídos periodicamente entre os cotistas. As cotas também podem ser compradas e vendidas no mercado financeiro da B3, sujeitas às flutuações do mercado. Devido à sua especialização, o valor das cotas desse FII está intimamente ligado ao desempenho econômico das empresas locatárias.');
    mapaTexto.set(3, 'O HGCR11, também conhecido como CSHG RECEBÍVEIS IMOBILIÁRIOS - FUNDO DE INVESTIMENTO IMOBILIÁRIO (FII), é administrado pela Credit Suisse Hedging Griffo Corretora de Valores e está ativo desde 2009. Diferentemente dos exemplos anteriores, este FII tem uma abordagem distinta, centrando-se na compra de Certificados de Recebíveis Imobiliários, conhecidos como CRI. Investidores compram CRIs emitidos por empresas que representam valores de retorno estimados. Ao adquirir um CRI, o investidor empresta dinheiro à empresa emissora, e parte dos lucros gerados pelo empreendimento associado ao CRI é compartilhada com os investidores. Essa forma de investimento, chamada FII de papel, difere dos FII de tijolo, como os exemplos anteriores. Investidores podem obter retorno por meio dos juros que as empresas emissoras de CRIs pagam periodicamente, além da devolução do valor inicialmente investido e da possibilidade de vender o CRI antes do seu vencimento.');
    mapaTexto.set(4, 'O quarto exemplo de FII, o MXRF11, também conhecido como Maxi Renda Fundo de Investimento Imobiliário, é administrado pela BTG Pactual e gerido pela XP Vista Asset Management, ativo desde 2011. Semelhante ao exemplo anterior, é especializado na venda de Certificados de Recebíveis Imobiliários (CRI) e se classifica como um FII de papel. Os investidores obtêm vantagens por meio dos juros acordados no "empréstimo" realizado à construtora emissora do CRI. Além de recuperar o valor investido quando a empresa arrecada o suficiente com o empreendimento para pagar o empréstimo, os rendimentos incluem as taxas de juros ao longo do contrato. Os lucros são distribuídos periodicamente entre os cotistas, e a venda de CRIs dentro do prazo negociado oferece uma alternativa interessante para obter recursos, dependendo das condições de venda desses ativos.');
    mapaTexto.set(5, 'O HGBS11, ou Hedge Brasil Shopping Fundo de Investimento Imobiliário, administrado pela Hedge Investments e gerido pela Credit Suisse Hedging-Griffo, está ativo desde 2006, sendo o mais antigo entre os exemplos de fundos imobiliários analisados. Ele se enquadra na categoria FII de tijolo, investindo diretamente no mercado imobiliário, com foco na construção de centros comerciais, como shoppings. Sua principal fonte de renda é a locação de espaços para lojistas, cinemas, restaurantes e outros. Os cotistas recebem periodicamente aluguéis e parte dos lucros das vendas dos locatários. As cotas podem ser negociadas na B3 para obter retorno do investimento. O desempenho do HGBS11 é influenciado por fatores econômicos, como o varejo e as condições econômicas do país, tornando importante a consideração do perfil de risco e retorno ao investir neste fundo.');
    spanElement.textContent = mapaTexto.get(numeroTexto);
    tipoRenda.textContent = "FII"
    aTextoMudanca()
}
function setAcoes(){
    numeroTexto=0

    mapaTexto.clear();
    mapaTexto.set(0, 'Ações representam participação em empresas de capital aberto, sendo negociadas em bolsas de valores como a B3, localizada em São Paulo. Cada ação corresponde a uma porção da empresa e pode variar na quantidade detida pelos investidores, determinando sua influência nas decisões da empresa. Além disso, as empresas distribuem dividendos aos acionistas, que são parcelas dos lucros.O mercado de ações é conhecido por sua volatilidade e sensibilidade às condições econômicas. Os preços das ações podem flutuar significativamente com base na estabilidade financeira do mercado e na saúde das empresas. Isso significa que os investidores podem ganhar consideravelmente em momentos de prosperidade, mas também enfrentar perdas substanciais em tempos de crise econômica. A bolsa de valores brasileira, a B3, é um dos principais mercados onde as ações são negociadas, e muitos investidores buscam oportunidades nesse ambiente. Portanto, entender as ações e como elas funcionam é fundamental para quem deseja investir no mercado de capitais. A seguir, examinaremos cinco exemplos de ações presentes no mercado, fornecendo uma visão mais prática de como os investidores podem participar desse segmento do mercado financeiro.');
    mapaTexto.set(1, 'O primeiro exemplo de ação é da Petrobrás, uma empresa especializada em pesquisa, refinaria e transporte de petróleo. Suas ações são negociadas na B3 e em outros mercados, como a NYSE nos EUA. A compra de ações confere ao investidor a propriedade de uma parte da empresa, incluindo o direito a dividendos e participação em decisões da empresa em assembleias de acionistas. No entanto, a negociação de ações envolve riscos, e o mercado financeiro é conhecido por sua volatilidade. Os fatores que afetam o desempenho da Petrobrás incluem a flutuação dos preços do petróleo e gás, regulamentações governamentais e mudanças na demanda por energia. Também são considerados riscos ambientais, como vazamentos, problemas técnicos e interrupções na produção e logística, que podem impactar os resultados financeiros da empresa. Portanto, os investidores precisam estar atentos a esses fatores ao considerar investir em ações da Petrobrás.');
    mapaTexto.set(2, 'O segundo exemplo é a Microsoft Corporation, uma empresa de tecnologia fundada em 1975 por Bill Gates e Paul Allen, cujas ações são negociadas na NASDAQ e outras principais bolsas de valores globais. A Microsoft é conhecida por seus sistemas operacionais e uma ampla gama de serviços, incluindo o Microsoft Office e a plataforma de nuvem Azure.É importante levar em consideração que investir em ações da Microsoft envolve lidar com fatores específicos do setor de tecnologia, como a alta competitividade, a constante inovação e os riscos cibernéticos relacionados à segurança de dados. Além disso, a reputação da empresa é um ponto importante, sujeita a eventos negativos que podem afetar sua imagem, como escândalos corporativos ou problemas de segurança. Portanto, os investidores precisam analisar cuidadosamente esses fatores ao investir nas ações da Microsoft.');
    mapaTexto.set(3, 'O terceiro exemplo é a Apple Inc., uma das principais empresas de tecnologia do mundo, fundada em 1976 por Steve Jobs, Steve Wozniak e Ronald Wayne. Sua atuação concentra-se na produção de eletrônicos, software e serviços. Suas ações são negociadas na NASDAQ com o código "AAPL". A Apple é reconhecida por seus iPhones, iPads, Macs e diversos softwares, como o Apple Music e o iCloud.Os riscos de investir na Apple incluem a concorrência no mercado de tecnologia e preocupações com a privacidade de dados. Como uma empresa altamente competitiva, a Apple deve inovar continuamente para se manter relevante. A segurança de informações pessoais também é uma consideração importante, dada a sensibilidade dos dados armazenados em seus dispositivos e serviços. Portanto, investidores devem estar atentos a esses fatores ao considerar ações da Apple.');
    mapaTexto.set(4, 'A Magazine Luiza, uma das principais redes de varejo do Brasil, fundada em 1957 por Pelegrino José Donato e Luiza Trajano Donato, tem suas ações negociadas na B3, com o código "MGLU3". A empresa possui um amplo portfólio de produtos, focando no segmento de e-commerce e oferecendo entrega em domicílio, loja física ou retirada em lockers automatizados. Além disso, disponibiliza opções de financiamento para os clientes. Ao analisar o desempenho da Magazine Luiza, é importante considerar a alta competitividade no setor varejista, as flutuações nas condições econômicas que afetam o poder de compra dos consumidores e o impacto do crescimento do comércio eletrônico nas lojas físicas. Portanto, os investidores devem levar em conta esses fatores ao considerar ações da empresa.');
    mapaTexto.set(5, 'A International Business Machines Corporation (IBM), uma das mais antigas e respeitadas empresas de tecnologia, foi fundada em 1911 e é especializada em uma ampla gama de produtos, incluindo hardware, software, serviços de consultoria e soluções em nuvem. Suas ações são negociadas na New York Stock Exchange (NYSE) com o ticker "IBM." A IBM é renomada por sua produção de hardware para áreas de TI, como servidores, mainframes e sistemas de armazenamento, bem como por seus softwares, incluindo sistemas operacionais, ferramentas de desenvolvimento de aplicativos e soluções de análise de dados, como o IBM Watson Analytics. Além disso, a empresa oferece serviços de computação em nuvem, como a plataforma IBM Cloud e soluções de inteligência artificial em nuvem.Para avaliar o desempenho financeiro da IBM, é crucial considerar fatores do setor de tecnologia, como a privacidade e segurança dos dados dos usuários, a reputação da marca no mercado consumidor e a necessidade constante de inovação para se manter relevante em um mercado de rápida evolução.');
    spanElement.textContent = mapaTexto.get(numeroTexto);
    tipoRenda.textContent = "AÇÕES"
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
    aElement.textContent = numeroTexto+1 + "/" + mapaTexto.size

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


