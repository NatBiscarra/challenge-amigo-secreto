//Arrays para armazenar amigos
let amigos = [];
let amigosSorteados = [];

//Função para adicionar amigos e criar lista
function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value.trim(); 
    if (!isNaN(nomeAmigo) || nomeAmigo == '' || amigos.includes(nomeAmigo)) {
     alert('Por favor, insira um nome válido e/ou não repetido.');
     limparCampo();
     return;     
    } else {
        amigos.push(nomeAmigo);  
        alterarTexto('h2', `Você adicionou ${nomeAmigo} em sua lista!`);
        console.log(amigos);
        limparCampo();
        atualizarLista();       
    } 
    if (amigos.length > 0) {
        document.getElementById('sortear').removeAttribute('disabled')
    }
}

//Atualizar lista com os nomes inseridos 
function atualizarLista() {
    limparLista(); 
    let lista = document.getElementById("listaAmigos");
    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item); 
    });
}

//Sortear um nome dentro do Array e mover para um array secundário
function sortearAmigo() {
    if (amigos.length > 0) {
        limparLista()
        let nomeAleatorio = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = amigos[nomeAleatorio];

        console.log(nomeSorteado);
        alterarTexto('h2', `Você sorteou ${nomeSorteado}.`);
        setTimeout(function() {
            alterarTexto('h2', `Clique em "Sortear Amigo" para continuar.`);            
        }, 3000); 
        amigosSorteados.push(nomeSorteado);
        console.log(amigosSorteados);
        amigos.splice(nomeAleatorio, 1);
        alterarTexto('p', `Caso seja seu nome, você pode clicar em "Retornar"`);
        if (amigosSorteados.length > 0) {
            document.getElementById('retornar').removeAttribute('disabled');} 
        if (amigos.length === 0) {
            document.getElementById('sortear').setAttribute('disabled', true);
        }
    } else {
            document.getElementById('sortear').setAttribute('disabled', true);
            alterarTexto('h2', `Todos os nomes foram sorteados`);
            alterarTexto('p', '')
    }
}

//Opção de retornar quando nome sorteado é o próprio
function retornoSorteio() {
    if (amigosSorteados.length === 0) {
        alterarTexto('h2', `Nenhum nome para retornar`);
        return;
    }
    let sorteado = amigosSorteados.pop();
    alterarTexto('h2', `O nome ${sorteado} retornou para sorteio.`);
    alterarTexto('p', '');
    amigos.push(sorteado);
    console.log(sorteado);
    console.log(amigos);
    if (amigosSorteados.length === 0) {
        document.getElementById('retornar').setAttribute('disabled', true);
    }
    if (amigos.length > 0) {
        document.getElementById('sortear').removeAttribute('disabled');
    }
}

//limpar campo do input depois de add nome do amigo
function limparCampo() {
    let nomeAmigo = document.querySelector('input');
    nomeAmigo.value = ''; 
}

//limpar lista abaixo do campo para não haver duplicação de listas
function limparLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
}

//Alterar texto <h2> do HTML
function alterarTexto(tag, texto) {
    document.querySelector(tag).innerText = texto; 
}

