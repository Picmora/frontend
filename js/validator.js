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
	document.getElementById("wedding").selected="true";

}
function  Photography_2(){
	document.getElementById("engagement").selected="true";

}
function  Photography_3(){
document.getElementById("maternity").selected="true";

}
function Photography_4(){
document.getElementById("kids").selected="true";

}
function  Photography_5(){
document.getElementById("birthday").selected="true";

}
function  Photography_6(){
document.getElementById("pre-wedding").selected="true";

}