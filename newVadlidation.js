function validate() {
    var numbers = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    if (document.Faculty.textnames.value == "") {
        alert("Faculty Name  must not be empty!");
        document.Faculty.textnames.focus();
        return false;
    }

    if (document.Faculty.textnames.value.match(numbers)) {
        alert("Faculty name must be in Alphabets..");
        document.Faculty.textnames.focus();
        return false;
    }
    if (document.Faculty.textid.value == "") {
        alert("Faculty id cannot be empty..");
        document.Faculty.textid.focus();
        return false;
    }

    if (document.Faculty.textid.value.match(letters)) {
        alert("Faculty id must be in digits..");
        document.Faculty.textid.focus();
        return false;
    }


    if ((Faculty.Gender[0].checked == false) && (Faculty.Gender[1].checked == false)) {
        document.Faculty.Gender.focus();
        alert("Choose your Gender.");
        return false;
    }

    if (document.Faculty.dob.value == "") {
        alert("Please provide your Date of birth!");
        document.Faculty.dob.focus();
        return false;
    }

    var email = document.Faculty.emailid.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID");
        alert("Invalid emmail id");
        document.Faculty.emailid.focus();
        return false;
    }
    if (document.Faculty.mobileno.value == "" ||
        isNaN(document.Faculty.mobileno.value) ||
        document.Faculty.mobileno.value.length != 10) {
        alert("Please provide a Mobile No in the format 123.");
        document.Faculty.mobileno.focus();
        return false;
    }

    if (document.Faculty.address.value == "") {
        alert("Please Enter your Address!");
        document.Faculty.address.focus();
        return false;
    }



    if (document.Faculty.pincode.value == "" ||
        isNaN(document.Faculty.pincode.value) ||
        document.Faculty.pincode.value.length != 6) {

        alert(" pincode must be only 6 digits.");
        document.Faculty.pincode.focus();
        return false;
    }


    if (document.Faculty.pincode.value.match(letters)) {
        alert("Invalid pin code..");
        document.Faculty.pin.focus();
        return false;
    }
    return (true);
}