// let inputString = '1568141291110137';

// mysteryRange(inputString,10) // [6,15]

// // The 10 numbers in this string are:
// // 15 6 8 14 12 9 11 10 13 7
// // Therefore the range of numbers is from 6 to 15
// [['6291211413114538107',14],[1,14]],
// [['13161820142119101112917232215',15],[9,23]],
// [['2318134142120517221910151678611129',20],[4,23]],
// [['10610211511099104113100116105103101111114107108112109',18],[99,116]],
// [['1721532418565922162558663126649136347436733301144143236653738464135820194215516155541239452852623450572927602348104049',60],[8,67]]
//Tests
//let inputString = '6291211413114538107';

//console.log(mysteryRange(inputString,14)) // [1,14]
// [ 6, 2, 9, 2, 4, 3, 14, 5, 3, 8, 10, 7 ]
// [ 6, 2, 9, 12, 11, 4, 13, 11, 4, 5, 3, 8, 10, 7 ]
//[ 6, 2, 9, 12, 11, 4, 13, 11, 4, 5, 3, 8, 10, 7 ]

function mysteryRange(inputString,range){
    let inRange = []//List of Accepted Integers
    let stringArray = inputString.split("")
    let intArray = stringToInt(stringArray) //Converts the input string to a list of numbers
    //Scans list to compare numbers
    for (let x = 0; x < intArray.length-1; x++){
        let currentInt = intArray[x]
        let nextNumber = 1
        // [['6291211413114538107',14],[1,14]],                
        if (checkRange(currentInt,intArray[x+nextNumber],range) && x != intArray.length-2 && x < intArray.length-1){
            let newNumber = concatNumbers(currentInt,intArray[x+nextNumber])
            nextNumber++            
            if (checkRange(newNumber, intArray[x+nextNumber], range)) {
                let newNumber2 = concatNumbers(newNumber, intArray[x+nextNumber])
                nextNumber++                
                if (checkRange(newNumber2, intArray[x+nextNumber], range)) {
                    let newNumber3 = concatNumbers(newNumber2, intArray[x+nextNumber])                    
                }
                 else {
                    // newNumber inRange, push currentInt
                    if (inRange.includes(newNumber)) {
                        inRange.push(currentInt)
                    } else {
                        inRange.push(parseInt(newNumber))
                        x++ 
                    }
                }
            }
            else {
                // inRange.push(currentInt) //currentInt
                if ((Math.abs(newNumber - getMin(inRange)) < range )){
                    inRange.push(newNumber)
                    x++
                }else{
                    inRange.push(currentInt)
                }
            }
        } else {
            inRange.push(currentInt)
        }
    }
    inRange.push(intArray[intArray.length-1])
    
    let minVal = Math.min.apply(null, inRange)
    let maxVal = Math.max.apply(null, inRange)
    let minMax = []
    minMax.push(minVal, maxVal)
    //console.log("minMax: " + minMax)
    return minMax
}
// Checks the range of the input numbers
function checkRange(int1,int2,range){
    let diff = Math.abs(int1-int2)
    if (diff <= range) {
        return true
    } else {
        return false
    }
}
// Converts String of numbers into Integers
function stringToInt(stringArray){
    let intArray = []
    for (let x = 0; x < stringArray.length; x++){
        intArray.push(parseInt(stringArray[x]))
    }
    return intArray
}
// Gets the smallest Integer in the list of passed Integers
function getMin(list){
    let min = Math.min.apply(null,list)
    return min    
}

function concatNumbers(currentInt,nextInt){
    let newNumber = "" + currentInt + nextInt
    newNumber = parseInt(newNumber)
    return newNumber
}


