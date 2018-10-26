function submitQueryForm(name, email, imageUrl) {
  console.log("Submitting form");

  var database = firebase.database();
  if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
  }

  //Values for db

  uid = firebase.auth().currentUser.uid;
  if(uid == null){
      uid=Date.now();
  }
  eventTypeId = document.getElementById('eventType');

 
  firebase.database().ref('users/' + uid + '/new/' + Date.now()).set({
    durationType: document.querySelector('input[name="duration"]:checked').value,
    eventType:  eventTypeId.options[eventTypeId.selectedIndex].value,
    fromDate : document.getElementById('datepicker').value,
    toDate : document.getElementById('datepicker2').value,
    fromTime : document.getElementById('datetimepicker3').value,
    toDate : document.getElementById('datetimepicker').value,
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    phoneNo : document.getElementById('phoneNo').value
  });

}
