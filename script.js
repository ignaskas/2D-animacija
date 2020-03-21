// genres
//TODO: set values to 0 before final test!
let genres = {
    rpg: 10,
    horror: 0,
    adventure: 0,
    strategy: 0,
    scfi: 0
};

// path we take states
let currentState;
let state2 = {
    name: 'forest_bridge',
    locationX: 321,
    locationY: 558,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};
let state3 = {
    name: 'portal',
    locationX: 591,
    locationY: 896,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doABarrelRoll()
    }
};
let state4 = {
    name: 'road',
    locationX: 896,
    locationY: 676,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state5 = {
    name: 'forest',
    locationX: 405,
    locationY: 356,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state6 = {
    name: 'forest_after_water',
    locationX: 884,
    locationY: 320,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state7 = {
    name: 'city_after_forest',
    locationX: 1130,
    locationY: 512,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state8 = {
    name: 'road_after_city',
    locationX: 1130,
    locationY: 630,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state9 = {
    name: 'bridge_before_dragon',
    locationX: 1478,
    locationY: 536,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state10 = {
    name: 'final_boss',
    locationX: 1640,
    locationY: 569,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state11 = {
    name: 'portal_inside',
    locationX: 1510,
    locationY: 342,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state12 = {
    name: 'after_portal_boss',
    locationX: 1680,
    locationY: 436,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state13 = {
    name: 'jungle_quest',
    locationX: 1022,
    locationY: 778,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state14 = {
    name: 'return_to_quest_after_jungle',
    locationX: 940,
    locationY: 666,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state15 = {
    name: 'go_to_city_after_quest',
    locationX: 1108,
    locationY: 574,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state16 = {
    name: 'ignore_quest',
    locationX: 1126,
    locationY: 634,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state17 = {
    name: 'go_to_mage_tower_before_city',
    locationX: 1472,
    locationY: 536,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state18 = {
    name: 'mage_tower_last_boos_from_city',
    locationX: 1622,
    locationY: 568,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state19 = {
    name: 'go_to_city_after_ignoring_quest',
    locationX: 1098,
    locationY: 558,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state20 = {
    name: 'what_to_do_after_kicked_out_of_city',
    locationX: 1208,
    locationY: 614,
    possibleOutcomes: [

    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let state1 = {
    name: 'initial',
    locationX: 600,
    locationY: 400,
    possibleOutcomes: [
        state2,
        state3,
        state4
    ],
    complicatedBehaviour: function(){
        // doNothing
    }
};

let buttons = [];

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
    if ((currentState.locationY > locationY) && (currentState.locationX > locationX)) {  //we are moving NW -- top left
        $('#player').css('background-position', '120px 0px');
    } else if ((currentState.locationY < locationY) && (currentState.locationX < locationX)) { //we are moving SE -- bottom rigth
        $('#player').css('background-position', '60px 0px');
    } else if ((currentState.locationY > locationY) && (currentState.locationX < locationX)) { //we are moving NE -- top rigth
        $('#player').css('background-position', '0px 0px');
    } else if ((currentState.locationY < locationY) && (currentState.locationX > locationX)) { //we are moving SW -- bottom left
        $('#player').css('background-position', '200px 0px');
    }
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
    console.log("X: " + event.clientX + " " + "Y: " + event.clientY);
}

document.addEventListener("click", printMousePos);

//  Animation and flavor text area showhide
function makeMove(locationX, locationY) {
    witchsidedoiface(locationX, locationY);
    $('#player').animate({left: locationX - 30, top: locationY - 80}, 5000);
    // setTimeout(flavortextshowhide, 5000);

}

currentState = state1;
updatePossibilities();

function updatePossibilities() {
    for (let aState of currentState.possibleOutcomes) {

        $('#' + aState.name).css('display', 'block');
        $('#' + aState.name).click(function() {
            aState.complicatedBehaviour();
            click(aState)
        });

    }
}

function click(state) {
    makeMove(state.locationX, state.locationY); /*-> turning, movement*/
    // hide old buttons
    for(let aState of currentState.possibleOutcomes){
        $('#' + aState.name).css('display', 'none');
    }
    currentState = state;
    updatePossibilities(); /*-> hide old buttons, create new buttons for all the possible next outcomes*/
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