    "use strict";
    alert( 'Hello, world!' );

    // this comment takes up a line
    alert(6 +
    1
    + 3);

    let user = 'John';
    let age = 25;
    let message = 'Hello';
    alert(message); // Hello World

    const COLOR_RED = "#F00";
    const COLOR_GREEN = "#0F0";
    const COLOR_BLUE = "#00F";
    const COLOR_ORANGE = "#FF7F00";
    // ...when we need to pick a color
    let color = COLOR_BLUE;
    alert(color); // #FF7F00

    let str = "Hello";
    let str2 = 'Single quotes are ok too';
    let phrase = `can embed another ${str}`;
    alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

    let nameFieldChecked = true; // yes, name field is checked
    let ageFieldChecked = false; // no, age field is not checked
    alert(age); // shows "undefined"

    let value = true;
    alert(typeof value); // boolean

    value = String(value); // now value is a string "true"
    alert(typeof value); // string

    alert( "6" / "2" ); // 3, strings are converted to numbers

    alert( Number("123") ); // 123
    alert( Number("123z") ); // NaN (error reading a number at "z")
    alert( Number(true) ); // 1
    alert( Number(false) ); // 0

    alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
    alert( 8 % 3 ); // 2, a remainder of 8 divided by 3.

    let s = "my" + "string";
    alert(s); // mystring

    let apples = "2";
    let oranges = "3";
    alert(apples + oranges); // "23", the binary plus concatenates strings

