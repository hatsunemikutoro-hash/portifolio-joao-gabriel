const nameIn = document.getElementById("nameIn");
const passIn = document.getElementById("passIn");
const output = document.getElementById("output");

const btn = document.getElementById("subm");

btn.addEventListener("click", () => {
    if (nameIn.value && passIn.value) {

        if (nameIn.value === "githubmidnight1" && passIn.value === "rockyoutxt")
        {
            window.alert("LOGIN");
        } 
        else {
            output.textContent = "Senha ou login incorretos."
        }
    } else if (nameIn.value === "midnight1") {
            output.textContent = "aonde foi que você viu isso?"
        } else {
        output.textContent = "É necessário preencher os campos."
    }
})