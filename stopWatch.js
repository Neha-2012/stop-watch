
//dom Elements
const dom = {
     
     dataHour: document.getElementById('hours'),
    dataMin: document.getElementById('minute'),
    dataSec: document.getElementById('seconds'),
    start: document.getElementById('startButton'),
    restart: document.getElementById('restartButton'),
    stop: document.getElementById('stopButton')
};

let intervalid;

//handler for startButton
dom.start.addEventListener('click', () => {
    intervalid = setInterval(() => {
        let sec = dom.dataSec.value;
        dom.dataSec.value = Number(sec) + 1;
        if (Number(sec) == 60) {
            let min = dom.dataMin.value;
            dom.dataMin.value = Number(min) + 1;
            dom.dataSec.value = 0;
        }
        let min = dom.dataMin.value;
        if (Number(min) == 60) {
            let hour = dom.dataHour.value;
            dom.dataHour.value = Number(hour) + 1;
            dom.dataMin.value = 0;
        }
    }, 1000);
});

// handler for stopButton
dom.stop.addEventListener('click', () => {
    clearInterval(intervalid);
});

//handler for restartButton
dom.restart.addEventListener('click', () => {
    dom.dataSec.value = 0;
    dom.dataMin.value = 0;
    dom.dataHour.value = 0;
});
