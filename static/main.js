// JAVASCRIPT FOR REVEALING THE PASSWORD
function myFunction2() {
var x = document.getElementById("showpasswd");
if (x.type === "password") {
    x.type = "text";
    } else {
        x.type = "password";
        }
    }
function myFunction() {
var x = document.getElementById("myInput");
if (x.type === "password") {
    x.type = "text";
    } else {
        x.type = "password";
        }
    }
