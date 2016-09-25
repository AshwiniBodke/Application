function validateForm() {
    var x = document.forms["myform"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
