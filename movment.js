// were are we going
let moveonX = 0;
let moveonY = 0;

//TODO: change the cordinates to fit the map
//Path we take
let path = [
    {
        name: "Current_Position", // 0 for cheking withc direction we are facing
        locationX: 0,
        locationY: 0
    },
    {
        name: "New_Position", // 1  for cheking withc direction we are facing
        locationX: 670,
        locationY: 293
    },
    {
        name: "Portal", // 2
        locationX: 336,
        locationY: 635
    },
    {
        name: "Portal_Exit", // 3
        locationX: 900,
        locationY: 500
    },
    {
        name: "Forest", // 4
        locationX: 882,
        locationY: 625
    },
    {
        name: "Bridge_After_Forest", // 5
        locationX: 900,
        locationY: 500
    },
    {
        name: "Merchant_Camp",  // 6
        locationX: 638,
        locationY: 243
    },
    {
        name: "Jungle",  // 7
        locationX: 980,
        locationY: 800
    },
    {
        name: "City",  // 8
        locationX: 738,
        locationY: 243
    },
    {
        name: "Bridge_Before_mage_tower",  // 9
        locationX: 1938,
        locationY: 243
    },
    {
        name: "Ending",  // 10
        locationX: 1938,
        locationY: 243
    }
];

// move counter
let moves = 0;

// switches divsbackground image based on witch way charter is moving
function witchsidedoiface() {
    if ((path[0].locationY > path[1].locationY) && (path[0].locationX > path[1].locationX)) {  //we are moving NW
        $('#player').css('background-position', '120px 0px');
    } else if ((path[0].locationY < path[1].locationY) && (path[0].locationX < path[1].locationX)) { //we are moving SE
        $('#player').css('background-position', '60px 0px');
    } else if ((path[0].locationY > path[1].locationY) && (path[0].locationX < path[1].locationX)) { //we are moving NE
        $('#player').css('background-position', '0px 0px');
    } else if ((path[0].locationY < path[1].locationY) && (path[0].locationX > path[1].locationX)) { //we are moving SW
        $('#player').css('background-position', '200px 0px');
    }
}

//  Animation and flavor text area showhide
function makeMove() {
    witchsidedoiface();
    $('#player').animate({left: moveonX - 30, top: moveonY - 80}, 5000);
    setTimeout(flavortextshowhide, 5000);
    path[0].locationX = path[1].locationX;
    path[0].locationY = path[1].locationY;
}

// MOVEMENT---------------
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
    } else if (moves === 2) {
        moveonX = path[2].locationX;
        moveonY = path[2].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    } else if (moves === 3) {
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
    } else if (moves === 2) {
        moveonX = path[2].locationX;
        moveonY = path[2].locationY;
        path[1].locationY = moveonY;
        path[1].locationX = moveonX;
    } else if (moves === 3) {
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
    switch (moves) {
        case 1:
            moveonX = path[3].locationX;
            moveonY = path[3].locationY;
            path[1].locationX = moveonX;
            path[1].locationY = moveonY;
            makeMove();
            break;
        case 2:
            moveonX = path[4].locationX;
            moveonY = path[4].locationY;
            path[1].locationY = moveonY;
            path[1].locationX = moveonX;
            makeMove();
            break;
        case 3:
            moveonX = path[5].locationX;
            moveonY = path[5].locationY;
            path[1].locationY = moveonY;
            path[1].locationX = moveonX;
            makeMove();
            break;
        default:
            moves = 1;
            moveonX = path[3].locationX;
            moveonY = path[3].locationY;
            path[1].locationX = moveonX;
            path[1].locationY = moveonY;
            makeMove();
            break;
    }
}

//MOVMENT ENDS---------------