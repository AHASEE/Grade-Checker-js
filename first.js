 var maths = +prompt("Insert your Maths marks" );
 var english = +prompt("Insert your English marks" );
 var physics = +prompt ( "insert your Physics Marks");
 var Chemistry = +prompt ( "insert your Chemistry Marks");
 var Biology = +prompt ( "insert your  Biology Marks")

 
                    
// Check for A+ Grade
if (470 <= maths + english + physics + Chemistry + Biology) {
    alert("you got A+ Grade");

 // check for A Grade
} else if (431< maths + english + physics + Chemistry + Biology) {
    alert("you got A Grade");
    alert("you are pass");
}

// Check for B Grade
if (430 > maths + english + physics + Chemistry + Biology && 310 <= maths + english + physics + Chemistry + Biology) {
    alert("you got B Grade");
    alert("you are pass");
}

// Check for C Grade
if (309 > maths + english + physics + Chemistry + Biology && 291 <= maths + english + physics + Chemistry + Biology) {
    alert("you got C Grade");
    alert("you are pass");
}

// Check for D Grade
if (290 > maths + english + physics + Chemistry + Biology && 270 <= maths + english + physics + Chemistry + Biology) {
    alert("you got D Grade");
    alert("you are pass");
}

// Check for Fail
if (269 > maths + english + physics + Chemistry + Biology ) {
    alert("you are fail");
}
// total percentage//
let totalMarks= english + maths + physics + Chemistry + Biology;
let maxMark = 500;
let percentage = (totalMarks/ maxMark) * 100;

// Display total marks
alert("Total marks : " + (maths + english + Biology + physics + Chemistry)+"\n"+
"percentage : " +percentage +"%\n"+
"maths      : " +maths   +"\n"+
"biology    : " +Biology +"\n"+
"physics    : " +physics  +"\n"+
"english    : " +english  +"\n"+
"Chemistry  : " +Chemistry 
);

                   
  