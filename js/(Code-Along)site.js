//(Walkthrough!!) Solution
function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let stopValue = document.getElementById("stopValue").value;

    //parse our input into integers.
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    stopValue = parseInt(stopValue);

    //Check to see if they are in fact integers. 
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue) ){
        //generate fizzBuzzA
        let fbValues = generateFizzBuzzC(fizzValue, buzzValue, stopValue);
        //Display fizzBuzz
        displayValues(fbValues);
    }    
        
}

//(Walkthrough!!) Solution
//generate fizz buzz values with if statement.
//Different from the values passed from getValues function.
// function generateFizzBuzzA(fValue, bValue, sValue){
//     let fbValues = [];

//     //generate fb with a loop and if statements.
//     for(let i = 1; i<= sValue; i++){
//         if (i % fValue == 0 && i % bValue == 0){
//             fbValues.push("fizzBuzz");
//         } else if(i % fValue == 0){
//             fbValues.push("Fizz");
//         } else if(i % bValue == 0){
//             fbValues.push("Buzz");
//         } else {
//             fbValues.push(i);
//         }
//     }
    
//     return fbValues;

// }

//(Walkthrough!!) Solution (2)
// function generateFizzBuzzB(fValue, bValue, sValue){
//     let fbValues = [];
//     let Fizz = false;
//     let Buzz = false;

//     for (let i = 1; i <= sValue; i++){
//         Fizz = (i % fValue == 0);
//         Buzz = (i % bValue == 0);
//         switch (true) {
//             case Fizz && Buzz: {
//                 fbValues.push(`FizzBuzz`);
//                 break;
//             }
//             case Fizz: {
//                 fbValues.push(`Fizz`);
//                 break;
//             }
//             case Buzz: {
//                 fbValues.push(`Buzz`);
//                 break;
//             }
//             default: {
//                 fbValues.push(i);
//                 break;
//             }
//         }
//     }

// }

//(Walkthrough!!) Solution (3)
function generateFizzBuzzC(fValue, bValue, sValue){
    let fbValues = [];

    for (let i = 1; i <= sValue; i++){
        let value = (i % fValue == 0 ? "Fizz" : "") + ( i % bValue == 0 ? "Buzz" : "") || i;
        fbValues.push(value);
    }

    return fbValues;
}

//(Walkthrough!!) Solution
//Display the values on th page
function displayValues(fbValues){
    let results = document.getElementById("resultsData");
    let content = "";
    // results.innerHTML = "";

    //loop over the fbValues array
    for(let i = 0; i< fbValues.length; i++){

        let dataValue = fbValues[i];
        let cssClass ="";
        // let content ="";
        

        if(Number.isInteger(dataValue)){
            cssClass="noFB";
        } 
        else{
            cssClass = dataValue;
        }

        let divElement = `<div class="col ${cssClass}">${dataValue}</div>`;
        content += divElement;
    }

    results.innerHTML = content;
}