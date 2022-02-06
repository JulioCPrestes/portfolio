var hamburguer = document.querySelector(".hamburguer");/**Cria uma variável hamburguer e busca o menu através document e a função querySelector*//*Como já colocou a classe .hamburguer, usa este seletor para buscar*/
hamburguer.addEventListener("click", function () {
    /*à partir da variável .hamburguer, vai adicionar um EventListener que vai ficar escutando um evento de click-Quando escutar um evento de click, vai executar esta função*/
    document.querySelector(".container").classList.toggle("show-menu");
    /*Esta função vai buscar através do document.querySelector, no seletor .container, e à partir da lista de classes vai fazer um toggle (adicionar ou remover), uma classe chamada show-menu(Se não existir a classe show-menu ele coloca e se existir, ele retira*/
});

/**Pode se fazer o código acima assim:*/
/**document.querSelector(".hamburguer").addEventListener("click", () =>*/
/**document.querySelector(".container").classList.toggle("show-menu"));*/

/*TRATAMENTO DE EVENTOS - COM CLICK OU CHANGE*/
document.querySelector("#qtde").addEventListener("change", atualizarPreco) /*Usa o "change" para pegar qualquer valor digitado direto ou mudado no click*/
document.querySelector("#js").addEventListener("change", atualizarPreco) /*Pode ser usado o "click" que são as setas para cima e para baixo*/
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    /*MANIPULAÇÃO DO DOM, MUDANDO OS DADOS DA PÁGINA DINÂMICAMENTE USANDO O JAVASCRIPT*/
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas` /*TEMPLATE STRINGS PARA CONCATENAÇÃO DE VARIÁVEIS*/
    atualizarPreco()/*CHAMADA DE FUNÇÃO*/
})

/*Cria a função "atualizarPreco"*/
function atualizarPreco() {
    /*DECLARAÇÃO DE CONSTANTES - QUE NÃO IRÃO MUDAR*/
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked /*A propriedade "checked" pode ser On ou OFF (Verdadeiro ou falso)*/
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    /*DECLARAÇÃO DE VARIÁVEIS USANDO O LET*/
    let preco = qtde * 100;/*Calcula a quantidade de páginas e informa o valor*/
    /*ESTRUTURAS DE DECISÃO*/
    if (temJS) {
        /*ATRIBUIÇÃO*/
        preco = preco + (preco * 10 / 100)//*Calcula 10% à mais no preço inicial*/
        /*if (temJS) preco *= 1.1*/ /*Caso o if tenha só uma linha pode usar desta forma sendo: *= igual à igual e multiplica e 1.1 igual à preco * 10/100*/
    }
       /*ESTRUTURAS DE DECISÃO*/
    if (incluiLayout) preco += 500 /*Como é apenas uma instrução pode fazer desta forma*/
    /*if (incluiLayout) {
        preco = preco + 500
    }*/
    /*DECLARAÇÃO DE VARIÁVEIS USANDO O LET*/
    let taxaUrgencia = 1 - prazo * 0.1;/*Onde 1 significa 100%, o prazo é o que foi selecionado, e 0.1 representa 10% de taxa por semana*/
    /*preco = preco * (preco+taxaUrgencia)*/
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`/*Método ".toFixed" determina a quantidade de casas decimais vai */
    /*document.querySelector("#preco").innerHTML = `R$ ${preco}`*//*Contatena o que é constante (Fixo) com crase e o que é variável com $(Cifrão) e {}*//*Esta é uma Template String padrão*/
}
