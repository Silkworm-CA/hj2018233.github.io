let PictureRank = 0;
let TotalPictures = 5;
function End()
{
    document.getElementById("start").classList.add("fde");
    setTimeout(Add, 1000);
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
            document.getElementById("main").style.backgroundImage = `url(/6811e4f88eb5ee02275feba49c774584/img/${PictureRank}.png)`;
            if(PictureRank == TotalPictures) {
                document.getElementById("nxt-page").style.visibility = "hidden";
            }
        }
    }
}