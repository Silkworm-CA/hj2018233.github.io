function rotate() {
    document.getElementById("btn").style.zIndex = "-1";
    document.getElementById("rotate-pic").style.transform = "translate(-50%, -50%) rotateX(-0.5turn)"
    setTimeout(fde, 2000);
}
function fde() {
    document.getElementById("rotate-pic").style.visibility = "hidden";
    document.getElementById("pic").classList.toggle('fde');
    setTimeout(down, 2000);
}
function down() {
    document.getElementById("pic").style.zIndex = "-1";
}
function change() {
    document.getElementById("container").classList.toggle('hover');
    setTimeout(hide, 2000);   
}
function hide() {
    document.getElementsByClassName("front")[0].style.visibility = "hidden";
}