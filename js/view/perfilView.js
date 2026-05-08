export function renderizarPerfil(perfil) {

  document.getElementById("nome")
    .textContent = perfil.nome;

  document.getElementById("profissao")
    .textContent = perfil.profissao;

  document.getElementById("descricao")
    .textContent = perfil.descricao;

  document.getElementById("email")
    .textContent = perfil.email;

  const lista =
    document.getElementById("listaSkills");

  perfil.skills.forEach((skill) => {

    const div =
      document.createElement("div");

    div.classList.add("skill");

    div.textContent = skill;

    lista.appendChild(div);

  });

}