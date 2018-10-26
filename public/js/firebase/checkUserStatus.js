firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var currentFileName = location.href.split("/").slice(-1);

    //For index.html
    if(currentFileName == "index.html"){
      var userId = user.uid;
      return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        document.getElementById("loginLink").text = "Hey, " + snapshot.val().fullName +"!";
        // ...
      });
    }else if(currentFileName == "login.html"){
      console.log("login.html")
    }else{
      //Do Same for other pages or create new javascript file for each page
    }


  }else {
      // No user is signed in.
    }
});
