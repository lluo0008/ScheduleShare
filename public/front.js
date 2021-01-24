function changeColor(obj_id) {
    var textIn = document.getElementById(obj_id).innerHTML;
    var name = document.getElementById("info").innerHTML;
    if (name == "") {
        alert("Please Enter a Name")
        
    } else {
        if (textIn === "Open"){
            document.getElementById(obj_id).style.backgroundColor = "#FFFFFF";
            document.getElementById(obj_id).innerHTML = name;
            this.value=name;
        } else {
            document.getElementById(obj_id).style.backgroundColor = "#DDDDDD";
            document.getElementById(obj_id).innerHTML = "Open";
            this.value = "Open";
        }   
    }
    //this.value="Lawrence";
    //alert(this.value)
}



    var input = document.getElementById("fname");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("fname_button").click();
        }
    });

function dispInfo() {
    var first = document.getElementById("fname").value;
    document.getElementById("info").innerHTML = first;
    
    

    
    
}