function validateCredentials() {
    
    const correctUsername = "tangguh";
    const correctPassword = "8888";

    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username === correctUsername && password === correctPassword) {
        alert("Anda berhasil login!");
    } else {
        alert("Akun tidak ada");
    }
}