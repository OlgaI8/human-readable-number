module.exports = function toReadable(number) {
    let text;
    if (number < 20) {
        text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
            'sixteen', 'seventeen', 'eighteen', 'nineteen'][number];
    } else if (number == 20 || number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80 || number == 90) {
        let digit = String(number).split('');
        let text1;
        if (digit[0] == 2 || digit[0] == 3 || digit[0] == 4 || digit[0] == 5 || digit[0] == 6 || digit[0] == 7 || digit[0] == 8 || digit[0] == 9) {
            text1 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][digit[0] - 2];
        }
        text = `${text1}`;
    } else if (number < 100) {
        let digit = String(number).split('');
        let text1;
        let text2;
        if (digit[0] == 2 || digit[0] == 3 || digit[0] == 4 || digit[0] == 5 || digit[0] == 6 || digit[0] == 7 || digit[0] == 8 || digit[0] == 9) {
            text1 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][digit[0] - 2];
        }
        if (digit[1] == 1 || digit[1] == 2 || digit[1] == 3 || digit[1] == 4 || digit[1] == 5 || digit[1] == 6 || digit[1] == 7 || digit[1] == 8 || digit[1] == 9) {
            text2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][digit[1] - 1];
        }
        text = `${text1} ${text2}`;
    } else if (number == 100 || number == 200 || number == 300 || number == 400 || number == 500 || number == 600 || number == 700 || number == 800 || number == 900) {
        let digit = String(number).split('');
        let text1;
        if (digit[0] == 1 || digit[0] == 2 || digit[0] == 3 || digit[0] == 4 || digit[0] == 5 || digit[0] == 6 || digit[0] == 7 || digit[0] == 8 || digit[0] == 9) {
            text1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][digit[0] - 1];
        }
        text = `${text1} hundred`;
    } else if ((number > 100 && number < 110) || (number > 200 && number < 210) || (number > 300 && number < 310) || (number > 400 && number < 410) || (number > 500 && number < 510) || (number > 600 && number < 610) || (number > 700 && number < 710) || (number > 800 && number < 810) || (number > 900 && number < 910)) {
        let digit = String(number).split('');
        let text1;
        let text2;
        let text3;
        if (digit[0] == 1 || digit[0] == 2 || digit[0] == 3 || digit[0] == 4 || digit[0] == 5 || digit[0] == 6 || digit[0] == 7 || digit[0] == 8 || digit[0] == 9) {
            text1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][digit[0] - 1];
        }
        if (digit[1] == 0) {
            text2 = '';
        }
        if (digit[2] == 1 || digit[2] == 2 || digit[2] == 3 || digit[2] == 4 || digit[2] == 5 || digit[2] == 6 || digit[2] == 7 || digit[2] == 8 || digit[2] == 9) {
            text3 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][digit[2] - 1];
        }
        text = `${text1} hundred ${text2}${text3}`;
    } else if ((number >= 110 && number <= 119) || (number >= 210 && number <= 219) || (number >= 310 && number <= 319) || (number >= 410 && number <= 419) || (number >= 510 && number <= 519) || (number >= 610 && number <= 619) || (number >= 710 && number <= 719) || (number >= 810 && number <= 819) || (number >= 910 && number <= 919)) {
        let digit = String(number).split('');
        let text1;
        let text2;
        if (digit[0] == 1 || digit[0] == 2 || digit[0] == 3 || digit[0] == 4 || digit[0] == 5 || digit[0] == 6 || digit[0] == 7 || digit[0] == 8 || digit[0] == 9) {
            text1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][digit[0] - 1];
        }
        if ((digit[1] == 1 && digit[2] == 0) || (digit[1] == 1 && digit[2] == 1) || (digit[1] == 1 && digit[2] == 2) || (digit[1] == 1 && digit[2] == 3) || (digit[1] == 1 && digit[2] == 4) || (digit[1] == 1 && digit[2] == 5) || (digit[1] == 1 && digit[2] == 6) || (digit[1] == 1 && digit[2] == 7) || (digit[1] == 1 && digit[2] == 8) || (digit[1] == 1 && digit[2] == 9)) {
            text2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'][digit[2]];
        }
        text = `${text1} hundred ${text2}`;
    } else if (number < 1000) {
        let digit = String(number).split('');
        let text1;
        let text2;
        let text3;
        if (digit[0] == 1 || digit[0] == 2 || digit[0] == 3 || digit[0] == 4 || digit[0] == 5 || digit[0] == 6 || digit[0] == 7 || digit[0] == 8 || digit[0] == 9) {
            text1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][digit[0] - 1];
        }
        if (digit[1] == 2 || digit[1] == 3 || digit[1] == 4 || digit[1] == 5 || digit[1] == 6 || digit[1] == 7 || digit[1] == 8 || digit[1] == 9) {
            text2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][digit[1] - 2];
        }
        if (digit[2] == 1 || digit[2] == 2 || digit[2] == 3 || digit[2] == 4 || digit[2] == 5 || digit[2] == 6 || digit[2] == 7 || digit[2] == 8 || digit[2] == 9) {
            text3 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][digit[2] - 1];
        }
        text = `${text1} hundred ${text2} ${text3}`;
    }
    return text;
}