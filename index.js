
const buttonsDOM = document.querySelectorAll('.taskai button');
const Neptunas3DOM = buttonsDOM[2];
const Neptunas2DOM = buttonsDOM[1];
const Neptunas1DOM = buttonsDOM[0];
const Rytas1DOM = buttonsDOM[3];
const Rytas2DOM = buttonsDOM[4];
const Rytas3DOM = buttonsDOM[5];
const resultsDOM = document.querySelectorAll('h3');
const result1DOM = resultsDOM[0];
const result2DOM = resultsDOM[1];

const inputDOM = document.querySelector('input');
const countDOM = document.querySelector('.count');



let taskaiData = [];
const localData = localStorage.getItem('taskai');
if (localData !== null) {
    taskaiData = JSON.parse(localData);
    addhistory();
    countPoints();
}

Neptunas1DOM.addEventListener('click', () => {
    taskaiData.push({
        team: 'neptunas',
        taskai: 1,
        color: 'blue',
        time: Date.now(),
    })
    addhistory();
    countPoints();
});
Neptunas2DOM.addEventListener('click', () => {
    taskaiData.push({
        team: 'neptunas',
        taskai: 2,
        color: 'blue',
        time: Date.now(),
    })
    addhistory();
    countPoints();
});
Neptunas3DOM.addEventListener('click', () => {
    taskaiData.push({
        team: 'neptunas',
        taskai: 3,
        color: 'blue',
        time: Date.now(),
    })
    addhistory();
    countPoints();
});
Rytas1DOM.addEventListener('click', () => {
    taskaiData.push({
        team: 'rytas',
        taskai: 1,
        color: 'green',
        time: Date.now(),
    })
    addhistory();
    countPoints();
});
Rytas2DOM.addEventListener('click', () => {
    taskaiData.push({
        team: 'rytas',
        taskai: 2,
        color: 'green',
        time: Date.now(),
    })

    addhistory();
    countPoints();
});
Rytas3DOM.addEventListener('click', () => {
    taskaiData.push({
        team: 'rytas',
        taskai: 3,
        color: 'green',
        time: Date.now(),
    })
    addhistory();
    countPoints();
});


function addhistory() {
    localStorage.setItem('taskai', JSON.stringify(taskaiData))
    let HTML = '';
    console.log(taskaiData);
    for (const taskai of taskaiData) {
        HTML += `
        <div class="taskai istorija">
        <p >Time: ${formatTime(taskai.time)} </p>
        <p style="color:${taskai.color}">Team ${taskai.team} scored ${taskai.points} point${taskai.points > 1 ? 's' : ''}</p>
        <button class="delete">Delete</button>
        </div>`;
    }
    let historyDOM = document.querySelector('.istorija');
    historyDOM.innerHTML = HTML;
    const taskaiDOM = document.querySelectorAll('.taskai');
    for (let i = 0; i < taskaiDOM.length; i++) {
        taskaiDOM[i].querySelector('button').addEventListener('click', () => {
            taskaiData.splice(i, 1);
            localStorage.setItem('taskai', JSON.stringify(taskaiData))
        
            countPoints();
            addhistory();
        })
    }
}
function countPoints() {
    let NeptunasTotal = 0;
    let RytasTotal = 0;
    for (const taskai of taskaiData) {
        if (taskai.team === 'neptunas') {
            NeptunasTotal += taskai.points;
        } else {
            RytasTotal += taskai.points;
        }
    }
    result1DOM.textContent = NeptunasTotal;
    result2DOM.textContent = RytasTotal;
}

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