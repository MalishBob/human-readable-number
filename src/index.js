module.exports = function toReadable (number) {
    let number_string = number.toString();

    if(number <= 20) {
        return digit_str(number);
    } else if(number > 20 && number <= 99) {
        if(number_string[1] !== '0'){
            return digit_str(parseInt(number_string[0]+"0"))+" "+digit_str(parseInt(number_string[1]));
        } else {
            return digit_str(parseInt(number_string[0]+"0"));
        }
    } else if(number >= 100 && number <= 999) {

        if(parseInt(number_string[1]+number_string[2]) > 0 && parseInt(number_string[1]+number_string[2]) <= 20) {
            return digit_str(parseInt(number_string[0]))+" hundred "+digit_str(parseInt(number_string[1]+number_string[2]));
        } else if(number_string[1] !== '0' && number_string[2] !== '0'){
            return digit_str(parseInt(number_string[0]))+" hundred "+digit_str(parseInt(number_string[1]+"0"))+" "+digit_str(parseInt(number_string[2]));
        } else if(number_string[1] !== '0' && number_string[2] === '0') {
            return digit_str(parseInt(number_string[0]))+" hundred "+digit_str(parseInt(number_string[1]+"0"));
        } else if(number_string[1] === '0' && number_string[2] !== '0') {
            return digit_str(parseInt(number_string[0]))+" hundred "+digit_str(parseInt(number_string[2]));
        } else if(number_string[1] === '0' && number_string[2] === '0') {
            return digit_str(parseInt(number_string[0]))+" hundred";
        }
    }
}

let digit_str = (num) => {
    switch (num) {
        case 0:
            return 'zero';
            break;
        case 1:
            return 'one';
            break;
        case 2:
            return 'two';
            break;
        case 3:
            return 'three';
            break;
        case 4:
            return 'four';
            break;
        case 5:
            return 'five';
            break;
        case 6:
            return 'six';
            break;
        case 7:
            return 'seven';
            break;
        case 8:
            return 'eight';
            break;
        case 9:
            return 'nine';
            break;
        case 10:
            return 'ten';
            break;
        case 11:
            return 'eleven';
            break;
        case 12:
            return 'twelve';
            break;
        case 13:
            return 'thirteen';
            break;
        case 14:
            return 'fourteen';
            break;
        case 15:
            return 'fifteen';
            break;
        case 16:
            return 'sixteen';
            break;
        case 17:
            return 'seventeen';
            break;
        case 18:
            return 'eighteen';
            break;
        case 19:
            return 'nineteen';
            break;
        case 20:
            return 'twenty';
            break;
        case 30:
            return 'thirty';
            break;
        case 40:
            return 'forty';
            break;
        case 50:
            return 'fifty';
            break;
        case 60:
            return 'sixty';
            break;
        case 70:
            return 'seventy';
            break;
        case 80:
            return 'eighty';
            break;
        case 90:
            return 'ninety';
            break;
        case 100:
            return 'hundred';
            break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        // case 50:
        //     return 'eleven';
        //     break;
        default:
            break;
    }
}
