//take 1
// let superbowlWin = (record) => {
//     const found = record.find(record => record.result === "W");
//     return found.year;
// }



//take 2
//function called superbowlWin()
//accepts one argument, which is an array of objects
//record is the arrayofObjects in question, so when we call the function it would look like superbowlWin(record);

function superbowlWin(arrayofObjects) {
    //each object has two properties, a year and result

    let found = arrayofObjects.find(objects => objects.result === "W" ? `${objects.year}` : undefined);
    return found;

    //function uses find() to test each object to see if result is 'W' for win
    //return the `year` when the win occurred (if it occurred at all!
    //* If no win is found, it should return, sadly, `undefined`
}

//take 3
//maybe the array of objects result should be pushed into another function that says 
//if result = w, return year
//else return undefined??

// function superbowlWin(arrayOfObjects) {
//     //each object has two properties, a year and result

//     let result = arrayOfObjects.find(objects => somelogic )
// }       somelogic function {
//             if result === "W" then return objects.year
//             else return undefined

 //function uses find() to test each object to see if result is 'W' for win
    //return the `year` when the win occurred (if it occurred at all!
    //* If no win is found, it should return, sadly, `undefined`