$( document ).ready( function(){
    
    $("#ss_switch").click(function() {
        hidden_ca();
    });

    $("#ca_switch").click(function() {
        $("#create_account").removeClass("hidden");
        $("#sign_in").addClass("hidden"); 
        return true;
    });

    $("#btn_ca").click(function(event) {
        event.preventDefault();

        var name = document.getElementById("ca_name").value;
        var last_name = document.getElementById("ca_last_name").value;
        var email = document.getElementById("ca_email").value;
        var pass = document.getElementById("ca_pass").value;

        let data = [{name: name, last_name: last_name, email: email, pass: pass}];
        localStorage.setItem("data", JSON.stringify(data));

        hidden_ca(); 
    });

    $("#btn_ss").click(function(event){
        event.preventDefault();

        let data = JSON.parse(localStorage.getItem("data"));

        var email = document.getElementById("si_email").value;
        var pass = document.getElementById("si_pass").value;

        let exist = data.find(element => element.email === email && element.pass === pass);

        if (exist){
            alert("Ha iniciado sesión "+exist.name+" "+exist.last_name);
        } else {
            alert("Contraseña o usuario incorrecto");
        }
    });

});

function hidden_ca(){
    $("#sign_in").removeClass("hidden");
    $("#create_account").addClass("hidden"); 
    var name = document.getElementById("ca_name").value = "";
    document.getElementById("ca_last_name").value = "";
    document.getElementById("ca_email").value = "";
    document.getElementById("ca_pass").value = "";
    return true;
}