// Clear Input field every time when SignUp button is clicked
function signUp(){
      document.getElementById("fname").value="";
      document.getElementById("uname").value="";
      document.getElementById("pass").value="";
      document.getElementById("confPass").value="";
}
// Clear Input field every time when SignIn button is clicked
function signIn(){
      document.getElementById("uname").value="";
      document.getElementById("pass").value="";
}
//Close the SignUp Modal on click of SignUp button(After successfull validation)
function signUpModal(){
    var fname = document.getElementById("fname").value;
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    var confPass = document.getElementById("confPass").value;
     if(fname!==""&&uname!==""&&pass!==""&&confPass!==""){
           document.getElementById("signUpModal").style.display="none";
         }    
}