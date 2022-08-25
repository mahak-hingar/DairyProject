
const firebaseConfig = {
    apiKey: "AIzaSyBtz4VbITYXmaoGkeyVo0-Cg3TZEPxINtU",
    authDomain: "dairy-dream.firebaseapp.com",
    projectId: "dairy-dream",
    storageBucket: "dairy-dream.appspot.com",
    messagingSenderId: "1070692566037",
    appId: "1:1070692566037:web:d1cc40000f48b608997a1c",
    measurementId: "G-VLRPLKZFLQ"
  };
firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()


  //Signup Function
  let signUpButton = document.getElementById('signup')
  signUpButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")
    
    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error code", errorCode)
      console.log("error Message", errorMessage)
    });
  })








  let signInButton = document.getElementById('signin')
  signInButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth.signInWithEmailAndPassword(email.value, password.value) 
    .then((userCredential) => {
      // location.reload();
      // Signed in 
      var user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user))
      console.log("user",user.email)
      window.location = "../home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert("error code", errorCode)
      alert( errorMessage)
    });
   })



//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function(user) {
  if (user) {

    var email = user.email
  
    var users = document.getElementById("user")
    var text = document.createTextNode(email);

    users.appendChild(text);

    console.log(users)
    window.location("./home.html");
   
  } else {
    
    
  }
})