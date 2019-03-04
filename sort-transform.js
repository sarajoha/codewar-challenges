'use strinct';

function sortTransform(arr) {
      
    let wordList = []

    let word1 = transform(arr)

    let arrAscii = arr_to_ascii(arr)
    let asciiWord = [arrAscii[0], arrAscii[1], arrAscii[arrAscii.length-2], arrAscii[arrAscii.length-1]]
    let word4 = asciiWord.join("")

    arr.sort(function(a, b){return a-b});
    let word2 = transform(arr)
    
    arr.reverse();
    let word3 = transform(arr)
    
    let ansList = wordList.concat([word1, word2, word3, word4])
    
    return ansList.join("-")

}
    
function transform(arr) {
    let numlist = [arr[0], arr[1], arr[arr.length-2], arr[arr.length-1]]
    let word = []
    for (let x = 0; x < numlist.length; x++) {
        let letter = String.fromCharCode(numlist[x])
        word.push(letter)
    }

    return word.join("")

}

function arr_to_ascii(arr) {
    let ascii_list = []

    for (let x = 0; x < arr.length; x++) {
        let letter = String.fromCharCode(arr[x])
        ascii_list.push(letter)
    }
    ascii_list.sort();

    return ascii_list

}

console.log(sortTransform([51, 62, 73, 84, 95, 100, 99, 126]))
console.log('3>c~-3>d~-~d>3-3>d~')