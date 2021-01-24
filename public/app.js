const db = firebase.database();

const mon8am = document.getElementById('8amMon');
const mon9am = document.getElementById('9amMon');
const mon10am = document.getElementById('10amMon');
const mon11am = document.getElementById('11amMon');

const monday = database.ref('Monday');

updateBtn.addEventListener('click', (e) =>
{
    e.preventDefault();
    
    monday.child("8am").update(mon8am.value);
});