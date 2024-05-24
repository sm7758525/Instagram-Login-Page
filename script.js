// select username and password
var username = document.querySelector("#username")
var password = document.querySelector("#password")
var login = document.querySelector("#login")

username = null;
password = null;

login.addEventListener("click",function(){
    if(username === null){
        console.alert("Kindly write your Username")
    }
    else if(password === null){
        console.alert("kindly Enter your password")
    }
    else{
        console.log("Done")
    }
})
