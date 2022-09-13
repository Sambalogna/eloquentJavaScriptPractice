//solution 
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

//prints grid not chessboard
//let size = 8
// let output = ''
// for(i=0;i<64; i++){
//     if(i%2===0) output += ' ';
//     if(i%2!=0 ) output += '#';
//     if(i%8 === 0) output+= "\n";
    
// }
// console.log(output)
