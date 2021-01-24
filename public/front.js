function changeColor(obj_id) {
    var textIn = document.getElementById(obj_id).innerHTML;
    var name = document.getElementById("info").innerHTML;
    const db = firebase.database();
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

        const monday = db.ref('Monday');
        const tuesday = db.ref("Tuesday");
        const wednesday = db.ref("Wednesday");
        const thursday = db.ref("Thursday");
        const friday = db.ref("Friday");
        const saturday = db.ref("Saturday");
        const sunday = db.ref("Sunday");

        const mon8am = document.getElementById('8amMon');
        const dbMon8am = db.ref().child('Monday');
        monday.child("8am").set(this.value);

        const mon9am = document.getElementById('9amMon');
        const dbMon9am = db.ref().child('Monday');
        monday.child("9am").set(this.value);
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
    
    
    db.ref('Names').set(first);
    
    
}