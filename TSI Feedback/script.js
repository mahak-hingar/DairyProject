function SendMail(){
  var params ={
    name: document.getElementById("name").value,
    concern: document.getElementById("concern").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    pin: document.getElementById("pin").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    message: document.getElementById("message").value,
  }
  emailjs.send("service_1bzqnvi","template_3boa328",params).then(function(res){
    alert("Success ! "+res.status);
  })
}
