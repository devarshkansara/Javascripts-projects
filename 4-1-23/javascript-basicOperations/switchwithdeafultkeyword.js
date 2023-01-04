//default keyword specifies the code to run if there is no case match:

switch(new Date().getDay()) {
    case 6:
    text = "Today is Saturday";
    break;
    case 0:
        text = "Today is Sunday";
        break;
        default:
            text = "Looking forward to the Weekend";
}
console.log(text);


//default case does not have to be the last case in a switch block. 