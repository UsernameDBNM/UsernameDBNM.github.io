function login() {
    
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    
    if (user == "aco" && pass == "aco111") {
        window.location = "sessionA.html"
    } else if (user == "lon" && pass == "loncito") {
        window.location = "sessionB.html"
    } else {
        alert("Credenciales incorrectas.");
    }
}