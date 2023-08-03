module.exports = function toReadable (number) {
  let text;
    if (number < 20) {
        text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
        'sixteen', 'seventeen', 'eighteen', 'nineteen'] [number];
    } else if (number < 100) {
        let digit = String(number).split('');
        let text1;
        let text2;
        if (digit[0] == 2 || digit[0] == 3 || digit[0] == 4 || digit[0] == 5 || digit[0] == 6 || digit[0] == 7 || digit[0] == 8 || digit[0] == 9) {
            text1 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'] [digit[0]];
        }
        if (digit[1] == 1 || digit[1] == 2 || digit[1] == 3 || digit[1] == 4 || digit[1] == 5 || digit[1] == 6 || digit[1] == 7 || digit[1] == 8 || digit[1] == 9){
            text2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] [digit[1]];
        }
        text = `${text1} ${text2}`;
    } 
    return text;
}

// else if (number < 1000) {
//     let digit = number.split('');
//     let text3;
//     let text4;
//     if (digit[0] == /[1-9]/g){
//         text3 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] [digit[0]];
//     }
//     if (digit[1] == /[1-9]/g){
//         text4 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] [digit[1]];
//     }
//     text = `${text1} ${text2}`;
// }
