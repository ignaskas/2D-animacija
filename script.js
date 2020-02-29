    // genres
        //TODO: set values to 0 before final test!
let genres = {
    rpg: 10,
    horror: 11,
    adventure: 0,
    strategy : 0,
    scfi: 0
};
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
        //TODO: fix the images and add more
    // select cyberpunk stlye gameboard
function gamestyle_cyberpunk() {
    $('#starting_screen').css("background-image", "url(assets/cyberpunk.jpg)");
}

    // select medival style gameboard
function gamestyle_medieval() {
        $('#starting_screen').css("background-image", "url(assets/medieval.jpg)");
}

    // 1 button move animation + move counter
function makeMove() {
    moves += 1;
    if (moves === 1) {
        $('#player').animate({left: "20px", top: "40px"});

    } else if (moves === 2){
        $('#player').animate({left: "60px", top: "40px"});
    }
}
        //TODO: fit all atribute cheks in to 1 function
    // atribute check at specific move
function strchek() {
    if (str >= 5 && moves === 3){
        $('#player').animate({left: "80px", top: "60px"});
    }
}
        //TODO: clean this up a bit!
    // pull highest value from genre object array returnit as variable name
function chekbest(genres){
        var max = -Infinity;
        var maxname = null;
        for (var key in genres){
            var num = genres[key];

            if (num > max){
                max = num;
                maxname = key;
            }

            max = (num > max && num) || max;
        }

        return maxname;
}
    console.log(chekbest(genres));

function startgame() {
    genres.rpg += 1;
    console.log("yhe i work");
}
