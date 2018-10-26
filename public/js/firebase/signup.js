function signup(){
  console.log("Signing up");

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user) {
    //User successgully signed up
    console.log(firebase.auth().currentUser.uid)
    var database = firebase.database();
    var data = {
        email: email,
        phoneNumber: document.getElementById("phonenumber").value,
        fullName: document.getElementById("fullname").value,
        id:firebase.auth().currentUser.uid
    }
    database.ref("users/"+firebase.auth().currentUser.uid).set(data).then(function(ref) {//use 'child' and 'set' combination to save data in your own generated key
        console.log("Saved");
        window.location.href = "http://example.com/loggedin";
    }, function(error) {
        console.log(error);
    });
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
