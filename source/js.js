basic.forever(() => {
    let degrees = input.compassHeading();
    if (degrees < 45 || degrees > 315) {
        basic.showString("N");
    }
    else if (degrees < 135) {
        basic.showString("E");
    }
    else if (degrees < 225) {
        basic.showString("S");
    }
    else {
        basic.showString("W");
    }
});

//https://makecode.microbit.org/projects/compass
//https://www.flaticon.com/free-icon/compass_1218700?term=compass&page=1&position=55
