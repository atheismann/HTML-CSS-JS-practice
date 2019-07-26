document.getElementById('div1').onclick = changeColor();
document.getElementById('div2').onclick = changeText();
document.getElementById('div3').onmouseover = makeDisappear();
document.getElementById('div4').onmouseover = makeLarge();

/*---- Functions ----*/

function changeColor() {
    document.getElementById('div1').style.color = "lightblue";
};

function changeText() {
    document.getElementById('div2').textContent = "Congrats The Text Has Changed!";
}

function makeDisappear() {
    document.getElementById('div3').style.display = 'none';
}

function makeLarge() {
    document.getElementById('div4').style.size = '42px';
}