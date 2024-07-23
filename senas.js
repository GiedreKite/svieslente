const sarasasDOM = document.querySelector('.svieslente');

sarasasDOM.textContent = "nuuuu";




const buttonsDOM = document.querySelectorAll('button');
const Neptunas3DOM = buttonsDOM[2];
const Neptunas2DOM = buttonsDOM[1];
const Neptunas1DOM = buttonsDOM[0];
const Rytas1DOM = buttonsDOM[3];
const Rytas2DOM = buttonsDOM[4];
const Rytas3DOM = buttonsDOM[5];
const resultsDOM = document.querySelectorAll('h3');
const result1DOM = resultsDOM[0];
const result2DOM = resultsDOM[1];
let historyDOM = document.querySelector('.istorija'); 

const localData = localStorage.getItem('taskai');
let localsData = localStorage.getItem('istorija');
let taskaiData=[];


if (localData!== null) {
    taskaiData = JSON.parse(localData);
    localsData =JSON.parse(localData)

}
console.log(taskaiData)



let NeptunasTotal = 0;
let RytasTotal = 0;
let scoreHistory = '';

for (let i =0; i<taskaiData.length; i++) {
    if (taskaiData[i].team === 'Neptunas') {
        NeptunasTotal += taskaiData[i].points
    }
    else {RytasTotal += taskaiData[i].points
    }

}
function addHistory(points,team, time) {
 scoreHistory = '<p> ' + team + " " + points  +' '+ formatTime(Date.now()) + '</p>' + scoreHistory ;
  historyDOM.innerHTML = scoreHistory;
  taskaiData.push({points, team, time});
  localStorage.setItem('taskai', JSON.stringify(taskaiData));
} 
    result1DOM.textContent = NeptunasTotal;
    result2DOM.textContent = RytasTotal;
    historyDOM.textContent = taskaiData;
    

function neptunasOne() {
    NeptunasTotal++;
    result1DOM.textContent = NeptunasTotal;
    addHistory(1,"Neptunas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(taskaiData));
}
function neptunasTwo() {
    NeptunasTotal += 2;
    result1DOM.textContent = NeptunasTotal;
    addHistory(2,"Neptunas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(taskaiData));
}
function neptunasThree() {
    NeptunasTotal += 3;
    result1DOM.textContent = NeptunasTotal;
    addHistory(3,"Neptunas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(taskaiData));
}

function rytasOne() {
    RytasTotal++;
    result2DOM.textContent = RytasTotal;
    addHistory(1,"Lietuvos rytas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(taskaiData));
}
function rytasTwo() {
    RytasTotal += 2;
    result2DOM.textContent = RytasTotal;
    addHistory(2,"Lietuvos rytas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(taskaiData));
}
function rytasThree() {
    RytasTotal += 3;
    result2DOM.textContent = RytasTotal;
    addHistory(3,"Lietuvos rytas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(taskaiData));
}

Neptunas1DOM.addEventListener('click', neptunasOne);
Neptunas2DOM.addEventListener('click', neptunasTwo);
Neptunas3DOM.addEventListener('click', neptunasThree);

Rytas1DOM.addEventListener('click', rytasOne);
Rytas2DOM.addEventListener('click', rytasTwo);
Rytas3DOM.addEventListener('click', rytasThree);





 




function formatTime(timeInMs) {

    const date = new Date(timeInMs);
    const y =date.getFullYear();
    const m = (date.getMonth() < 10 ? '0':'') +(date.getMonth()+1);
    const d = (date.getDate() < 10 ? '0':'') +(date.getDate());
    const h = (date.getHours() < 10 ? '0':'') + date.getHours();
    const mn = (date.getMinutes() < 10 ? '0':'') + date.getMinutes();
    const s = (date.getSeconds() < 10 ? '0':'') + date.getSeconds();
    const mmm =(date.getMilliseconds() < 10 ? '0':'') +date.getMilliseconds();

        return `${y}-${m}-${d} ${h}:${mn}:${s}:${mmm}` ;
    };