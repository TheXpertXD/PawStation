$(document).ready(function () {
    $("#submit").click(function (e) {
        e.preventDefault();
        $("#thank").show();
        return false;
    });
});


function isValid() {
    var name = document.getElementById('name').value;
    var city = document.getElementById('city').value;
    var email = document.getElementById('email');
    if (name==null || name=="" || city==null || city=="" 
        || email==null || email=="") {
        alert("Input missing/required");
        return false;
    }
}