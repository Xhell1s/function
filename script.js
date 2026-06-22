let darkBtn = document.querySelector(".btn-2");
let lightBtn = document.querySelector(".btn-1");

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function lightMode() {
    document.body.style.backgroundColor = "blanchedalmond";
    document.body.style.color = "black";
}

darkBtn.onclick = darkMode;
lightBtn.onclick = lightMode;