function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const profileImage = document.querySelector(".profile img")

  if (html.classList.contains("light")) {
    profileImage.setAttribute("src", "./assets/avatar-light.png")
    profileImage.setAttribute(
      "alt",
      "foto do mayk brito sorrindo, usando óculos preto e jaqueta cinza, com fundo roxo"
    )
  } else {
    profileImage.setAttribute("src", "./assets/avatar.png")
    profileImage.setAttribute(
      "alt",
      "foto do mayk brito sorrindo, usando óculos e camisa preta, com fundo amarelo"
    )
  }
}
