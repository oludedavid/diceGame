function rollOut1() {
    var content = document.querySelector(".img1").setAttribute("src", "images/5.png");

}

function rollOut2() {
    var content = document.querySelector(".img2").setAttribute("src", "images/5.png");

}

function dice() {
    var imgAttribute1 = document.querySelector(".img1").getAttribute("src");
    var allImages1 = ["images/0.png", "images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png"];
    var randIMG1 = Math.floor(Math.random() * allImages1.length);
    var refreshMe1 = allImages1[randIMG1];
    var randomImages1 = document.querySelector(".img1").setAttribute("src", refreshMe1);


    var imgAttribute2 = document.querySelector(".img2").getAttribute("src");
    var allImages2 = ["images/0.png", "images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png"];
    var randIMG2 = Math.floor(Math.random() * allImages2.length);
    var refreshMe2 = allImages2[randIMG2];
    var randomImages2 = document.querySelector(".img2").setAttribute("src", refreshMe2);


    if (randIMG1 > randIMG2) {
        document.querySelector("h1").innerHTML = "Unna Wins Peter would be happy!";
        document.querySelector("h1").style.color = "#F54748";
    } else if (randIMG1 === randIMG2) {
        document.querySelector("h1").innerHTML = "Draw";

    } else {
        document.querySelector("h1").innerHTML = "Werl wins Peter would be sad!";
        document.querySelector("h1").style.color = "#04009A";
    }
}