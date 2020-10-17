let loginForm = document.querySelector(".login-form");
// let adminUsername = document.querySelector("#admin-username");
// let adminPassword = document.querySelector("#admin-password")

let loginLoader = document.querySelector(".text-loader");
let errorLoader = document.querySelector(".error");

// let logoutButton = document.querySelector('#admin-logout')


function handleLogin(event){
    event.preventDefault();
    loginLoader.style.display = "block";

    const email = loginForm['username'].value;
    const password = loginForm['password'].value;

    auth.signInWithEmailAndPassword(email,password).then( cred =>{
        console.log(cred.user);
        errorLoader.style.display = "none";
        loginForm.reset();
        window.location.href = "/pages/adminDashboard.html";
    })
    .catch(function( error ){
        loginLoader.style.display = "none";
        errorLoader.style.display = "block";
    });


}




loginForm.addEventListener("submit", handleLogin);


// function logoutSession(){
//     FirebaseAuth.getInstance().signOut();
//   console.log("logout")
// }


// logoutButton.addEventListener("click",logoutSession);