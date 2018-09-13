
let friends = ['Blake', 'Katie', 'Micah', 'Aubree', 'Randy'];

let chorus = 'lines of code in the file,lines of code; strikes one out, clears it all out';

let verseOne ='lines of code in the file,';

let verseTwo ='lines of code;';

let verseThree ='strikes one out,';

let verseFour ='clears it all out,';

let climax ='no more lines of code in the file';

let climaxOne ='line of code in the file,';

let climaxTwo ='line of code;';


for(var i = 0; i < friends.length; i++) {
    console.log(friends[i] +':')
    for(j = 99; j > 0; j--) {
        if(j === 2) {
            console.log(j + ' ' +  verseOne + ' ' + j + ' ' + verseTwo + ' ' + friends[i] + ' ' + verseThree + verseFour + ' ' + (j - 1) + ' ' + climaxOne);
        } else if (j === 1) {
            console.log(j + ' ' + climaxOne + ' ' + j + ' ' + climaxTwo + ' ' + friends[i] + ' ' + verseThree + verseFour + climax);
        } else {
            console.log(j + ' ' + verseOne + ' ' + j + ' ' + verseTwo + ' ' + friends[i] + ' ' + verseThree + verseFour + ' ' + j + ' ' + verseOne);
        }

        
    }    
        
}
