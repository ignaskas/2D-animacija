// genres
//TODO: set values to 0 before final test!
let genres = {
    rpg: 10,
    horror: 0,
    adventure: 0,
    strategy: 0,
    scfi: 0
};

// were are we going
let moveonX = 0;
let moveonY = 0;

let foo = [
    [{name: "card1" , locationX: 338, locationY:  409}],
];

let roadlist = [
    [[{name: "road1" , locationX: 284, locationY: 551}], [{name: "road1", locationX: 392, locationY: 377}], [{name: "road1", locationX: 866, locationY: 329}]],
    [[{name: "road2" , locationX: 284, locationY: 551}], [{name: "road2", locationX: 392, locationY: 377}], [{name: "road2", locationX: 866, locationY: 329}]],
    // [{name: "card3" , locationX: 900, locationY: 652}]
];

//TODO: change the cordinates to fit the map
//Path we take
let loc = [
    {
        name: "Current_Position", // 0 for cheking withc direction we are facing
        locationX: 0,
        locationY: 0
    },
    {
        name: "New_Position", // 1  for cheking withc direction we are facing
        locationX: 0,
        locationY: 0
    }
    // {
    //     name: "Portal", // 2
    //     locationX: 602,
    //     locationY: 877,
    // },
    // {
    //     name: "Portal_Exit", // 3
    //     locationX: 1508,
    //     locationY: 339
    // },
    // {
    //     name: "Forest", // 4
    //     locationX: 338,
    //     locationY: 409
    // },
    // {
    //     name: "Bridge_After_Forest", // 5
    //     locationX: 882,
    //     locationY: 331
    // },
    // {
    //     name: "Merchant_Camp",  // 6
    //     locationX: 900,
    //     locationY: 652
    // },
    // {
    //     name: "Jungle",  // 7
    //     locationX: 1021,
    //     locationY: 780
    // },
    // {
    //     name: "City",  // 8
    //     locationX: 1083,
    //     locationY: 540
    // },
    // {
    //     name: "Bridge_Before_mage_tower",  // 9
    //     locationX: 1481,
    //     locationY: 552
    // },
    // {
    //     name: "Ending",  // 10
    //     locationX: 1645,
    //     locationY: 496
    // }
];

// atributes
let int = 4;
let str = 4;
let agy = 4;
let pointstospend = 5;

// move counter
let moves = 0;

// items
let glassKey = true;
let armor = false;
let flask = false;
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
    console.log("X" + " " + event.clientX + " " + "Y" + " " + event.clientY);
    // moveonX = event.clientX;
    // moveonY = event.clientY;
    // loc[1].locationY = moveonY;s
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
// TODO: change this to a proper function
// moves from first card
function firstcard() {
    moves += 1;
    for(i = 0; i < roadlist[moves].length; i++){
        console.log(roadlist[0][i][0].locationX + " " + roadlist[0][i][0].locationY);
        makeMove(roadlist[0][i][0].locationX, roadlist[0][i][0].locationY);
    }
}

// moves from second card
function secondcard() {

}

// moves from third card
function thirdcard() {
    flavortextshowhide();
    moves += 1;
    switch (moves) {
        case 1:
            moveonX = loc[2].locationX;
            moveonY = loc[2].locationY;
            loc[1].locationX = moveonX;
            loc[1].locationY = moveonY;
            makeMove();
            break;
        case 2:
            moveonX = loc[3].locationX;
            moveonY = loc[3].locationY;
            loc[1].locationY = moveonY;
            loc[1].locationX = moveonX;
            makeMove();
            break;
        case 3:
            moveonX = loc[4].locationX;
            moveonY = loc[4].locationY;
            loc[1].locationY = moveonY;
            loc[1].locationX = moveonX;
            makeMove();
            break;
        case 4:
            moveonX = loc[5].locationX;
            moveonY = loc[5].locationY;
            loc[1].locationY = moveonY;
            loc[1].locationX = moveonX;
            makeMove();
            break;
        case 5:
            moveonX = loc[6].locationX;
            moveonY = loc[6].locationY;
            loc[1].locationY = moveonY;
            loc[1].locationX = moveonX;
            makeMove();
            break;
        default:
            moves = 0;
            moveonX = loc[2].locationX;
            moveonY = loc[2].locationY;
            loc[1].locationX = moveonX;
            loc[1].locationY = moveonY;
            makeMove();
            break;
    }
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