/* This program checks an email input field and ensures 
	that the input matches a valid email address*/
	
    const submitButton = document.querySelector('.submit');
	
    const alertMessage = document.querySelector('.error-message');
    
    const emailAlert = document.querySelector('.email-alert');
    
    const messageAlert = document.querySelector('.message-alert');
      
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        submitButton.addEventListener('click', e => { 
        
            var email = document.querySelector('#email').value;
            var message = document.querySelector('#text').value;
            validateEmail(email, message)	
        });
    
    
        function validateEmail(email, message) {
            // the validation constant contains the regex with which every email input is tested. 
            // See the constant at line 12 above.
    
            if (validation.test(email) && message !== '') {
                emailAlert.style.visibility = 'hidden';
                messageAlert.style.visibility = 'hidden';
                alertMessage.innerHTML = 'Thanks for your feedback';
            }
            else if (validation.test(email) && message === ''){
                emailAlert.style.visibility = 'hidden';
                messageAlert.style.visibility = 'visible';
                alertMessage.innerHTML = 'Please write a message'; 
            }
            else if (email === ''){
                emailAlert.style.visibility = 'visible';
                messageAlert.style.visibility = 'hidden';
                alertMessage.innerHTML = 'The e-mail field must not be empty';
            }
            else {
                emailAlert.style.visibility = 'visible';
                messageAlert.style.visibility = 'hidden';
                alertMessage.innerHTML = 'Please provide a valid email';
            }
        }	

        
 
        
    
