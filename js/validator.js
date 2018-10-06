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
