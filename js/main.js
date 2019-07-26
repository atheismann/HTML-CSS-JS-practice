document.getElementById('div1').addEventListener('click', changeColor);
document.getElementById('div2').addEventListener('click', changeText);
document.getElementById('div3').addEventListener('mouseover', makeDisappear);
document.getElementById('div4').addEventListener('mouseout', makeLarge);

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
    document.getElementById('div4').style.fontSize = '42px';
}