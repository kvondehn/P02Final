
function myFunction() {
    var x = document.getElementsByClassName("menuitem");
    console.log(x);
    for (i=0; i<x.length; i++){
        console.log(i);
        if (x[i].className == "menuitem menuclose") {
            x[i].className = "menuitem menuopen";
        } else {
            x[i].className = "menuitem menuclose";
        }
    }

}
