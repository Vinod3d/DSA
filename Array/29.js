// function simplePasswordValidator(){
//     let password = 'Vinod123#$'
//     let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;
//     if (password.match(passwordRegex)) {
//         return true
//     } else{
//         return false
//     }
// }



function simplePasswordValidator(){
    let password = 'Vinod1253';
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;

    for(let char of password){
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            hasUpperCase = true;  // Check for uppercase letter
        } 

        else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            hasLowerCase = true;  // Check for lowercase letter
        }

        else if (!isNaN(Number(char))) {
            hasNumber = true;  // Check for digit
        }
    }

    if (hasLowerCase && hasUpperCase && hasNumber && password.length >= 8) {
        return true;
    } else {
        return false;
    }
}


console.log(
    simplePasswordValidator()
)

