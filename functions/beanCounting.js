// function countBs(x, y) {
//     let count = 0
//     for(i=0; i<x.length; i++){
//         if(x[i]===y)
//         count++
//     }
//     return count
// }
// console.log(countChar('BumBleBee', 'B'))
// function countChar(str, letter){
//     return str.length && countBs(str,letter)
// }
// console.log(countChar('BumBleBee', 'm'))

//solution 
function countChar(string, char){
    let counted = 0
    for(let i = 0; i< string.length; i++){
        if(string[i] === char){
            counted+=1
        }
    }
    return counted;
}
function countBs(string){
    return countChar(string, "B");
}
console.log(countBs("buMbLEBEE"))
console.log(countChar('khaki',"k"))