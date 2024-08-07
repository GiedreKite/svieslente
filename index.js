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
window.deleteHistory=deleteHistory;
const localData = localStorage.getItem('taskai');
let localsData = localStorage.getItem('istorija');
let scoreHistory=[];




if (localData!== null) {
    scoreHistory = JSON.parse(localData);
    localsData =JSON.parse(localData);
    historyDOM.innerHTML = prepareHTML(scoreHistory);
    

}





let NeptunasTotal = 0;
let RytasTotal = 0;


for (let i =0; i<scoreHistory.length; i++) {
    if (scoreHistory[i].team === 'Neptunas') {
        NeptunasTotal += scoreHistory[i].points
    }
    else {RytasTotal += scoreHistory[i].points
    }

}
function addHistory(points,team, time) {
 scoreHistory.push({
    points: points, 
    team: team, 
    time: time,}) ;
  historyDOM.innerHTML = prepareHTML(scoreHistory);
  localStorage.setItem('taskai', JSON.stringify(scoreHistory));
} 

function prepareHTML(array) {
    

    let result = '';
    array.forEach((value, i) => {
        result += value.points + value.team + value.time +`<button onclick="deleteHistory(`+i+`)">Delete</button>`;
    });

    return result;
}

function deleteHistory(i) {
    let tempHistory =scoreHistory[i];
    if(tempHistory.team=="Neptunas"){
        NeptunasTotal-=tempHistory.points;
        result1DOM.textContent = NeptunasTotal;
    }
    else{  RytasTotal -=tempHistory.points;
        result2DOM.textContent = RytasTotal;

    }
scoreHistory.splice(i,1);
historyDOM.innerHTML = prepareHTML(scoreHistory);
localStorage.setItem('taskai', JSON.stringify(scoreHistory));



}
    result1DOM.textContent = NeptunasTotal;
    result2DOM.textContent = RytasTotal;
    
    

function neptunasOne() {
    NeptunasTotal++;
    result1DOM.textContent = NeptunasTotal;
    addHistory(1,"Neptunas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(scoreHistory));
}
function neptunasTwo() {
    NeptunasTotal += 2;
    result1DOM.textContent = NeptunasTotal;
    addHistory(2,"Neptunas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(scoreHistory));
}
function neptunasThree() {
    NeptunasTotal += 3;
    result1DOM.textContent = NeptunasTotal;
    addHistory(3,"Neptunas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(scoreHistory));
}

function rytasOne() {
    RytasTotal++;
    result2DOM.textContent = RytasTotal;
    addHistory(1,"Lietuvos rytas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(scoreHistory));
}
function rytasTwo() {
    RytasTotal += 2;
    result2DOM.textContent = RytasTotal;
    addHistory(2,"Lietuvos rytas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(scoreHistory));
}
function rytasThree() {
    RytasTotal += 3;
    result2DOM.textContent = RytasTotal;
    addHistory(3,"Lietuvos rytas", formatTime(Date.now()));
    localStorage.setItem('taskai', JSON.stringify(scoreHistory));
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