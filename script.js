let listaCompras = [];

// Função para inserir um item na lista
function inserirItem() {
    const itemInput = document.getElementById('itemInput');
    const item = itemInput.value.trim();

    if (item) {
        listaCompras.push(item);
        itemInput.value = '';
        atualizarLista();
    } else {
        alert('Por favor, digite um item válido.');
    }
}

// Função para remover um item da lista
function removerItem() {
    const removerInput = document.getElementById('removerInput');
    const valor = removerInput.value.trim();

    if (valor) {
        if (!isNaN(valor)) {
            const posicao = parseInt(valor) - 1; 
            if (posicao >= 0 && posicao < listaCompras.length) {
                listaCompras.splice(posicao, 1); // Remove o item na posição
            } else {
                alert('Posição inválida!');
            }
        } else {
            // Remove o item pelo nome
            const index = listaCompras.indexOf(valor);
            if (index !== -1) {
                listaCompras.splice(index, 1); 
            } else {
                alert('Item não encontrado!');
            }
        }
        removerInput.value = ''; 
        atualizarLista();
    } else {
        alert('Por favor, digite um nome ou posição válida.');
    }
}

// Função para pesquisar um item na lista
function pesquisarItem() {
    const pesquisarInput = document.getElementById('pesquisarInput');
    const valor = pesquisarInput.value.trim();

    if (valor) {
        // Verifica se o valor é um número (posição)
        if (!isNaN(valor)) {
            const posicao = parseInt(valor) - 1; // Converte para índice
            if (posicao >= 0 && posicao < listaCompras.length) {
                alert(`Item na posição ${valor}: ${listaCompras[posicao]}`);
            } else {
                alert('Posição inválida!');
            }
        } else {
            // Pesquisa o item pelo nome
            const index = listaCompras.indexOf(valor);
            if (index !== -1) {
                alert(`Item "${valor}" encontrado na posição ${index + 1}.`);
            } else {
                alert('Item não encontrado!');
            }
        }
        pesquisarInput.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome ou posição válida.');
    }
}

// Função para atualizar a lista exibida na tela
function atualizarLista() {
    const lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpa a lista atual

    listaCompras.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item}`;
        lista.appendChild(li);
    });
}

// Inicializa a lista vazia
atualizarLista();