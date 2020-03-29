// genres
let genres = {
    rpg: 0,
    horror: 0,
    adventure: 0,
    strategy: 0,
    scfi: 0
};

// game states / movement cordinates / atribute checks
let currentState;

let state5 = {
    name: 'notnow',
    locationX: 321,
    locationY: 558,
    possibleOutcomes: [
        // state4,
        // state4,
        // state4
    ],
    steps: [
        {
            locationX: 0,
            locationY: 0
        },
        {
            locationX: 123,
            locationY: 234
        },
        {
            locationX: 456,
            locationY: 678
        }
    ],
    attributeCheck: function() {
        if(int >= 6){
            return true
        } else {
            return false
        }
    },
    complicatedBehaviour: function () {
        genres.rpg += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 15000);
    }
};

let state4 = {
    name: 'portal',
    locationX: 597,
    locationY: 893,
    possibleOutcomes: [
        state5,
        state5,
        state5
    ],
    steps: [
        {
            locationX: 419,
            locationY: 689
        },
        {
            locationX: 429,
            locationY: 741
        },
        {
            locationX: 597,
            locationY: 893
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.rpg += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 15000);
    }
};

let state3 = {
    name: 'road',
    locationX: 853,
    locationY: 681,
    possibleOutcomes: [
        state4,
        state4,
        state4
    ],
    steps: [
        {
            locationX: 455,
            locationY: 675
        },
        {
            locationX: 619,
            locationY: 679
        },
        {
            locationX: 853,
            locationY: 681
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.rpg += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 15000);
    }
};

let state2 = {
    name: 'dark_forest',
    locationX: 457,
    locationY: 393,
    possibleOutcomes: [
        state3,
        state4,
        state5
    ],
    steps: [
        {
            locationX: 379,
            locationY: 597
        },
        {
            locationX: 253,
            locationY: 543
        },
        {
            locationX: 457,
            locationY: 393
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.rpg += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 15000);
    }
};

let state1 = {
    name: 'initial',
    locationX: 310,
    locationY: 560,
    possibleOutcomes: [
        state2,
        state3,
        state4
    ],
    steps: [
        {
            locationX: 0,
            locationY: 0
        },
        {
            locationX: 123,
            locationY: 234
        },
        {
            locationX: 456,
            locationY: 678
        }
    ],
    attributeCheck: function() {

    },

    complicatedBehaviour: function () {
        // click(this)
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
function witchsidedoiface(prevX, locationX, prevY, locationY) {
    // console.log("f " + locationX, "f+ " + locationY);
    if ((prevY > locationY) && (prevX > locationX)) {  //we are moving NW -- top left
        $('#player').css('background-position', '120px 0px');
    } else if ((prevY < locationY) && (prevX < locationX)) { //we are moving SE -- bottom rigth
        $('#player').css('background-position', '60px 0px');
    } else if ((prevY > locationY) && (prevX < locationX)) { //we are moving NE -- top rigth
        $('#player').css('background-position', '0px 0px');
    } else if ((prevY < locationY) && (prevX > locationX)) { //we are moving SW -- bottom left
        $('#player').css('background-position', '200px 0px');
    }
}

// chek witch genre got the highest score return the name of genre
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

// animate movement from array call withcwaydoiface function
function makeMove(prevX, locationX, prevY, locationY) {
    witchsidedoiface(prevX, locationX, prevY, locationY);
    $('#player').animate({left: locationX - 30, top: locationY - 80}, 5000);
}
//check game state set new game state generate new set of cards for posibale movement set text for next move
currentState = state1;
updatePossibilities();

function updatePossibilities() {
    for (let aState of currentState.possibleOutcomes) {

        if(aState.attributeCheck()){
            $('#' + aState.name).css('display', 'block');
            $('#' + aState.name).click(function () {
                aState.complicatedBehaviour();
                click(aState)
            });
        }

    }
}

// assign click function to generated cards based on game state call movement function with a delay
function click(state) {
    let x = currentState.locationX;
    let y = currentState.locationY;
    state.steps.forEach(function (value, index) {
        setTimeout(()=>{
            makeMove(x, value.locationX, y, value.locationY);
            x=value.locationX;
            y=value.locationY;
        }, index*5000)
    });
    setTimeout(()=>{
        for (let aState of currentState.possibleOutcomes) {
            $('#' + aState.name).css('display', 'none');
        }
        currentState = state;
        updatePossibilities(); /*-> hide old buttons, create new buttons for all the possible next outcomes*/
    },state.steps.length*5000)
}


//MOVMENT ENDS---------------

/* FLAVOR TEXT EDDITS/BACKGROUND CHANGES------------------
hide/show flavor text*/

//hide loading screen hide cards during movement hide flavor text during movment
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
//TODO: this needs to go as well
function test() {
    $('#flavor_text').toggle("slow");
    $('#cards').toggle("fast");
    $('#starting_screen').toggle("fast");
}