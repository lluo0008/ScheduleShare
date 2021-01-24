function changeColor(obj_id) {
    var textIn = document.getElementById(obj_id).innerHTML;
    if (textIn === "Open"){
        document.getElementById(obj_id).style.backgroundColor = "#FFFFFF";
        document.getElementById(obj_id).innerHTML = "Taken";
    } else {
        document.getElementById(obj_id).style.backgroundColor = "#DDDDDD";
        document.getElementById(obj_id).innerHTML = "Open";
    }                      
}