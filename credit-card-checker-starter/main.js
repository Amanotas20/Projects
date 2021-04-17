
function arrayParser(){
    let creditCNumber = (document.getElementById("cardCheck").value).split('').map(x=>+x)
    return creditCNumber
}    

// Add your functions below:
function validateCred(){
    /*should return true when an array contain digits of a valid credit card
    and false when it is invalid*/
    let array = arrayParser();
    let checkArray = [array[array.length-1]];
    let sumOfArray = 0;
    let visited = 0;
    
    for (let i = array.length-2; i >= 0; i--){
        if (visited === 0){
            if (array[i]*2 > 9){
                checkArray.push(array[i]*2 - 9);
                visited++
            }
            else {
                checkArray.push(array[i]*2)
                visited++
            }
        }
        else {
            checkArray.push(array[i])
            visited--
        }  
    }        
    sumOfArray = checkArray.reduce((accumulator, currentValue) => accumulator + currentValue)

    if (sumOfArray%10 === 0){        
        document.getElementById("outputMessage").innerText = "VALID CREDIT CARD";
        document.getElementById("outputMessage").style.color = "green"
    }
    else{
        document.getElementById("outputMessage").innerText = "INVALID CREDIT CARD";
        document.getElementById("outputMessage").style.color = "red"
    }   
    }
