let listaAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value; //Captura o valor de entrada (nome) inserido pelo usuário
    
    if (nomeAmigo == '' || nomeAmigo == ' ') {
     alert('Por favor, insira um nome.');
     return false;     
    } else {
        listaAmigos.push(nomeAmigo); //Se não está vazio, o nome inserido é add a lista 
        let lista = document.getElementById('listaAmigos');
        for (i = 0; i < listaAmigos.length; ++i) {
            let li = document.createElement('li');
            li.innerText = listaAmigos[i];
            lista.appendChild(li);
        }
        limparCampo();        
    } 

}


//limpar campo do input depois de add nome do amigo
function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = ''; 
}

//limpar lista abaixo do campo para não haver duplicação de listas
function limparLista() {
    lista = document.getElementById('listaAmigos'); //vai retornar a lista de amigos?
    lista.innerHTML = '';
}