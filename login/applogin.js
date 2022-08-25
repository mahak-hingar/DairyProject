if (!localStorage.getItem("user")) {
  document.getElementById("signup").style.display = "block";
  document.getElementById("signout").style.display = "none";
} else {
  document.getElementById("signup").style.display = "none";
  document.getElementById("signout").style.display = "block";
}
