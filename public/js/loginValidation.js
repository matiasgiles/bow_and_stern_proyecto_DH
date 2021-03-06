window.addEventListener("load", function(){

    const form = document.querySelector(".create-form")
    
    // Los inputs
    const inputUser = form.querySelector("#username")
    const inputPassword = form.querySelector("#pass")
    
    // Error msgs
    const errorMsg= document.querySelector(".errors")
        errorMsg.style.display="none"

    let errorUser = ''
    let errorPassword = ''

   
    function resetErrors(){
        errorUser = ''
        errorPassword = ''
    }
    // User mail-validation 
    function validateMail (inputUser) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(inputUser).toLowerCase());
    }
    
    function formValidation (e){
        let hasErrors = false
        resetErrors()

        if(!validateMail(inputUser.value)){
            hasErrors = true
            errorUser = "Enter a valid email."
        }
    
        if (inputPassword.value.length < 8) {
            hasErrors = true
            errorPassword = "Password incorrect, please try again."
        }
    
        if (hasErrors) {
            errorMsg.innerHTML = "Please solve the following issues: </br>" + errorUser + ' ' + errorPassword
            errorMsg.style.display='block'
            errorMsg.style.color='red'
            errorMsg.style.fontSize= "13px"
            e.preventDefault()
        } 
            
    }
    
form.addEventListener("submit", formValidation)
    
}) 