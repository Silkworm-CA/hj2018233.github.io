let PictureRank = 0;
let TotalPictures = 2;
function End()
{
    document.getElementById("start").classList.add("fde");
    setTimeout(Add, 1000);
    document.getElementsByTagName("html")[0].style.backgroundImage = "white";
}
function Add()
{
    if(PictureRank == 0){
        document.getElementById("nxt-page").style.visibility = "visible"
        document.getElementById("bdy").innerHTML += "<div id=\"main\" class=\"card fde-in\"></div>";
        PictureRank += 1;
    }
    else{
        if(PictureRank < TotalPictures) {
            PictureRank += 1;
            document.getElementById("main").style.backgroundImage = `url(/6b4f2bdee6255c2072dfbfdbfb2bb966/img/${PictureRank}.png)`;
            if(PictureRank == TotalPictures) {
                document.getElementById("nxt-page").style.visibility = "hidden";
            }
        }
    }
}