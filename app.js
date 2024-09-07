function buscar() {
    // Obtém a referência ao elemento HTML com o ID 'resultados-pesquisa'
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado... Por favor, digite o título do livro.</p>";
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Declara uma variável para armazenar o HTML gerado dinamicamente
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada item no array 'livros'
    for (let dado of livros) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Concatena o HTML de cada item ao conteúdo da variável 'resultados'
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p><strong>Data de Publicação:</strong> ${dado.dataPublicacao}</p>
                <p><strong>Gênero:</strong> ${dado.genero}</p>
                <p><strong>Avaliação:</strong> ${dado.avaliacao} estrelas</p>
                <a href=${dado.linkCompra} target="_blank">Comprar</a>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atualiza o conteúdo HTML do elemento 'section' com o HTML gerado
    section.innerHTML = resultados;
}


