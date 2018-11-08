function match(){
				if(document.getElementById('confirm_password').value!=""){
					document.getElementById('password').setAttribute("onkeyup","check()");
				}
			}

				function check(){
					
  						if (document.getElementById('password').value ==
    						document.getElementById('confirm_password').value) {
    							document.getElementById("submit").disabled = false;
								document.getElementById('message').innerHTML = '';
  								} else {
    							document.getElementById('message').style.color = 'Orange';
    							document.getElementById('message').innerHTML = 'Not Matching';
     							document.getElementById("submit").disabled = true;
  									}
						if(document.getElementById('confirm_password').value==""){
							document.getElementById('message').innerHTML = '';
						}
				}
function single(){
	document.getElementById("datepicker").disabled = false;
	document.getElementById("datepicker").placeholder = "Date";
	document.getElementById("datepicker").required = true;
	document.getElementById("datetimepicker3").disabled = true;
	document.getElementById("datepicker2").disabled = true;
	document.getElementById("datetimepicker").disabled = true;
}
function multi(){
	document.getElementById("datepicker").disabled = false;
	document.getElementById("datepicker").required = true;
	document.getElementById("datetimepicker3").disabled = false;
	document.getElementById("datetimepicker3").required = true;
	document.getElementById("datepicker2").disabled = false;
	document.getElementById("datepicker2").required = true;
	document.getElementById("datetimepicker").disabled = false;
	document.getElementById("datetimepicker").required = true;
}
function hourly(){
	document.getElementById("datepicker").placeholder = "Date";
	document.getElementById("datepicker").disabled = false;
	document.getElementById("datetimepicker3").disabled = false;
	document.getElementById("datetimepicker3").required = true;
	document.getElementById("datepicker2").disabled = true;
	document.getElementById("datetimepicker").disabled = false;
	document.getElementById("datetimepicker").required = true;
}
function single_modal(){
	document.getElementById("datepicker").disabled = false;
	document.getElementById("datepicker").placeholder = "Date";
	document.getElementById("datepicker").required = true;
	document.getElementById("datetimepicker3").disabled = true;
	document.getElementById("datepicker2").disabled = true;
	document.getElementById("datetimepicker").disabled = true;
}
function multi_modal(){
	document.getElementById("datepicker").disabled = false;
	document.getElementById("datepicker").required = true;
	document.getElementById("datetimepicker3").disabled = false;
	document.getElementById("datetimepicker3").required = true;
	document.getElementById("datepicker2").disabled = false;
	document.getElementById("datepicker2").required = true;
	document.getElementById("datetimepicker").disabled = false;
	document.getElementById("datetimepicker").required = true;
}
function hourly_modal(){
	document.getElementById("datepicker").placeholder = "Date";
	document.getElementById("datepicker").disabled = false;
	document.getElementById("datetimepicker3").disabled = false;
	document.getElementById("datetimepicker3").required = true;
	document.getElementById("datepicker2").disabled = true;
	document.getElementById("datetimepicker").disabled = false;
	document.getElementById("datetimepicker").required = true;
}
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();