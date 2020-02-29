// genres
//TODO: set values to 0 before final test!
let genres = {
    rpg: 10,
    horror: 11,
    adventure: 0,
    strategy: 0,
    scfi: 0
};
//player location
let player = {
    position: 1,
    xy: [0, 0],
    card: 0
};
//Path we take
let path = [
    {
        name: "ourlastpos",
        locationX: 0,
        locationY: 0
    },
    {
        name: "firstmove",
        locationX: 670,
        locationY: 293
    },
    {
        name: "secondmove",
        locationX: 864,
        locationY: 447
    }
];
// atributes
let int = 4;
let str = 4;
let agy = 4;
let pointstospend = 5;
// move counter
let moves = 0;
// event memory
// event memory goes here

// spend skills points to increase int stat
function addint() {
    if (pointstospend >= 1) {
        int += 1;
        pointstospend -= 1;
        document.getElementById("statint").innerHTML = "Int:" + " " + int;
        document.getElementById("pointsleft").innerHTML = "left:" + " " + pointstospend;
    }
}

// spend skill points to increase str stat
function addstr() {
    if (pointstospend >= 1) {
        str += 1;
        pointstospend -= 1;
        document.getElementById("statstr").innerHTML = "Agy:" + " " + str;
        document.getElementById("pointsleft").innerHTML = "left:" + " " + pointstospend;
    }
}

// spend skill points to increase agy stat
function addagy() {
    if (pointstospend >= 1) {
        agy += 1;
        pointstospend -= 1;
        document.getElementById("statagy").innerHTML = "Agy:" + " " + agy;
        document.getElementById("pointsleft").innerHTML = "left:" + " " + pointstospend;
    }
}

// 1 button move animation + move counter
function makeMove() {
    witchsidedoiface();
    $('#player').animate({left: path[1].locationX - 30, top: path[1].locationY - 80},5000)
    .delay(1000);
    path[0].locationX = path[1].locationX;
    path[0].locationY = path[1].locationY;
}

function witchsidedoiface() {
    if ((path[0].locationY > path[1].locationY)&&(path[0].locationX > path[1].locationX)){  //we are moving NW
        $('#player').css('background-position', '120px 0px');
    }
    else if ((path[0].locationY < path[1].locationY)&&(path[0].locationX < path[1].locationX)){ //we are moving SE
        $('#player').css('background-position', '60px 0px');
    }
    else if ((path[0].locationY > path[1].locationY)&&(path[0].locationX < path[1].locationX)){ //we are moving NE
        $('#player').css('background-position', '0px 0px');
    }
    else if ((path[0].locationY < path[1].locationY)&&(path[0].locationX > path[1].locationX)){ //we are moving SW
        $('#player').css('background-position', '200px 0px');
    }
}

//TODO: fit all atribute cheks in to 1 function
// atribute check at specific move
function strchek() {
    if (str >= 5 && moves === 3) {
        $('#player').animate({left: "80px", top: "60px"});
    }
}

//TODO: clean this up a bit!
// pull highest value from genre object array returnit as variable name
function chekbest(genres) {
    var max = -Infinity;
    var maxname = null;
    for (var key in genres) {
        var num = genres[key];

        if (num > max) {
            max = num;
            maxname = key;
        }

        max = (num > max && num) || max;
    }

    return maxname;
}

console.log(chekbest(genres));

function printMousePos(event) {
    document.getElementById("pos").innerHTML =
        "clientX: " + event.clientX +
        " - clientY: " + event.clientY;
    path[1].locationY = event.clientY;
    path[1].locationX = event.clientX;
    makeMove();
}

document.addEventListener("click", printMousePos);