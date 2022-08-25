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
  
   console.log(auth)
  
  
  
  let signOutButton = document.getElementById("signout")
  signOutButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    localStorage.removeItem("user");
    e.preventDefault()
    console.log("clicked")
    
    auth.signOut()
    alert("Signed Out")
    window.open("../home.html");
  })