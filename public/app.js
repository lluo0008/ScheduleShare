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
const mon8pm = document.getElementById('9pmMon');
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
const tue8pm = document.getElementById('9pmTue');
const tue10pm = document.getElementById('10pmTue');
const tue11pm = document.getElementById('11pmTue');
const tue12am = document.getElementById('12amTue');
//Wednesday
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
const mon8pm = document.getElementById('9pmMon');
const mon10pm = document.getElementById('10pmMon');
const mon11pm = document.getElementById('11pmMon');
const mon12am = document.getElementById('12amMon');

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

