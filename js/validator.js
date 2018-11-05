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