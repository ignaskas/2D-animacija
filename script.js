// genres
//TODO: set values to 0 before final test!
let genres = {
    rpg: 10,
    horror: 0,
    adventure: 0,
    strategy: 0,
    scfi: 0
};

// cordinate system for animation
let roadlist = [
    [[{name: "forest1" , locationX: 284, locationY: 551}, {name: "forest2", locationX: 392, locationY: 377}, {name: "forest3", locationX: 866, locationY: 329}], [{name: "city", locationX:1002, locationY: 406}, {name: "city2", locationX: 1064, locationY: 426}, {name: "city3", locationX: 1074, locationY: 512}], [{name: "magetower1", locationX: 1134, locationY: 650}, {name: "magetower2", locationX: 1454, locationY: 550}, {name: "magetower3", locationX: 1634, locationY: 578}]],
    [[{name: "road1" , locationX: 430, locationY: 668}, {name: "road2", locationX: 856, locationY: 645}, {name: "road3", locationX: 896, locationY: 636}], [{name: "jungle1", locationX: 921, locationY: 683}, {name: "jungle2", locationX: 985, locationY: 695}, {name: "jungle3", locationX: 1013, locationY: 775}], [{name: "backtocamp1", locationX: 991, locationY: 685}, {name: "backtocamp2", locationX: 925, locationY: 681}, {name: "backtocamp3", locationX: 899, locationY: 649}], [{name: "tocityafterjungle1", locationX: 989, locationY: 675}, {name: "tocityafterjungle2", locationX: 1131, locationY: 651}, {name: "tocityafterjungle3", locationX: 1091, locationY: 545}], [{name: "magetower1", locationX: 1134, locationY: 650}, {name: "magetower2", locationX: 1454, locationY: 550}, {name: "magetower3", locationX: 1634, locationY: 578}]],
    [[{name: "portal1" , locationX: 598, locationY: 898}, {name: "portal2", locationX: 1141, locationY: 365}, {name: "portal3", locationX: 1498, locationY: 360}], [{name: "tomagetower1", locationX: 1579, locationY: 381}, {name: "tomagetower2", locationX: 1679, locationY: 451}, {name: "tomagetower3", locationX: 1667, locationY: 511}]],
];

//TODO: change the cordinates to fit the map
//Path we take
let loc = [
    {
        name: "Current_Position", // 0 for cheking withc direction we are facing
        locationX: 332,
        locationY: 643
},
    {
        name: "New_Position", // 1  for cheking withc direction we are facing
        locationX: 0,
        locationY: 0
    }
];

// atributes
let int = 4;
let str = 4;
let agy = 4;
let pointstospend = 5;

// move counter
let moves = -1;

// items
let glassKey = true;
let armor = false;
let flask = true;
let flaskfull = false;
let sword = false;
let blaster = false;
let staff = false;
let bagOfCoins = false;

// event memory
// event memory goes here

// ATRIBUTE ASSIGMENT---------------
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

//ATRIBUTE ASSIGMENT ENDS---------------

// switches divsbackground image based on witch way charter is moving
function witchsidedoiface(locationX, locationY) {
    // console.log("f " + locationX, "f+ " + locationY);
    if ((loc[0].locationY > locationY) && (loc[0].locationX > locationX)) {  //we are moving NW -- top left
        $('#player').css('background-position', '120px 0px');
    } else if ((loc[0].locationY < locationY) && (loc[0].locationX < locationX)) { //we are moving SE -- bottom rigth
        $('#player').css('background-position', '60px 0px');
    } else if ((loc[0].locationY > locationY) && (loc[0].locationX < locationX)) { //we are moving NE -- top rigth
        $('#player').css('background-position', '0px 0px');
    } else if ((loc[0].locationY < locationY) && (loc[0].locationX > locationX)) { //we are moving SW -- bottom left
        $('#player').css('background-position', '200px 0px');
    }
    loc[0].locationX = locationX;
    loc[0].locationY = locationY;
}
//TODO: fit all atribute cheks in to 1 function
// atribute check at specific move
function atributechek() {
    if (str >= 5) {
        return true;
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

//TODO: console.log needs to be removed and replaced with proper call function
console.log(chekbest(genres));

//TODO: remove this before test
//prints location of mouse curson onclick
function printMousePos(event) {
    document.getElementById("pos").innerHTML =
        "clientX: " + event.clientX + "<br>" + " - clientY: " + event.clientY;
    // console.log("X" + " " + event.clientX + " " + "Y" + " " + event.clientY);
    // moveonX = event.clientX;
    // moveonY = event.clientY;
    // loc[1].locationY = moveonY;
    // loc[1].locationX = moveonX;
    // makeMove();
}

document.addEventListener("click", printMousePos);

//  Animation and flavor text area showhide
function makeMove(locationX, locationY) {
    witchsidedoiface(locationX, locationY);
    $('#player').animate({left: locationX - 30, top: locationY - 80}, 5000);
    // setTimeout(flavortextshowhide, 5000);
    // loc[0].locationX = loc[1].locationX;
    // loc[0].locationY = loc[1].locationY;
}

// MOVEMENT---------------
// TODO: set timeout as a variable
// moves from first card
function firstcard() {
    moves += 1;
    for(i = 0; i < roadlist.length; i++){
        console.log(roadlist[0][moves][i].locationX + " " + roadlist[0][moves][i].locationY);
        makeMove(roadlist[0][moves][i].locationX, roadlist[0][moves][i].locationY);
    }
    flavortextshowhide();
    setTimeout(flavortextshowhide, 5000);
}

// moves from second card
function secondcard() {
    moves += 1;
    for(i = 0; i < roadlist.length; i++){
        console.log(roadlist[1][moves][i].locationX + " " + roadlist[0][moves][i].locationY);
        makeMove(roadlist[1][moves][i].locationX, roadlist[1][moves][i].locationY);
    }
    flavortextshowhide();
    setTimeout(flavortextshowhide, 5000);
}

// moves from third card
function thirdcard() {
    moves += 1;
    for(i = 0; i < roadlist.length; i++){
        console.log(roadlist[2][moves][i].locationX + " " + roadlist[0][moves][i].locationY);
        makeMove(roadlist[2][moves][i].locationX, roadlist[2][moves][i].locationY);
    }
    flavortextshowhide();
    setTimeout(flavortextshowhide, 5000);
}

//MOVMENT ENDS---------------

// FLAVOR TEXT EDDITS/BACKGROUND CHANGES------------------
//hide/show flavor text
// TODO: change the timer for this and add a proper trigger
function flavortextshowhide() {
    $('#flavor_text').toggle("fast");
    $('#cards').toggle("fast");
    $('#blackout').fadeOut("slow");
}

//FLAVOR TEXT EDDITS/BACKGROUND CHANGES END---------------

//TODO: REMOVE THIS THIS IS FOR TESTING ONLY MUST BE REMOVES AFTER BUTTON STYLE IS DONE!
window.onload = function () {
    flavortextshowhide();
};

function test() {
    $('#flavor_text').toggle("slow");
    $('#cards').toggle("fast");
    $('#starting_screen').toggle("fast");
}