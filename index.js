function validatePassword(pass1, pass2){
    if(pass1===pass2) {
        // If both passwords match, only pass1 will be checked
        // for the rest of the conditions since they are the same.
        if(pass1.length>=8){ 
            let number_instance=false;
            let uppercase_instance=false, lowercase_instance=false;
            let i=0;

            // Going through pass1 string to check for instances
            // of the required characters
            while(i!=pass1.length && !(number_instance==true && uppercase_instance==true && lowercase_instance==true)){
                let char = pass1.charAt(i);

                if(!isNaN(parseInt(char))){   // Checking for a number
                    number_instance = true;
                }else if(isNaN(char) && char===char.toUpperCase()){ // Checking for an uppercase letter
                    uppercase_instance = true;
                }else if(isNaN(char) && char===char.toLowerCase()){ // Checking for a lowercase letter
                    lowercase_instance = true;
                }

                i++;
            }

            // Now checking if all required characters are present in the password
            if(number_instance==true){
                if(uppercase_instance==true){
                    if(lowercase_instance==true){
                        console.log("The passwords are valid.\n")
                        return true;
                    }else{
                        console.log("The passwords must have at least 1 lowercase letter.\n");
                        return false;
                    }
                }else{
                    console.log("The passwords must have at least 1 uppercase letter.\n");
                    return false;
                }
            }else{
                console.log("The passwords must have at least 1 number.\n");
                return false;
            }
        }else{
            console.log("The passwords must have at least 8 characters.\n")
            return false;
        }
    }else{
        console.log("The passwords do not match.\n");
        return false;
    }
}

function reversePassword(password){
    let n = password.length-1;
    let reversed="";

    for(let i=n; i>-1; i--){
        reversed += password.charAt(i);
    }

    return reversed;
}

function storePassword(username, pass1, pass2){
    let newpass;

    if(validatePassword(pass1, pass2)){
        newpass = reversePassword(pass2);
    }else{
        newpass = pass1;
    }

    const user = {name: username, newpassword: newpass}
    return user;
}

console.log(storePassword("John", "Pass1234", "Pass1234")) // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")) // returns {name: "John", newpassword:"Pass123"}