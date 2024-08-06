

/*

Write a function called checkExists. It will take in a string and a helper function called myIncludes.
The function should invoke the myIncludes helper and return the results of that function if it is true or false. If the helper returns an error message
it should return that error message.


HINT: You can maybe check for the type of the return


*/


// Define the chekExists Function
function checkExists(str, myIncludes) {
    // This calls myIncudes with the provided string
    const result = myIncludes(str);

    //  Check the type of result and return accordingly
    if (typeof result === 'boolean') {
    return result;
    } else {
    return result; //Error messsage if it's a string
    }

}


// To invoke means to call (call means to run the code) or execute (this also means to run the code) a function. In this context, it means to run tbe `myIncludes` function.
// `myIncludes` is the name of the function I am calling. It is a helper function already defined in my code.
// An arguement is a value I pass to a function when I call it. A string arguement is specifically a piece of text data I give to the function.












// do not modify this helper function
function myIncludes(str){
    let vipList = [
        "Anthony",
        "Sam",
        "Gabe",
        "Zaviar",
        "Vincent",
        "Alyssa",
        "Alexi",
        "Kait"
    ];

    if(typeof str !== str){
        return "You did not pass in a valid string";
    } else{
        return vipList.includes(str);
    }
};



console.log(checkExists("Anthony", myIncludes)); // true
console.log(checkExists("Sam", myIncludes)); // true
console.log(checkExists("Cait", myIncludes)); // false
console.log(checkExists("Edward", myIncludes)); // false
console.log(checkExists(1)); // "You did not pass in a valid string"
