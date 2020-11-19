/* This program checks an email input field and ensures 
	that the input matches a valid email address*/
	
    const submitButton = document.querySelector('.submit');
	
    const alertMessage = document.querySelector('.error-message');
    
    const alertImage = document.querySelector('.icon-error');
      
    const message = document.querySelector('#text');
    
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        submitButton.addEventListener('click', e => { 
        
            var email = document.querySelector('#email').value;
            verifyFields(message)
            validateEmail(email)	
        });
    
    
        function validateEmail(email) {
            // the validation constant contains the regex with which every email input is tested. 
            // See the constant at line 10 above.
    
            if (validation.test(email)) {
                alertImage.style.visibility = 'hidden';
                submitButton.setAttribute('href', '#');
            }
            else {
                  alertImage.style.visibility = 'visible';
                  alertMessage.innerHTML = 'Please provide a valid email';
                  submitButton.removeAttribute('href', '#');
            }
        
        }	
        
        function verifyFields(message){
            if (message=""){
                alertMessage.innerHTML= 'Please fill the message field'
            }
            else{
                alertMessage.innerHTML = 'Thanks for your feedback';
            }
        }
        
    