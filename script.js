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

//GO TO CITY AFTER FOREST
let state11 = {
    name: 'go_tocity',
    locationX: 1102,
    locationY: 556,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 1062,
            locationY: 414
        },
        {
            locationX: 1078,
            locationY: 464
        },
        {
            locationX: 1102,
            locationY: 556
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.rpg += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
    }
};

//INT CHECK FOREST
let state10 = {
    name: 'forest_choise_intchek',
    locationX: 1008,
    locationY: 415,
    possibleOutcomes: [
        state11,    //TO CITY
    ],
    steps: [
        {
            locationX: 694,
            locationY: 309
        },
        {
            locationX: 898,
            locationY: 339
        },
        {
            locationX: 1008,
            locationY: 415
        }
    ],
    attributeCheck: function() {
        if (int >= 6){
            return true;
        } else {
            return false;
        }
    },
    complicatedBehaviour: function () {
        genres.rpg += 1;
        filltheflask();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
    }
};

//JUST WALK AWAY
let state9 = {
    name: 'forest_choise_ignore',
    locationX: 1008,
    locationY: 415,
    possibleOutcomes: [
        state11,    //TO CITY
    ],
    steps: [
        {
            locationX: 694,
            locationY: 309
        },
        {
            locationX: 898,
            locationY: 339
        },
        {
            locationX: 1008,
            locationY: 415
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.horror += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
    }
};
//TODO: add dead state
//DRINK THE WATER
let state8 = {
    name: 'forest_choise_drink',
    locationX: 316,
    locationY: 379,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 378,
            locationY: 355
        },
        {
            locationX: 356,
            locationY: 359
        },
        {
            locationX: 316,
            locationY: 379
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.horror += 1;
        youhavedied();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
    }
};
//ROAD
let state7 = {
    name: 'road',
    locationX: 894,
    locationY: 671,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 602,
            locationY: 673
        },
        {
            locationX: 728,
            locationY: 693
        },
        {
            locationX: 894,
            locationY: 671
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
    }
};

//PORTAL
let state6 = {
    name: 'portal',
    locationX: 1510,
    locationY: 344,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 420,
            locationY: 720
        },
        {
            locationX: 606,
            locationY: 884
        },
        {
            locationX: 1510,
            locationY: 344
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.scfi += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
    }
};

//FOREST
let state5 = {
    name: 'forest',
    locationX: 444,
    locationY: 370,
    possibleOutcomes: [
        state8,     //DRINK
        state9,     //WALK AWAY
        state10     //INT CHECK
    ],
    steps: [
        {
            locationX: 370,
            locationY: 574
        },
        {
            locationX: 266,
            locationY: 536
        },
        {
            locationX: 444,
            locationY: 370
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.horror += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
    }
};

//BLASTER
let state4 = {
    name: 'blasterchoise',
    locationX: 424,
    locationY: 678,
    possibleOutcomes: [
        state5,     //FOREST
        state6,     //PORTAL
        state7      //ROAD
    ],
    steps: [
        {
            locationX: 366,
            locationY: 638
        },
        {
            locationX: 360,
            locationY: 676
        },
        {
            locationX: 424,
            locationY: 678
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.scfi += 1;
        hidethekey();
        showblaster();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
    }
};
//STAFF
let state3 = {
    name: 'staffchoise',
    locationX: 424,
    locationY: 678,
    possibleOutcomes: [
        state5,     //FOREST
        state6,     //PORTAL
        state7      //ROAD
    ],
    steps: [
        {
            locationX: 366,
            locationY: 638
        },
        {
            locationX: 360,
            locationY: 676
        },
        {
            locationX: 424,
            locationY: 678
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        hidethekey();
        showstaff();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
    }
};
//SWORD
let state2 = {
    name: 'swordchoise',
    locationX: 424,
    locationY: 678,
    possibleOutcomes: [
        state5,     //FOREST
        state6,     //PORTAL
        state7      //ROAD
    ],
    steps: [
        {
            locationX: 366,
            locationY: 638
        },
        {
            locationX: 360,
            locationY: 676
        },
        {
            locationX: 424,
            locationY: 678
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.rpg += 1;
        hidethekey();
        showsword();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
    }
};
// initial state of the game
let state1 = {
    name: 'initial',
    locationX: 310,
    locationY: 560,
    possibleOutcomes: [
        state2,     //SWORD
        state3,     //STAFF
        state4      //BLASTER
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

// check witch genre got the highest score return the name of genre
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

//TODO: remove this when pathing is done
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
    $('#player').animate({left: locationX - 30, top: locationY - 80}, 2000);
}
//check game state set new game state generate new set of cards for possible movement set text for next move
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
        }, index*2000)
    });
    setTimeout(()=>{
        for (let aState of currentState.possibleOutcomes) {
            $('#' + aState.name).css('display', 'none');
        }
        currentState = state;
        updatePossibilities(); /*-> hide old buttons, create new buttons for all the possible next outcomes*/
    },state.steps.length*2000)
}


//MOVMENT ENDS---------------

/* FLAVOR TEXT EDDITS/BACKGROUND CHANGES------------------
hide/show flavor text*/

//hide cards during movement hide flavor text during movment
function flavortextshowhide() {
    $('#flavor_text').toggle("fast");
    $('#cards').toggle("fast");
}

//FLAVOR TEXT EDDITS/BACKGROUND CHANGES END---------------

// set values to starting state
window.onload = function () {
    flavortextshowhide();
    $('#flask_full').hide();
    $('#armor').hide();
    $('#sword').hide();
    $('#staff').hide();
    $('#blaster').hide();
    $('#bagofcoins').hide();
    $('#didntSpendAllPointsBeforePressingStart').hide();
    $('#blackout').fadeOut("slow");
};
// start the game only if all atribute points were spent
function startgame() {
    if (pointstospend === 0) {
        $('#flavor_text').toggle("slow");
        $('#cards').toggle("fast");
        $('#starting_screen').toggle("fast");
        $('#didntSpendAllPointsBeforePressingStart').hide();
    } else {
        $('#didntSpendAllPointsBeforePressingStart').show();
    }
}

// item checks show / hide-------------------------------

// hides the glass key item div
function hidethekey() {
    $('#glass_key').hide();
    glassKey = false;
}
// player picked sword so we show it and set the variable to true
function showsword() {
    $('#sword').show();
    sword = true;
}
// player picked staff so we show it and set the variable to true
function showstaff() {
    $('#staff').show();
    staff = true;
}
// player picked blaster so we show it and set the variable to true
function showblaster() {
    $('#blaster').show();
    blaster = true;
}
// we past the int check change the picutre of flask to full set flask_full value to true set flask value to false
function filltheflask() {
    $('#flask').hide();
    $('#flask_full').show();
    flask = false;
    flaskfull = true;
}
//items end ---------------------------------------
//ENDING---------------------------
//DEAD---
function youhavedied() {
    $('#flavor_text').css("background-image", "url(./assets/youdie.jpg)");
}
//DEAD END---
//ENDING END-------------------------------