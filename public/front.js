function changeColor(obj_id) {
    var textIn = document.getElementById(obj_id).innerHTML;
    var name = document.getElementById("info").innerHTML;
    const db = firebase.database();
    

    if (name == "") {
        alert("Please Enter a Name")

    } else {
        if (textIn === "Open") {
            document.getElementById(obj_id).style.backgroundColor = "#FFFFFF";
            document.getElementById(obj_id).innerHTML = name;
            this.value = name;
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

        const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        //Monday

        const mon8am = document.getElementById('8amMon');
        const dbMon8am = db.ref().child('Monday');
        const mon9am = document.getElementById('9amMon');
        const dbMon9am = db.ref().child('Monday');
        const mon10am = document.getElementById('10amMon');
        const dbMon10am = db.ref().child('Monday');
        const mon11am = document.getElementById('11amMon');
        const dbMon11am = db.ref().child('Monday');
        const mon12pm = document.getElementById('12pmMon');
        const dbMon12pm = db.ref().child('Monday');
        const mon1pm = document.getElementById('1pmMon');
        const dbMon1pm = db.ref().child('Monday');
        const mon2pm = document.getElementById('2pmMon');
        const dbMon2pm = db.ref().child('Monday');
        const mon3pm = document.getElementById('3pmMon');
        const dbMon3pm = db.ref().child('Monday');
        const mon4pm = document.getElementById('4pmMon');
        const dbMon4pm = db.ref().child('Monday');
        const mon5pm = document.getElementById('5pmMon');
        const dbMon5pm = db.ref().child('Monday');
        const mon6pm = document.getElementById('6pmMon');
        const dbMon6pm = db.ref().child('Monday');
        const mon7pm = document.getElementById('7pmMon');
        const dbMon7pm = db.ref().child('Monday');
        const mon8pm = document.getElementById('8pmMon');
        const dbMon8pm = db.ref().child('Monday');
        const mon9pm = document.getElementById('9pmMon');
        const dbMon9pm = db.ref().child('Monday');
        const mon10pm = document.getElementById('10pmMon');
        const dbMon10pm = db.ref().child('Monday');
        const mon11pm = document.getElementById('11pmMon');
        const dbMon11pm = db.ref().child('Monday');
        const mon12am = document.getElementById('12amMon');
        const dbMon12am = db.ref().child('Monday');

        

        switch (obj_id) {
            case "8amMon":
                monday.child("8am").set(this.value);
                break;

            case "9amMon":
                monday.child("9am").set(this.value);
                break;

            case "10amMon":
                monday.child("10am").set(this.value);
                break;

            case "11amMon":
                monday.child("11am").set(this.value);
                break;

            case "12pmMon":
                monday.child("12pm").set(this.value);
                break;

            case "1pmMon":
                monday.child("1pm").set(this.value);
                break;

            case "2pmMon":
                monday.child("2pm").set(this.value);
                break;

            case "3pmMon":
                monday.child("3pm").set(this.value);
                break;

            case "4pmMon":
                monday.child("4pm").set(this.value);
                break;

            case "5pmMon":
                monday.child("5pm").set(this.value);
                break;

            case "6pmMon":
                monday.child("6pm").set(this.value);
                break;

            case "7pmMon":
                monday.child("7pm").set(this.value);
                break;

            case "8pmMon":
                monday.child("8pm").set(this.value);
                break;

            case "9pmMon":
                monday.child("9pm").set(this.value);
                break;

            case "10pmMon":
                monday.child("10pm").set(this.value);
                break;

            case "11pmMon":
                monday.child("11pm").set(this.value);
                break;

            case "12amMon":
                monday.child("12am").set(this.value);
                break;



            //Tuesday
            case "8amTue":
                const tue8am = document.getElementById('8amTue');
                const dbTue8am = db.ref().child('Tuesday');
                tuesday.child("8am").set(this.value);
                break;

            case "9amTue":
                const tue9am = document.getElementById('9amTue');
                const dbTue9am = db.ref().child('Tuesday');
                tuesday.child("9am").set(this.value);
                break;

            case "10amTue":
                const tue10am = document.getElementById('10amTue');
                const dbTue10am = db.ref().child('Tuesday');
                tuesday.child("10am").set(this.value);
                break;

            case "11amTue":
                const tue11am = document.getElementById('11amTue');
                const dbTue11am = db.ref().child('Tuesday');
                tuesday.child("11am").set(this.value);
                break;

            case "12pmTue":
                const tue12pm = document.getElementById('12pmTue');
                const dbTue12pm = db.ref().child('Tuesday');
                tuesday.child("12pm").set(this.value);
                break;

            case "1pmTue":
                const tue1pm = document.getElementById('1pmTue');
                const dbTue1pm = db.ref().child('Tuesday');
                tuesday.child("1pm").set(this.value);
                break;

            case "2pmTue":
                const tue2pm = document.getElementById('2pmTue');
                const dbTue2pm = db.ref().child('Tuesday');
                tuesday.child("2pm").set(this.value);
                break;

            case "3pmTue":
                const tue3pm = document.getElementById('3pmTue');
                const dbTue3pm = db.ref().child('Tuesday');
                tuesday.child("3pm").set(this.value);
                break;

            case "4pmTue":
                const tue4pm = document.getElementById('4pmTue');
                const dbTue4pm = db.ref().child('Tuesday');
                tuesday.child("4pm").set(this.value);
                break;

            case "5pmTue":
                const tue5pm = document.getElementById('5pmTue');
                const dbTue5pm = db.ref().child('Tuesday');
                tuesday.child("5pm").set(this.value);
                break;

            case "6pmTue":
                const tue6pm = document.getElementById('6pmTue');
                const dbTue6pm = db.ref().child('Tuesday');
                tuesday.child("6pm").set(this.value);
                break;

            case "7pmTue":
                const tue7pm = document.getElementById('7pmTue');
                const dbTue7pm = db.ref().child('Tuesday');
                tuesday.child("7pm").set(this.value);
                break;

            case "8pmTue":
                const tue8pm = document.getElementById('8pmTue');
                const dbTue8pm = db.ref().child('Tuesday');
                tuesday.child("8pm").set(this.value);
                break;

            case "9pmTue":
                const tue9pm = document.getElementById('9pmTue');
                const dbTue9pm = db.ref().child('Tuesday');
                tuesday.child("9pm").set(this.value);
                break;

            case "10pmTue":
                const tue10pm = document.getElementById('10pmTue');
                const dbTue10pm = db.ref().child('Tuesday');
                tuesday.child("10pm").set(this.value);
                break;

            case "11pmTue":
                const tue11pm = document.getElementById('11pmTue');
                const dbTue11pm = db.ref().child('Tuesday');
                tuesday.child("11pm").set(this.value);
                break;

            case "12amTue":
                const tue12am = document.getElementById('12amTue');
                const dbTue12am = db.ref().child('Tuesday');
                tuesday.child("12am").set(this.value);
                break;



            //Wednesday
            case "8amWed":
                const wed8am = document.getElementById('8amWed');
                const dbWed8am = db.ref().child('Wednesday');
                wednesday.child("8am").set(this.value);
                break;

            case "9amWed":
                const wed9am = document.getElementById('9amWed');
                const dbWed9am = db.ref().child('Wednesday');
                wednesday.child("9am").set(this.value);
                break;

            case "10amWed":
                const wed10am = document.getElementById('10amWed');
                const dbWed10am = db.ref().child('Wednesday');
                wednesday.child("10am").set(this.value);
                break;

            case "11amWed":
                const wed11am = document.getElementById('11amWed');
                const dbWed11am = db.ref().child('Wednesday');
                wednesday.child("11am").set(this.value);
                break;

            case "12pmWed":
                const wed12pm = document.getElementById('12pmWed');
                const dbWed12pm = db.ref().child('Wednesday');
                wednesday.child("12pm").set(this.value);
                break;

            case "1pmWed":
                const wed1pm = document.getElementById('1pmWed');
                const dbWed1pm = db.ref().child('Wednesday');
                wednesday.child("1pm").set(this.value);
                break;

            case "2pmWed":
                const wed2pm = document.getElementById('2pmWed');
                const dbWed2pm = db.ref().child('Wednesday');
                wednesday.child("2pm").set(this.value);
                break;

            case "3pmWed":
                const wed3pm = document.getElementById('3pmWed');
                const dbWed3pm = db.ref().child('Wednesday');
                wednesday.child("3pm").set(this.value);
                break;

            case "4pmWed":
                const wed4pm = document.getElementById('4pmWed');
                const dbWed4pm = db.ref().child('Wednesday');
                wednesday.child("4pm").set(this.value);
                break;

            case "5pmWed":
                const wed5pm = document.getElementById('5pmWed');
                const dbWed5pm = db.ref().child('Wednesday');
                wednesday.child("5pm").set(this.value);
                break;

            case "6pmWed":
                const wed6pm = document.getElementById('6pmWed');
                const dbWed6pm = db.ref().child('Wednesday');
                wednesday.child("6pm").set(this.value);
                break;

            case "7pmWed":
                const wed7pm = document.getElementById('7pmWed');
                const dbWed7pm = db.ref().child('Wednesday');
                wednesday.child("7pm").set(this.value);
                break;

            case "8pmWed":
                const wed8pm = document.getElementById('8pmWed');
                const dbWed8pm = db.ref().child('Wednesday');
                wednesday.child("8pm").set(this.value);
                break;

            case "9pmWed":
                const wed9pm = document.getElementById('9pmWed');
                const dbWed9pm = db.ref().child('Wednesday');
                wednesday.child("9pm").set(this.value);
                break;

            case "10pmWed":
                const wed10pm = document.getElementById('10pmWed');
                const dbWed10pm = db.ref().child('Wednesday');
                wednesday.child("10pm").set(this.value);
                break;

            case "11pmWed":
                const wed11pm = document.getElementById('11pmWed');
                const dbWed11pm = db.ref().child('Wednesday');
                wednesday.child("11pm").set(this.value);
                break;

            case "12amWed":
                const wed12am = document.getElementById('12amWed');
                const dbWed12am = db.ref().child('Wednesday');
                wednesday.child("12am").set(this.value);
                break;



            //Thursday
            case "8amThu":
                const thu8am = document.getElementById('8amThu');
                const dbThu8am = db.ref().child('Thursday');
                thursday.child("8am").set(this.value);
                break;

            case "9amThu":
                const thu9am = document.getElementById('9amThu');
                const dbThu9am = db.ref().child('Thursday');
                thursday.child("9am").set(this.value);
                break;

            case "10amThu":
                const thu10am = document.getElementById('10amThu');
                const dbThu10am = db.ref().child('Thursday');
                thursday.child("10am").set(this.value);
                break;

            case "11amThu":
                const thu11am = document.getElementById('11amThu');
                const dbThu11am = db.ref().child('Thursday');
                thursday.child("11am").set(this.value);
                break;

            case "12pmThu":
                const thu12pm = document.getElementById('12pmThu');
                const dbThu12pm = db.ref().child('Thursday');
                thursday.child("12pm").set(this.value);
                break;

            case "1pmThu":
                const thu1pm = document.getElementById('1pmThu');
                const dbThu1pm = db.ref().child('Thursday');
                thursday.child("1pm").set(this.value);
                break;

            case "2pmThu":
                const thu2pm = document.getElementById('2pmThu');
                const dbThu2pm = db.ref().child('Thursday');
                thursday.child("2pm").set(this.value);
                break;

            case "3pmThu":
                const thu3pm = document.getElementById('3pmThu');
                const dbThu3pm = db.ref().child('Thursday');
                thursday.child("3pm").set(this.value);
                break;

            case "4pmThu":
                const thu4pm = document.getElementById('4pmThu');
                const dbThu4pm = db.ref().child('Thursday');
                thursday.child("4pm").set(this.value);
                break;

            case "5pmThu":
                const thu5pm = document.getElementById('5pmThu');
                const dbThu5pm = db.ref().child('Thursday');
                thursday.child("5pm").set(this.value);
                break;

            case "6pmThu":
                const thu6pm = document.getElementById('6pmThu');
                const dbThu6pm = db.ref().child('Thursday');
                thursday.child("6pm").set(this.value);
                break;

            case "7pmThu":
                const thu7pm = document.getElementById('7pmThu');
                const dbThu7pm = db.ref().child('Thursday');
                thursday.child("7pm").set(this.value);
                break;

            case "8pmThu":
                const thu8pm = document.getElementById('8pmThu');
                const dbThu8pm = db.ref().child('Thursday');
                thursday.child("8pm").set(this.value);
                break;

            case "9pmThu":
                const thu9pm = document.getElementById('9pmThu');
                const dbThu9pm = db.ref().child('Thursday');
                thursday.child("9pm").set(this.value);
                break;

            case "10pmThu":
                const thu10pm = document.getElementById('10pmThu');
                const dbThu10pm = db.ref().child('Thursday');
                thursday.child("10pm").set(this.value);
                break;

            case "11pmThu":
                const thu11pm = document.getElementById('11pmThu');
                const dbThu11pm = db.ref().child('Thursday');
                thursday.child("11pm").set(this.value);
                break;

            case "12amThu":
                const thu12am = document.getElementById('12amThu');
                const dbThu12am = db.ref().child('Thursday');
                thursday.child("12am").set(this.value);
                break;



                //Friday
            case "8amFri":
                const fri8am = document.getElementById('8amFri');
                const dbFri8am = db.ref().child('Friday');
                friday.child("8am").set(this.value);
                break;

                case "9amFri":
                const fri9am = document.getElementById('9amFri');
                const dbFri9am = db.ref().child('Friday');
                friday.child("9am").set(this.value);
                break;

                case "10amFri":
                const fri10am = document.getElementById('10amFri');
                const dbFri10am = db.ref().child('Friday');
                friday.child("10am").set(this.value);
                break;

                case "11amFri":
                const fri11am = document.getElementById('11amFri');
                const dbFri11am = db.ref().child('Friday');
                friday.child("11am").set(this.value);
                break;

                case "12pmFri":
                const fri12pm = document.getElementById('12pmFri');
                const dbFri12pm = db.ref().child('Friday');
                friday.child("12pm").set(this.value);
                break;

                case "1pmFri":
                const fri1pm = document.getElementById('1pmFri');
                const dbFri1pm = db.ref().child('Friday');
                friday.child("1pm").set(this.value);
                break;

                case "2pmFri":
                const fri2pm = document.getElementById('2pmFri');
                const dbFri2pm = db.ref().child('Friday');
                friday.child("2pm").set(this.value);
                break;

                case "3pmFri":
                const fri3pm = document.getElementById('3pmFri');
                const dbFri3pm = db.ref().child('Friday');
                friday.child("3pm").set(this.value);
                break;

                case "4pmFri":
                const fri4pm = document.getElementById('4pmFri');
                const dbFri4pm = db.ref().child('Friday');
                friday.child("4pm").set(this.value);
                break;

                case "5pmFri":
                const fri5pm = document.getElementById('5pmFri');
                const dbFri5pm = db.ref().child('Friday');
                friday.child("5pm").set(this.value);
                break;

                case "6pmFri":
                const fri6pm = document.getElementById('6pmFri');
                const dbFri6pm = db.ref().child('Friday');
                friday.child("6pm").set(this.value);
                break;

                case "7pmFri":
                const fri7pm = document.getElementById('7pmFri');
                const dbFri7pm = db.ref().child('Friday');
                friday.child("7pm").set(this.value);
                break;

                case "8pmFri":
                const fri8pm = document.getElementById('8pmFri');
                const dbFri8pm = db.ref().child('Friday');
                friday.child("8pm").set(this.value);
                break;

                case "9pmFri":
                const fri9pm = document.getElementById('9pmFri');
                const dbFri9pm = db.ref().child('Friday');
                friday.child("9pm").set(this.value);
                break;

                case "10pmFri":
                const fri10pm = document.getElementById('10pmFri');
                const dbFri10pm = db.ref().child('Friday');
                friday.child("10pm").set(this.value);
                break;

                case "11pmFri":
                const fri11pm = document.getElementById('11pmFri');
                const dbFri11pm = db.ref().child('Friday');
                friday.child("11pm").set(this.value);
                break;

                case "12amFri":
                const fri12am = document.getElementById('12amFri');
                const dbFri12am = db.ref().child('Friday');
                friday.child("12am").set(this.value);
                break;

                

                //Saturday
                case "8amSat":
                const sat8am = document.getElementById('8amSat');
                const dbSat8am = db.ref().child('Saturday');
                saturday.child("8am").set(this.value);
                break;

                case "9amSat":
                const sat9am = document.getElementById('9amSat');
                const dbSat9am = db.ref().child('Saturday');
                saturday.child("9am").set(this.value);
                break;

                case "10amSat":
                const sat10am = document.getElementById('10amSat');
                const dbSat10am = db.ref().child('Saturday');
                saturday.child("10am").set(this.value);
                break;

                case "11amSat":
                const sat11am = document.getElementById('11amSat');
                const dbSat11am = db.ref().child('Saturday');
                saturday.child("11am").set(this.value);
                break;

                case "12pmSat":
                const sat12pm = document.getElementById('12pmSat');
                const dbSat12pm = db.ref().child('Saturday');
                saturday.child("12pm").set(this.value);
                break;

                case "1pmSat":
                const sat1pm = document.getElementById('1pmSat');
                const dbSat1pm = db.ref().child('Saturday');
                saturday.child("1pm").set(this.value);
                break;

                case "2pmSat":
                const sat2pm = document.getElementById('2pmSat');
                const dbSat2pm = db.ref().child('Saturday');
                saturday.child("2pm").set(this.value);
                break;

                case "3pmSat":
                const sat3pm = document.getElementById('3pmSat');
                const dbSat3pm = db.ref().child('Saturday');
                saturday.child("3pm").set(this.value);
                break;

                case "4pmSat":
                const sat4pm = document.getElementById('4pmSat');
                const dbSat4pm = db.ref().child('Saturday');
                saturday.child("4pm").set(this.value);
                break;

                case "5pmSat":
                const sat5pm = document.getElementById('5pmSat');
                const dbSat5pm = db.ref().child('Saturday');
                saturday.child("5pm").set(this.value);
                break;

                case "6pmSat":
                const sat6pm = document.getElementById('6pmSat');
                const dbSat6pm = db.ref().child('Saturday');
                saturday.child("6pm").set(this.value);
                break;

                case "7pmSat":
                const sat7pm = document.getElementById('7pmSat');
                const dbSat7pm = db.ref().child('Saturday');
                saturday.child("7pm").set(this.value);
                break;

                case "8pmSat":
                const sat8pm = document.getElementById('8pmSat');
                const dbSat8pm = db.ref().child('Saturday');
                saturday.child("8pm").set(this.value);
                break;

                case "9pmSat":
                const sat9pm = document.getElementById('9pmSat');
                const dbSat9pm = db.ref().child('Saturday');
                saturday.child("9pm").set(this.value);
                break;

                case "10pmSat":
                const sat10pm = document.getElementById('10pmSat');
                const dbSat10pm = db.ref().child('Saturday');
                saturday.child("10pm").set(this.value);
                break;

                case "11pmSat":
                const sat11pm = document.getElementById('11pmSat');
                const dbSat11pm = db.ref().child('Saturday');
                saturday.child("11pm").set(this.value);
                break;

                case "12amSat":
                const sat12am = document.getElementById('12amSat');
                const dbSat12am = db.ref().child('Saturday');
                saturday.child("12am").set(this.value);
                break;

                //Sunday
                case "8amSun":
                const sun8am = document.getElementById('8amSun');
                const dbSun8am = db.ref().child('Sunday');
                sunday.child("8am").set(this.value);
                break;

                case "9amSun":
                const sun9am = document.getElementById('9amSun');
                const dbSun9am = db.ref().child('Sunday');
                sunday.child("9am").set(this.value);
                break;

                case "10amSun":
                const sun10am = document.getElementById('10amSun');
                const dbSun10am = db.ref().child('Sunday');
                sunday.child("10am").set(this.value);
                break;

                case "11amSun":
                const sun11am = document.getElementById('11amSun');
                const dbSun11am = db.ref().child('Sunday');
                sunday.child("11am").set(this.value);
                break;

                case "12pmSun":
                const sun12pm = document.getElementById('12pmSun');
                const dbSun12pm = db.ref().child('Sunday');
                sunday.child("12pm").set(this.value);
                break;

                case "1pmSun":
                const sun1pm = document.getElementById('1pmSun');
                const dbSun1pm = db.ref().child('Sunday');
                sunday.child("1pm").set(this.value);
                break;

                case "2pmSun":
                const sun2pm = document.getElementById('2pmSun');
                const dbSun2pm = db.ref().child('Sunday');
                sunday.child("2pm").set(this.value);
                break;

                case "3pmSun":
                const sun3pm = document.getElementById('3pmSun');
                const dbSun3pm = db.ref().child('Sunday');
                sunday.child("3pm").set(this.value);
                break;

                case "4pmSun":
                const sun4pm = document.getElementById('4pmSun');
                const dbSun4pm = db.ref().child('Sunday');
                sunday.child("4pm").set(this.value);
                break;

                case "5pmSun":
                const sun5pm = document.getElementById('5pmSun');
                const dbSun5pm = db.ref().child('Sunday');
                sunday.child("5pm").set(this.value);
                break;

                case "6pmSun":
                const sun6pm = document.getElementById('6pmSun');
                const dbSun6pm = db.ref().child('Sunday');
                sunday.child("6pm").set(this.value);
                break;

                case "7pmSun":
                const sun7pm = document.getElementById('7pmSun');
                const dbSun7pm = db.ref().child('Sunday');
                sunday.child("7pm").set(this.value);
                break;

                case "8pmSun":
                const sun8pm = document.getElementById('8pmSun');
                const dbSun8pm = db.ref().child('Sunday');
                sunday.child("8pm").set(this.value);
                break;

                case "9pmSun":
                const sun9pm = document.getElementById('9pmSun');
                const dbSun9pm = db.ref().child('Sunday');
                sunday.child("9pm").set(this.value);
                break;

                case "10pmSun":
                const sun10pm = document.getElementById('10pmSun');
                const dbSun10pm = db.ref().child('Sunday');
                sunday.child("10pm").set(this.value);
                break;

                case "11pmSun":
                const sun11pm = document.getElementById('11pmSun');
                const dbSun11pm = db.ref().child('Sunday');
                sunday.child("11pm").set(this.value);
                break;

                case "12amSun":
                const sun12am = document.getElementById('12amSun');
                const dbSun12am = db.ref().child('Sunday');
                sunday.child("12am").set(this.value);
                break;
        }
    }
    //this.value="Lawrence";
    //alert(this.value)
}



var input = document.getElementById("fname");
input.addEventListener("keyup", function (event) {
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