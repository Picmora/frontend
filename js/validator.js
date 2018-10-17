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
function  Photography_1(){
	document.getElementById("wedding").selected=true;
	console.log();
	document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function  Photography_2(){
	document.getElementById("engagement").selected=true;
	document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}
function  Photography_3(){
document.getElementById("maternity").selected=true;
document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}
function Photography_4(){
document.getElementById("kids").selected=true;
document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}
function  Photography_5(){
document.getElementById("birthday").selected=true;
document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}
function  Photography_6(){
document.getElementById("pre-wedding").selected=true;
document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

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
	document.getElementById("datepicker").disabled = true;
	document.getElementById("datetimepicker3").disabled = false;
	document.getElementById("datetimepicker3").required = true;
	document.getElementById("datepicker2").disabled = true;
	document.getElementById("datetimepicker").disabled = false;
	document.getElementById("datetimepicker").required = true;
}