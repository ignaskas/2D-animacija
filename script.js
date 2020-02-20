    // genres
let rpg = 0;
let horror = 0;
let adventure = 0;
let strategy = 0;
let scfi = 0;
    // atributes
let int = 4;
let str = 4;
let agy = 4;
let pointstospend = 5;
    // event memory
    // event memory goes here

    // spend skills points to increase int stat
function addint() {
    if (pointstospend >= 1) {
        int += 1;
        pointstospend -= 1;
        //TODO: change the placeholder to proper windos
        document.getElementById("placeholder").innerHTML = "Int:" + " " + int;
        document.getElementById("pointsleft").innerHTML = "left:" + " " + pointstospend;
    }
}

    // spend skill points to increase str stat
function addstr() {
        if (pointstospend >= 1) {
            str += 1;
            pointstospend -= 1;
            //TODO: change the placeholder to proper windos
            document.getElementById("placeholder").innerHTML = "Agy:" + " " + str;
            document.getElementById("pointsleft").innerHTML = "left:" + " " + pointstospend;
    }
}

    // spend skill points to increase agy stat
function addagy() {
        if (pointstospend >= 1) {
            agy += 1;
            pointstospend -= 1;
            //TODO: change the placeholder to proper windos
            document.getElementById("placeholder").innerHTML = "Agy:" + " " + agy;
            document.getElementById("pointsleft").innerHTML = "left:" + " " + pointstospend;
        }
}

    // select cyberpunk stlye gameboard
function gamestyle_cyberpunk() {
    $('#starting_screen').css("background-image", "url(assets/cyberpunk.jpg)");
}

    // select medival style gameboard
function gamestyle_medieval() {
        $('#starting_screen').css("background-image", "url(assets/medieval.jpg)");
}