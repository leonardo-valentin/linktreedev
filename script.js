function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const profileImage = document.querySelector(".profile img")

  if (html.classList.contains("light")) {
    profileImage.setAttribute("src", "./assets/avatar-light.png")
    profileImage.setAttribute(
      "alt",
      "foto do léo, com uma parede branca de fundo"
    )
  } else {
    profileImage.setAttribute("src", "./assets/avatar.png")
    profileImage.setAttribute("alt", "foto do léo, com cores invertidas")
  }
}
