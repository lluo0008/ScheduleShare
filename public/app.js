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
//Monday
const dbMon8am = db.ref().child('Monday');
const dbMon9am = db.ref().child('Monday');
const dbMon10am = db.ref().child('Monday');
const dbMon11am = db.ref().child('Monday');
const dbMon12pm = db.ref().child('Monday');
const dbMon1pm = db.ref().child('Monday');
const dbMon2pm = db.ref().child('Monday');
const dbMon3pm = db.ref().child('Monday');
const dbMon4pm = db.ref().child('Monday');
const dbMon5pm = db.ref().child('Monday');
const dbMon6pm = db.ref().child('Monday');
const dbMon7pm = db.ref().child('Monday');
const dbMon8pm = db.ref().child('Monday');
const dbMon9pm = db.ref().child('Monday');
const dbMon10pm = db.ref().child('Monday');
const dbMon11pm = db.ref().child('Monday');
const dbMon12am = db.ref().child('Monday');
//Tuesday
const dbTue8am = db.ref().child('Tuesday');
const dbTue9am = db.ref().child('Tuesday');
const dbTue10am = db.ref().child('Tuesday');
const dbTue11am = db.ref().child('Tuesday');
const dbTue12pm = db.ref().child('Tuesday');
const dbTue1pm = db.ref().child('Tuesday');
const dbTue2pm = db.ref().child('Tuesday');
const dbTue3pm = db.ref().child('Tuesday');
const dbTue4pm = db.ref().child('Tuesday');
const dbTue5pm = db.ref().child('Tuesday');
const dbTue6pm = db.ref().child('Tuesday');
const dbTue7pm = db.ref().child('Tuesday');
const dbTue8pm = db.ref().child('Tuesday');
const dbTue9pm = db.ref().child('Tuesday');
const dbTue10pm = db.ref().child('Tuesday');
const dbTue11pm = db.ref().child('Tuesday');
const dbTue12am = db.ref().child('Tuesday');
//Wednesday
const dbWed8am = db.ref().child('Wednesday');
const dbWed9am = db.ref().child('Wednesday');
const dbWed10am = db.ref().child('Wednesday');
const dbWed11am = db.ref().child('Wednesday');
const dbWed12pm = db.ref().child('Wednesday');
const dbWed1pm = db.ref().child('Wednesday');
const dbWed2pm = db.ref().child('Wednesday');
const dbWed3pm = db.ref().child('Wednesday');
const dbWed4pm = db.ref().child('Wednesday');
const dbWed5pm = db.ref().child('Wednesday');
const dbWed6pm = db.ref().child('Wednesday');
const dbWed7pm = db.ref().child('Wednesday');
const dbWed8pm = db.ref().child('Wednesday');
const dbWed9pm = db.ref().child('Wednesday');
const dbWed10pm = db.ref().child('Wednesday');
const dbWed11pm = db.ref().child('Wednesday');
const dbWed12am = db.ref().child('Wednesday');
//Thursday
const dbThu8am = db.ref().child('Thursday');
const dbThu9am = db.ref().child('Thursday');
const dbThu10am = db.ref().child('Thursday');
const dbThu11am = db.ref().child('Thursday');
const dbThu12pm = db.ref().child('Thursday');
const dbThu1pm = db.ref().child('Thursday');
const dbThu2pm = db.ref().child('Thursday');
const dbThu3pm = db.ref().child('Thursday');
const dbThu4pm = db.ref().child('Thursday');
const dbThu5pm = db.ref().child('Thursday');
const dbThu6pm = db.ref().child('Thursday');
const dbThu7pm = db.ref().child('Thursday');
const dbThu8pm = db.ref().child('Thursday');
const dbThu9pm = db.ref().child('Thursday');
const dbThu10pm = db.ref().child('Thursday');
const dbThu11pm = db.ref().child('Thursday');
const dbThu12am = db.ref().child('Thursday');
//Friday
const dbFri8am = db.ref().child('Friday');
const dbFri9am = db.ref().child('Friday');
const dbFri10am = db.ref().child('Friday');
const dbFri11am = db.ref().child('Friday');
const dbFri12pm = db.ref().child('Friday');
const dbFri1pm = db.ref().child('Friday');
const dbFri2pm = db.ref().child('Friday');
const dbFri3pm = db.ref().child('Friday');
const dbFri4pm = db.ref().child('Friday');
const dbFri5pm = db.ref().child('Friday');
const dbFri6pm = db.ref().child('Friday');
const dbFri7pm = db.ref().child('Friday');
const dbFri8pm = db.ref().child('Friday');
const dbFri9pm = db.ref().child('Friday');
const dbFri10pm = db.ref().child('Friday');
const dbFri11pm = db.ref().child('Friday');
const dbFri12am = db.ref().child('Friday');
//Saturday
const dbSat8am = db.ref().child('Saturday');
const dbSat9am = db.ref().child('Saturday');
const dbSat10am = db.ref().child('Saturday');
const dbSat11am = db.ref().child('Saturday');
const dbSat12pm = db.ref().child('Saturday');
const dbSat1pm = db.ref().child('Saturday');
const dbSat2pm = db.ref().child('Saturday');
const dbSat3pm = db.ref().child('Saturday');
const dbSat4pm = db.ref().child('Saturday');
const dbSat5pm = db.ref().child('Saturday');
const dbSat6pm = db.ref().child('Saturday');
const dbSat7pm = db.ref().child('Saturday');
const dbSat8pm = db.ref().child('Saturday');
const dbSat9pm = db.ref().child('Saturday');
const dbSat10pm = db.ref().child('Saturday');
const dbSat11pm = db.ref().child('Saturday');
const dbSat12am = db.ref().child('Saturday');
//Sunday
const dbSun8am = db.ref().child('Sunday');
const dbSun9am = db.ref().child('Sunday');
const dbSun10am = db.ref().child('Sunday');
const dbSun11am = db.ref().child('Sunday');
const dbSun12pm = db.ref().child('Sunday');
const dbSun1pm = db.ref().child('Sunday');
const dbSun2pm = db.ref().child('Sunday');
const dbSun3pm = db.ref().child('Sunday');
const dbSun4pm = db.ref().child('Sunday');
const dbSun5pm = db.ref().child('Sunday');
const dbSun6pm = db.ref().child('Sunday');
const dbSun7pm = db.ref().child('Sunday');
const dbSun8pm = db.ref().child('Sunday');
const dbSun9pm = db.ref().child('Sunday');
const dbSun10pm = db.ref().child('Sunday');
const dbSun11pm = db.ref().child('Sunday');
const dbSun12am = db.ref().child('Sunday');
//Sync changes
//Monday
dbMon8am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon8am.innerHTML = val["8am"];
});
dbMon9am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon9am.innerHTML = val["9am"];
});
dbMon10am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon10am.innerHTML = val["10am"];
});
dbMon11am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon11am.innerHTML = val["11am"];
});
dbMon12pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon12pm.innerHTML = val["12pm"];
});
dbMon1pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon1pm.innerHTML = val["1pm"];
});
dbMon2pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon2pm.innerHTML = val["2pm"];
});
dbMon3pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon3pm.innerHTML = val["3pm"];
});
dbMon4pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon4pm.innerHTML = val["4pm"];
});
dbMon5pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon5pm.innerHTML = val["5pm"];
});
dbMon6pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon6pm.innerHTML = val["6pm"];
});
dbMon7pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon7pm.innerHTML = val["7pm"];
});
dbMon8pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon8pm.innerHTML = val["8pm"];
});
dbMon9pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon9pm.innerHTML = val["9pm"];
});
dbMon10pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon10pm.innerHTML = val["10pm"];
});
dbMon11pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon11pm.innerHTML = val["11pm"];
});
dbMon12am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    mon12am.innerHTML = val["12am"];
});

//TUESDAY---------------------------------------------------------------------------------
dbTue8am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue8am.innerHTML = val["8am"];
});
dbTue9am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue9am.innerHTML = val["9am"];
});
dbTue10am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue10am.innerHTML = val["10am"];
});
dbTue11am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue11am.innerHTML = val["11am"];
});
dbTue12pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue12pm.innerHTML = val["12pm"];
});
dbTue1pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue1pm.innerHTML = val["1pm"];
});
dbTue2pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue2pm.innerHTML = val["2pm"];
});
dbTue3pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue3pm.innerHTML = val["3pm"];
});
dbTue4pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue4pm.innerHTML = val["4pm"];
});
dbTue5pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue5pm.innerHTML = val["5pm"];
});
dbTue6pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue6pm.innerHTML = val["6pm"];
});
dbTue7pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue7pm.innerHTML = val["7pm"];
});
dbTue8pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue8pm.innerHTML = val["8pm"];
});
dbTue9pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue9pm.innerHTML = val["9pm"];
});
dbTue10pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue10pm.innerHTML = val["10pm"];
});
dbTue11pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue11pm.innerHTML = val["11pm"];
});
dbTue12am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    tue12am.innerHTML = val["12am"];
});

//WEDNESDAY ---------------------------------------------------------------------------------
dbWed8am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed8am.innerHTML = val["8am"];
});
dbWed9am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed9am.innerHTML = val["9am"];
});
dbWed10am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed10am.innerHTML = val["10am"];
});
dbWed11am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed11am.innerHTML = val["11am"];
});
dbWed12pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed12pm.innerHTML = val["12pm"];
});
dbWed1pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed1pm.innerHTML = val["1pm"];
});
dbWed2pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed2pm.innerHTML = val["2pm"];
});
dbWed3pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed3pm.innerHTML = val["3pm"];
});
dbWed4pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed4pm.innerHTML = val["4pm"];
});
dbWed5pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed5pm.innerHTML = val["5pm"];
});
dbWed6pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed6pm.innerHTML = val["6pm"];
});
dbWed7pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed7pm.innerHTML = val["7pm"];
});
dbWed8pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed8pm.innerHTML = val["8pm"];
});
dbWed9pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed9pm.innerHTML = val["9pm"];
});
dbWed10pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed10pm.innerHTML = val["10pm"];
});
dbWed11pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed11pm.innerHTML = val["11pm"];
});
dbWed12am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    wed12am.innerHTML = val["12am"];
});

//THURSDAY-------------------------------------------------------------------------------------
dbThu8am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu8am.innerHTML = val["8am"];
});
dbThu9am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu9am.innerHTML = val["9am"];
});
dbThu10am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu10am.innerHTML = val["10am"];
});
dbThu11am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu11am.innerHTML = val["11am"];
});
dbThu12pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu12pm.innerHTML = val["12pm"];
});
dbThu1pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu1pm.innerHTML = val["1pm"];
});
dbThu2pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu2pm.innerHTML = val["2pm"];
});
dbThu3pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu3pm.innerHTML = val["3pm"];
});
dbThu4pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu4pm.innerHTML = val["4pm"];
});
dbThu5pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu5pm.innerHTML = val["5pm"];
});
dbThu6pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu6pm.innerHTML = val["6pm"];
});
dbThu7pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu7pm.innerHTML = val["7pm"];
});
dbThu8pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu8pm.innerHTML = val["8pm"];
});
dbThu9pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu9pm.innerHTML = val["9pm"];
});
dbThu10pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu10pm.innerHTML = val["10pm"];
});
dbThu11pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu11pm.innerHTML = val["11pm"];
});
dbThu12am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    thu12am.innerHTML = val["12am"];
});

//FRIDAY--------------------------------------------------------------------------------------
dbFri8am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri8am.innerHTML = val["8am"];
});
dbFri9am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri9am.innerHTML = val["9am"];
});
dbFri10am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri10am.innerHTML = val["10am"];
});
dbFri11am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri11am.innerHTML = val["11am"];
});
dbFri12pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri12pm.innerHTML = val["12pm"];
});
dbFri1pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri1pm.innerHTML = val["1pm"];
});
dbFri2pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri2pm.innerHTML = val["2pm"];
});
dbFri3pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri3pm.innerHTML = val["3pm"];
});
dbFri4pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri4pm.innerHTML = val["4pm"];
});
dbFri5pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri5pm.innerHTML = val["5pm"];
});
dbFri6pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri6pm.innerHTML = val["6pm"];
});
dbFri7pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri7pm.innerHTML = val["7pm"];
});
dbFri8pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri8pm.innerHTML = val["8pm"];
});
dbFri9pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri9pm.innerHTML = val["9pm"];
});
dbFri10pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri10pm.innerHTML = val["10pm"];
});
dbFri11pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri11pm.innerHTML = val["11pm"];
});
dbFri12am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    fri12am.innerHTML = val["12am"];
});

//SATURDAY--------------------------------------------------------------------------------------
dbSat8am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat8am.innerHTML = val["8am"];
});
dbSat9am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat9am.innerHTML = val["9am"];
});
dbSat10am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat10am.innerHTML = val["10am"];
});
dbSat11am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat11am.innerHTML = val["11am"];
});
dbSat12pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat12pm.innerHTML = val["12pm"];
});
dbSat1pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat1pm.innerHTML = val["1pm"];
});
dbSat2pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat2pm.innerHTML = val["2pm"];
});
dbSat3pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat3pm.innerHTML = val["3pm"];
});
dbSat4pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat4pm.innerHTML = val["4pm"];
});
dbSat5pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat5pm.innerHTML = val["5pm"];
});
dbSat6pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat6pm.innerHTML = val["6pm"];
});
dbSat7pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat7pm.innerHTML = val["7pm"];
});
dbSat8pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat8pm.innerHTML = val["8pm"];
});
dbSat9pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat9pm.innerHTML = val["9pm"];
});
dbSat10pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat10pm.innerHTML = val["10pm"];
});
dbSat11pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat11pm.innerHTML = val["11pm"];
});
dbSat12am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sat12am.innerHTML = val["12am"];
});

//SUNDAY--------------------------------------------------------------------------------------
dbSun8am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun8am.innerHTML = val["8am"];
});
dbSun9am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun9am.innerHTML = val["9am"];
});
dbSun10am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun10am.innerHTML = val["10am"];
});
dbSun11am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun11am.innerHTML = val["11am"];
});
dbSun12pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun12pm.innerHTML = val["12pm"];
});
dbSun1pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun1pm.innerHTML = val["1pm"];
});
dbSun2pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun2pm.innerHTML = val["2pm"];
});
dbSun3pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun3pm.innerHTML = val["3pm"];
});
dbSun4pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun4pm.innerHTML = val["4pm"];
});
dbSun5pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun5pm.innerHTML = val["5pm"];
});
dbSun6pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun6pm.innerHTML = val["6pm"];
});
dbSun7pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun7pm.innerHTML = val["7pm"];
});
dbSun8pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun8pm.innerHTML = val["8pm"];
});
dbSun9pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun9pm.innerHTML = val["9pm"];
});
dbSun10pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun10pm.innerHTML = val["10pm"];
});
dbSun11pm.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun11pm.innerHTML = val["11pm"];
});
dbSun12am.on('value', snap =>
{
    var val = JSON.parse(JSON.stringify(snap.val()));
    sun12am.innerHTML = val["12am"];
});

// addBtn.addEventListener('click', (e) =>
// {
//     e.preventDefault();
//     monday.child("8am").set(mon8am.value);
// });

