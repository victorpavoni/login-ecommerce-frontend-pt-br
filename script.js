function verificar() {
    let email = document.getElementById("email-input").value
    let senha = document.getElementById("password-input").value
    if (email == '') {
        alert(`Preencha todos os campos!`)
    } else if (senha == '') {
        alert(`Preencha todos os campos!`)
    } else {
        console.log('Email = ', email)
        console.log('Senha = ', senha)
    }
}