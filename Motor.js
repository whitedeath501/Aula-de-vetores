var Nome = [];
var professor;
var listar = "";

function Inserir(){
    professor = document.getElementById('nome').value;
    Nome.push(professor);
}

function Exibir (){
    for (var i = 0; i < Nome.length; i++){
        alert(Nome[i]);
    }
}

function InserirInicio() {
    professor = document.getElementById('nome').value;
    Nome.unshift(professor);
}

function Remover() {
    Nome.pop();
}

function RemoverInicio() {
    Nome.shift();

}

function Listar() {
    for (var i = 0; i < Nome.length; i++) {
        listar = Nome[i] + " " + listar;
        document.getElementById("Listar").textContent = listar;
        }
}