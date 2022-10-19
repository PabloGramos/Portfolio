function Enviar(){
    var nome = document.getElementById("nomeid")
    var fone = document.getElementById("foneid")
    var email = document.getElementById("emailid")
    var msg = document.getElementById("msgid")

    if(nome.value != ""){
        alert("Obrigado " + nome.value + ", seus dados foram encaminhados com sucesso.")
        alert( nome.value + "\n" + fone.value + "\n" + email.value + "\n" + msg)
    }
}
var a = 30
console.log("sakjdhsakjhj")