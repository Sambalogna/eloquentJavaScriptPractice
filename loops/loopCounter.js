//511 in base 8 is 777
// 000 is the 512 to this 8*8*8 loop
let count = ''
for(y=0; y<8; y++) {
    for(x=0; x<8; x++) {
        for(z=0; z<8; z++) {
            count += "("+y+""+x+""+z+""+")";
        }
        count+="\n"
    }
    count+="\n"
}
console.log(count)