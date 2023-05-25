const ButtonChangeTheme = document.getElementById("button-change-theme");
const body = document.querySelector("body");
const imageButtonChangeTheme = document.querySelector(".image-button");

    ButtonChangeTheme.addEventListener("click", () => {
    const darkModeIsActive = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");

    if (darkModeIsActive) {
    imageButtonChangeTheme.setAttribute("src", "./imagens/sun.png")

    } else {
    imageButtonChangeTheme.setAttribute("src", "./imagens/moon.png")
    }
});

