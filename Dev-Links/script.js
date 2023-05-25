// Função Declarativa
const toggle = () => {
  const html = document.documentElement;
  html.classList.toggle("light");

  const imgProfile = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    imgProfile.setAttribute("src", "./assets/avatar-light.png");
    imgProfile.setAttribute(
      "alt",
      "imagem do avatar de Vagner Junior com um fundo amarelo"
    );
  } else {
    imgProfile.setAttribute("src", "./assets/avatar.png");
    imgProfile.setAttribute(
      "alt",
      "imagem do avatar de Vagner Junior com um fundo azul"
    );
  }
};
