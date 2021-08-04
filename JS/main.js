
const billElement = document.getElementById('bill_display');
const pplElement = document.getElementById('people_display');
const tipElement = document.getElementById('tipAmount');
const totalELement = document.getElementById('total');
const resetBtn = document.getElementById('reset');
const errorMsg = document.getElementById('errorMsg');
const inputError = document.getElementById("people_display");

const fiveElement = document.getElementById('five');
const tenElement = document.getElementById('ten');
const fifteenElement = document.getElementById('fifteen');
const twentyFiveElement = document.getElementById('twentyFive');
const fiftyElement = document.getElementById('fifty');
const customBtn = document.getElementById('custom');

//-------Deactives Button-------
function resetBtnState() {
    fiveElement.setAttribute('class', 'button__normal');
    tenElement.setAttribute('class', 'button__normal');
    fifteenElement.setAttribute('class', 'button__normal');
    twentyFiveElement.setAttribute('class', 'button__normal');
    fiftyElement.setAttribute('class', 'button__normal');

}

//-------Resets The Splitter-------
function zero() {
    resetBtnState();
    billElement.value = "";
    pplElement.value = "";
    tipElement.textContent = "$0.00";
    totalELement.textContent = "$0.00";
    errorMsg.textContent = "";
    pplElement.setAttribute('id', 'people_display');
}

//-------Actives The Pressed Button-------
function pressedButton() {
    resetBtnState();
    this.setAttribute('class','active__state');
}

//-------Splitter Calculations-------
function splitterApp() {
    let tip = (billElement.value * this.value) / (100 * pplElement.value);
    let total = (billElement.value / pplElement.value) + tip;

    if (pplElement.value <= 0) {
        errorMsg.textContent = "Can't Be Zero";
        pplElement.setAttribute('id', 'error__borders');
        tipElement.textContent = '$0.00';
        totalELement.textContent = '$0.00';
        resetBtnState();
        e.preventDefault();
    }else
    tipElement.textContent = '$' + tip.toFixed(2);
    totalELement.textContent = '$' + total.toFixed(2);
    errorMsg.textContent = "";
    pplElement.setAttribute('id', 'people_display');
}

//-----------Removes ErrorMsgs--------------
function removeErrorMsgs() {
    errorMsg.textContent = "";
    resetBtnState();
    pplElement.setAttribute('id', 'people_display');
}

resetBtn.addEventListener('click', zero, false);

fiveElement.addEventListener('click', pressedButton, false);
tenElement.addEventListener('click', pressedButton, false);
fifteenElement.addEventListener('click', pressedButton, false);
twentyFiveElement.addEventListener('click', pressedButton, false);
fiftyElement.addEventListener('click', pressedButton, false);

fiveElement.addEventListener('click', splitterApp,false);
tenElement.addEventListener('click', splitterApp,false);
fifteenElement.addEventListener('click', splitterApp,false);
twentyFiveElement.addEventListener('click', splitterApp,false);
fiftyElement.addEventListener('click', splitterApp,false);
customBtn.addEventListener('input', splitterApp,false);

customBtn.addEventListener('focus', resetBtnState,false);


pplElement.addEventListener('focus', removeErrorMsgs,false);