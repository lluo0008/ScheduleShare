const db = firebase.database();
//Monday
const mon8am = document.getElementById('8amMon');
const mon9am = document.getElementById('9amMon');
const mon10am = document.getElementById('10amMon');
const mon11am = document.getElementById('11amMon');
const mon12pm = document.getElementById('12pmMon');
const mon1pm = document.getElementById('1pmMon');
const mon2pm = document.getElementById('2pmMon');
const mon3pm = document.getElementById('3pmMon');
const mon4pm = document.getElementById('4pmMon');
const mon5pm = document.getElementById('5pmMon');
const mon6pm = document.getElementById('6pmMon');
const mon7pm = document.getElementById('7pmMon');
const mon8pm = document.getElementById('8pmMon');
const mon9pm = document.getElementById('9pmMon');
const mon10pm = document.getElementById('10pmMon');
const mon11pm = document.getElementById('11pmMon');
const mon12am = document.getElementById('12amMon');
//Tuesday
const tue8am = document.getElementById('8amTue');
const tue9am = document.getElementById('9amTue');
const tue10am = document.getElementById('10amTue');
const tue11am = document.getElementById('11amTue');
const tue12pm = document.getElementById('12pmTue');
const tue1pm = document.getElementById('1pmTue');
const tue2pm = document.getElementById('2pmTue');
const tue3pm = document.getElementById('3pmTue');
const tue4pm = document.getElementById('4pmTue');
const tue5pm = document.getElementById('5pmTue');
const tue6pm = document.getElementById('6pmTue');
const tue7pm = document.getElementById('7pmTue');
const tue8pm = document.getElementById('8pmTue');
const tue9pm = document.getElementById('9pmTue');
const tue10pm = document.getElementById('10pmTue');
const tue11pm = document.getElementById('11pmTue');
const tue12am = document.getElementById('12amTue');
//Wednesday
const wed8am = document.getElementById('8amWed');
const wed9am = document.getElementById('9amWed');
const wed10am = document.getElementById('10amWed');
const wed11am = document.getElementById('11amWed');
const wed12pm = document.getElementById('12pmWed');
const wed1pm = document.getElementById('1pmWed');
const wed2pm = document.getElementById('2pmWed');
const wed3pm = document.getElementById('3pmWed');
const wed4pm = document.getElementById('4pmWed');
const wed5pm = document.getElementById('5pmWed');
const wed6pm = document.getElementById('6pmWed');
const wed7pm = document.getElementById('7pmWed');
const wed8pm = document.getElementById('8pmWed');
const wed9pm = document.getElementById('9pmWed');
const wed10pm = document.getElementById('10pmWed');
const wed11pm = document.getElementById('11pmWed');
const wed12am = document.getElementById('12amWed');
//Thursday
const thu8am = document.getElementById('8amThu');
const thu9am = document.getElementById('9amThu');
const thu10am = document.getElementById('10amThu');
const thu11am = document.getElementById('11amThu');
const thu12pm = document.getElementById('12pmThu');
const thu1pm = document.getElementById('1pmThu');
const thu2pm = document.getElementById('2pmThu');
const thu3pm = document.getElementById('3pmThu');
const thu4pm = document.getElementById('4pmThu');
const thu5pm = document.getElementById('5pmThu');
const thu6pm = document.getElementById('6pmThu');
const thu7pm = document.getElementById('7pmThu');
const thu8pm = document.getElementById('8pmThu');
const thu9pm = document.getElementById('9pmThu');
const thu10pm = document.getElementById('10pmThu');
const thu11pm = document.getElementById('11pmThu');
const thu12am = document.getElementById('12amThu');
//Friday
const fri8am = document.getElementById('8amFri');
const fri9am = document.getElementById('9amFri');
const fri10am = document.getElementById('10amFri');
const fri11am = document.getElementById('11amFri');
const fri12pm = document.getElementById('12pmFri');
const fri1pm = document.getElementById('1pmFri');
const fri2pm = document.getElementById('2pmFri');
const fri3pm = document.getElementById('3pmFri');
const fri4pm = document.getElementById('4pmFri');
const fri5pm = document.getElementById('5pmFri');
const fri6pm = document.getElementById('6pmFri');
const fri7pm = document.getElementById('7pmFri');
const fri8pm = document.getElementById('8pmFri');
const fri9pm = document.getElementById('9pmFri');
const fri10pm = document.getElementById('10pmFri');
const fri11pm = document.getElementById('11pmFri');
const fri12am = document.getElementById('12amFri');
//Saturday
const sat8am = document.getElementById('8amSat');
const sat9am = document.getElementById('9amSat');
const sat10am = document.getElementById('10amSat');
const sat11am = document.getElementById('11amSat');
const sat12pm = document.getElementById('12pmSat');
const sat1pm = document.getElementById('1pmSat');
const sat2pm = document.getElementById('2pmSat');
const sat3pm = document.getElementById('3pmSat');
const sat4pm = document.getElementById('4pmSat');
const sat5pm = document.getElementById('5pmSat');
const sat6pm = document.getElementById('6pmSat');
const sat7pm = document.getElementById('7pmSat');
const sat8pm = document.getElementById('8pmSat');
const sat9pm = document.getElementById('9pmSat');
const sat10pm = document.getElementById('10pmSat');
const sat11pm = document.getElementById('11pmSat');
const sat12am = document.getElementById('12amSat');
//Sunday
const sun8am = document.getElementById('8amSun');
const sun9am = document.getElementById('9amSun');
const sun10am = document.getElementById('10amSun');
const sun11am = document.getElementById('11amSun');
const sun12pm = document.getElementById('12pmSun');
const sun1pm = document.getElementById('1pmSun');
const sun2pm = document.getElementById('2pmSun');
const sun3pm = document.getElementById('3pmSun');
const sun4pm = document.getElementById('4pmSun');
const sun5pm = document.getElementById('5pmSun');
const sun6pm = document.getElementById('6pmSun');
const sun7pm = document.getElementById('7pmSun');
const sun8pm = document.getElementById('8pmSun');
const sun9pm = document.getElementById('9pmSun');
const sun10pm = document.getElementById('10pmSun');
const sun11pm = document.getElementById('11pmSun');
const sun12am = document.getElementById('12amSun');

//get elements
const monday = db.ref('Monday');
const tuesday = db.ref("Tuesday");
const wednesday = db.ref("Wednesday");
const thursday = db.ref("Thursday");
const friday = db.ref("Friday");
const saturday = db.ref("Saturday");
const sunday = db.ref("Sunday");


//create references
const dbMon8am = db.ref().child('Monday');
const dbMon9am = db.ref().child('Monday');

const dbTue8am = db.ref().child('Tuesday');

//Sync changes
dbMon8am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon8am.innerHTML = val["8am"];});

dbMon9am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon9am.innerHTML = val["9am"];
});


// addBtn.addEventListener('click', (e) =>
// {
//     e.preventDefault();
//     monday.child("8am").set(mon8am.value);
// });

