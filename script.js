//serve pra mudar algo atraves do id do documento HTML -> getElementById 
const tela = document.getElementById("tela"); 

function adicionarValor(valor){
    tela.value += valor
}

//funçao para limpar td
function limparTela(){
    tela.value = ""

    //limpar td
}

function apagarUltimo(){
    //remove o ultimo inserido na tela 
    tela.value = tela.value.slice(0,-1);
    //o metodo slide permite extrair uma parte de uma string.
    //o primeiro numero que é o zero indica o inicio, eo segundo numero q é o -1 indica que devemos parar
}

function calcularResultado(){
    //o try permite executar um codigo que pode gerar um erro
    try{
        tela.value = eval(tela.value)
        // | eval interpreta uma string como uma expressao e retorna ela como um numero 
        // v -> Calcula e substitui o conteudo
    }
    catch(erro){
        tela.value = "Erro";
    }
}

document.addEventListener("keydown", function(evento) {
    const tecla = evento.key;
    //
    if ("0123456789*/+-." .includes(tecla)){
        adicionarValor(tecla);
    }

    if(tecla === "Enter" || tecla === "="){
        calcularResultado();
    }

    if (tecla === "Backspace"){
        apagarUltimo();;
    }

    if (tecla === Escape){
        limparTela();
    }
})