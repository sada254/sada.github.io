let today = new Date().getDay();
if (today === 0){
	today = 6;
}else{
	today--;
}


const dts = document.querySelectorAll('dt');


dts[today].className = 'today';

function showDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[today];
    const heading = document.getElementById("day-heading");
    heading.textContent = `Today is ${dayName}.`;
};