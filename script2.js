function ageValidate() {
    //points the varible ageobj to the age data collection field on the web page
    var ageobj = document.getElementById("age");
    //sets age variable to be the number entered in the age collection field on the web page
    var age = ageobj.value;
    console.log("age");
    //checks to see if the age is less than 0 or greater than 120
    if(age>120||age<=0)
    //if it is, sends an alert saying the age entry is invalid
    {alert("Age entry invalid");}
}

//Returns a thank you when the form is submitted
function formSubmit() {
    alert("Thank you for your submission")
}