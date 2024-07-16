//get the values from the users.
function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //parse our input into integers.
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //Check to see if they are in fact integers. 
    // TRUE AND TRUE
    // FALSE AND TRUE = FALSE
    //truthy
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) ){

        //generate the numbers
        let fizzArray = generateFizzBuzz(fizzValue, buzzValue);
        //display the numbers
        displayFizzBuzz(fizzArray);
    }
    else{
        //do something else
        alert("You must enter a Number!. Please correct your inputs.")
    }
}

//generate numbers
function generateFizzBuzz(fizzValue, buzzValue){

    let fizzArray = [];

     for(let index=1; index <= 100; index++){

        let className = "";

        if(index % fizzValue == 0 && index % buzzValue == 0){

            className = "fizzBuzz";

            fizzArray.push(className);
    
        }    
        else if(index % fizzValue == 0){
            
            className = "fizz";

            fizzArray.push(className);            
            
        }

        else if(index % buzzValue == 0){
            
            className = "buzz";

            fizzArray.push(className);

        }
        else{
            fizzArray.push(index);
        }
    }

    return fizzArray;
}

//display numbers
function displayFizzBuzz(fizzArray){

    let templateCols = "";

    //loop over an array
    for(let index=0; index < fizzArray.length; index++){

        let className = "";              

        templateCols += `<div class="col">${fizzArray[index]}</div>`;
    }   
    
    document.getElementById("resultsFizzBuzz").innerHTML = templateCols;{

    }
}
