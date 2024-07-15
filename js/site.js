//get the values from the users.
function getValues(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse our input into integers.
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //Check to see if they are in fact integers. 
    // TRUE AND TRUE
    // FALSE AND TRUE = FALSE
    //truthy
    if(Number.isInteger(startValue) && Number.isInteger(endValue) ){

        //generate the numbers
        let number = generateFizzBuzz(startValue, endValue);
        //display the numbers
        displayFizzBuzz(number);
    }
    else{
        //do something else
        alert("You must enter a Number!. Please correct your inputs.")
    }
}

//generate numbers
function generateFizzBuzz(sValue, eValue){

    let numbers = [];

    for(i = sValue; i<=eValue; i++){
        numbers.push(i);
    }

    return numbers;
}

//display numbers
function displayFizzBuzz(numbers){

    let templateCols = "";

    //check for if the number is even.
    //"<div>0</div>"
    //loop over an array
    for(let index=0; index < numbers.length; index++){

        let className = "";

        if(numbers[index] % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }
        templateCols += `<div class="${className}">${numbers[index]}</div>`;
    }

    document.getElementById("resultsFizzBuzz").innerHTML = templateCols;{

    }
}
