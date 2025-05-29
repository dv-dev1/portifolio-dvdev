// Lista de projetos
const projetos = [
    {
      titulo: "Gerenciador Financeiro Pessoal",
      descricao: "Aplicativo para controle de entradas e saídas financeiras, com resumo de saldo e armazenamento local.",
      link: "https://github.com/dv-dev1/gerenciador-financeiro",
      imagem: "https://media.licdn.com/dms/image/v2/D4D22AQHJ0VSXLS0D9w/feedshare-shrink_2048_1536/B4DZcd6P4FG8Ao-/0/1748553499014?e=1751500800&v=beta&t=MOVyhv_EqJS_MPMlSIkBjxY-C7eTCsON81uEBNgZG-o"
    }
  ];
  
  // Seleciona o container onde os projetos serão inseridos
  const container = document.querySelector(".projetos-container");
  
  // Para cada projeto no array, cria o HTML e adiciona na página
  projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("projeto");
  
    card.innerHTML = `
      <img src="${projeto.imagem}" alt="${projeto.titulo}">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
    `;
  
    container.appendChild(card);
  });
  