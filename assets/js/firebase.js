var firebaseConfig = {
    apiKey: "AIzaSyAN3Ae_zuuHbCJEEIqO4dbHzgQG4opm-bY",
    authDomain: "school-project-292014.firebaseapp.com",
    databaseURL: "https://school-project-292014.firebaseio.com",
    projectId: "school-project-292014",
    storageBucket: "school-project-292014.appspot.com",
    messagingSenderId: "398939585163",
    appId: "1:398939585163:web:1e149e77ebe6046724728e",
    measurementId: "G-7BL50FDHD3"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var storage = firebase.storage();
// const dataBase = firebase.firestore();


//update database settings

// dataBase.settings({
//     timeStampsInSnapshots : true
// })



const dbRef = firebase.database();
const usersRef = dbRef.child('users');


const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {
    let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", userClicked) 
    userListUI.append($li);
});



function userClicked(e) {
    var userID = e.target.getAttribute("child-key");
    const userRef = dbRef.child('users/' + userID);
    const userDetailUI = document.getElementById("userDetail");
    userDetailUI.innerHTML = ""
    userRef.on("child_added", snap => {
        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " - " + snap.val()
         userDetailUI.append($p);
    });
}

const addUserBtnUI = document.getElementById("add-user-btn"); 
addUserBtnUI.addEventListener("click", addUserBtnClicked);


// const usersRef = dbRef.child('users');

const addUserInputsUI = document.getElementsByClassName("user-input");

// this object will hold the new user information 
let newUser = {};


// loop through View to get the data for the model 
for (let i = 0, len = addUserInputsUI.length; i < len; i++) {
    let key = addUserInputsUI[i].getAttribute('data-key');
    let value = addUserInputsUI[i].value;
    newUser[key] = value;
}

// {
//     "age": "21",
//     "email": "rtamil@email.com",
//     "name": "Raja Tamil"
// }


usersRef.push(newUser, function () {
    console.log("data has been inserted");
})