// genres
//TODO: set values to 0 before final test!
let genres = {
    rpg: 10,
    horror: 11,
    adventure: 0,
    strategy: 0,
    scfi: 0
};

// were are we going
let moveonX = 0;
let moveonY = 0;

//TODO: change the cordinates to fit the map
//Path we take
let path = [
    {
        name: "ourlastpos",
        locationX: 0,
        locationY: 0
    },
    {
        name: "ournewpos",
        locationX: 670,
        locationY: 293
    },
    {
        name: "firstmove",
        locationX: 864,
        locationY: 447
    },
    {
        name: "secondmove",
        locationX: 1046,
        locationY: 479
    },
    {
        name: "3thmove",
        locationX: 938,
        locationY: 243
    },
    {
        name: "4thmove",
        locationX: 938,
        locationY: 243
    },
    {
        name: "5thmove",
        locationX: 938,
        locationY: 243
    },
    {
        name: "6thmove",
        locationX: 938,
        locationY: 243
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
        document.getElementById("pointsleft").innerHTML = "Points Left:" + " " + pointstospend;
    }
}

// spend skill points to increase str stat
function addstr() {
    if (pointstospend >= 1) {
        str += 1;
        pointstospend -= 1;
        document.getElementById("statstr").innerHTML = "Agy:" + " " + str;
        document.getElementById("pointsleft").innerHTML = "Points Left:" + " " + pointstospend;
    }
}

// spend skill points to increase agy stat
function addagy() {
    if (pointstospend >= 1) {
        agy += 1;
        pointstospend -= 1;
        document.getElementById("statagy").innerHTML = "Agy:" + " " + agy;
        document.getElementById("pointsleft").innerHTML = "Points Left:" + " " + pointstospend;
    }
}

// switches divsbackground image based on witch way charter is moving
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

//TODO: remove this before test
//prints location of mouse curson onclick
function printMousePos(event) {
    document.getElementById("pos").innerHTML =
        "clientX: " + event.clientX +
        " - clientY: " + event.clientY;
}

document.addEventListener("click", printMousePos);

//  move animation
function makeMove() {
    witchsidedoiface();
    $('#player').animate({left: moveonX - 30, top: moveonY - 80},5000);
        setTimeout(flavortextshowhide, 5000);
    path[0].locationX = path[1].locationX;
    path[0].locationY = path[1].locationY;
}

// TODO: change this to a proper function
// moves from first card
function firstcard() {
    flavortextshowhide();
    moves += 1;
    if (moves === 1) {
        moveonX = path[3].locationX;
        moveonY = path[3].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    } else if (moves === 2){
        moveonX = path[2].locationX;
        moveonY = path[2].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    } else if(moves === 3){
        moveonX = path[4].locationX;
        moveonY = path[4].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    }
    makeMove();
}

// moves from second card
function secondcard() {
    flavortextshowhide();
    moves += 1;
    if (moves === 1) {
        moveonX = path[3].locationX;
        moveonY = path[3].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    } else if (moves === 2){
        moveonX = path[2].locationX;
        moveonY = path[2].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    } else if(moves === 3){
        moveonX = path[4].locationX;
        moveonY = path[4].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    }
    makeMove();
}

// moves from third card
function thirdcard() {
    flavortextshowhide();
    moves += 1;
    if (moves === 1) {
        moveonX = path[3].locationX;
        moveonY = path[3].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    } else if (moves === 2){
        moveonX = path[2].locationX;
        moveonY = path[2].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    } else if(moves === 3){
        moveonX = path[4].locationX;
        moveonY = path[4].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    }
    makeMove();
}

//hide/show flavor text
// TODO: change the timer for this and add a proper trigger
function flavortextshowhide() {
    $('#flavor_text').toggle("slow");
}

//TODO: REMOVE THIS THIS IS FOR TESTING ONLY MUST BE REMOVES AFTER BUTTON STYLE IS DONE!
window.onload = function() {
    flavortextshowhide();
};

function test() {
    $('#cards').toggle("fast");
    $('#pointsleft').toggle("fast");
}