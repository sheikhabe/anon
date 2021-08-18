Moralis.initialize("qRqsjvI4ilTyONQo6wW6Oi9n1x8JV1781m7iOh9U"); // Application id from moralis.io
Moralis.serverURL = "https://iklpsqxrh2lj.moralisweb3.com:2053/server"; //Server url from moralis.io

async function login() {
    try {
        user = await Moralis.Web3.authenticate();
        console.log(user);
        alert("User logged in")
    } catch (error) {
        console.log(error);
    }
}

async function logout() {
    
    await Moralis.User.logOut();
    }
    
}

}
document.getElementById("login_button").onclick = login;
document.getElementById("logout_button").onclick = logout;
