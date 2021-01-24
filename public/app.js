const db = firebase.database();

const mon8am = document.getElementById('8amMon');
const mon9am = document.getElementById('9amMon');
const mon10am = document.getElementById('10amMon');
const mon11am = document.getElementById('11amMon');

//get elements
const monday = db.ref('Monday');

//create references
const dbMon8am = db.ref().child('Monday');


//Sync changes
dbMon8am.on('value', snap =>
{
    mon8am.innerHTML = JSON.stringify(snap.val()).value;
});

mon8am.addEventListener('click', (e) =>
{
    e.preventDefault();
    monday.child("8am").set(mon8am.value);
});

// addBtn.addEventListener('click', (e) =>
// {
//     e.preventDefault();
//     monday.child("8am").set(mon8am.value);
// });

