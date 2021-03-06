// genres
let genres = {
    rpg: 0,
    horror: 0,
    adventure: 0,
    strategy: 0,
    scfi: 0
};

// game states / movement coordinates /attributee checks
let currentState;

//win the game bcs you have armor
let state30 = {
    name: 'dragon_figth_win_bcs_armor',
    locationX: 1659,
    locationY: 503,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 1639,
            locationY: 565
        },
        {
            locationX: 1667,
            locationY: 523
        },
        {
            locationX: 1659,
            locationY: 503
        }
    ],
    attributeCheck: function() {
        if (armor === true){
            return true;
        } else {
            return false;
        }
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        youwin();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Dragon_defeated.png)");
    }
};

//lose to boss
let state29 = {
    name: 'dragon_figth_lose',
    locationX: 1679,
    locationY: 451,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 1636,
            locationY: 571
        },
        {
            locationX: 1663,
            locationY: 516
        },
        {
            locationX: 1679,
            locationY: 451
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.horror += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Dragon_die.png)");
        setTimeout(youhavedied, 6000);
    }
};

//ignore shop go to dragon
let state28 = {
    name: 'ignore_shop',
    locationX: 1605,
    locationY: 579,
    possibleOutcomes: [
        state29,    //YOU DIE
        state30,    //WIN BCS ARMOR

    ],
    steps: [
        {
            locationX: 1137,
            locationY: 645
        },
        {
            locationX: 1483,
            locationY: 545
        },
        {
            locationX: 1605,
            locationY: 579
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Town_Broke.png)");
    }
};

//steal armor with your agy check
let state27 = {
    name: 'steal_armor_after_merchant',
    locationX: 1605,
    locationY: 579,
    possibleOutcomes: [
        state29,    //YOU DIE
        state30,    //WIN BCS ARMOR
    ],
    steps: [
        {
            locationX: 1137,
            locationY: 645
        },
        {
            locationX: 1483,
            locationY: 545
        },
        {
            locationX: 1605,
            locationY: 579
        }
    ],
    attributeCheck: function() {
        if (agy >= 6){
            return true;
        } else {
            return false;
        }
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        getarmor();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Steal_Armour.png)");
    }
};

// buy armor with your bag of coins
let state26 = {
    name: 'shop_city_buy_armor',
    locationX: 1605,
    locationY: 579,
    possibleOutcomes: [
        state29,    //YOU DIE
        state30,    //WIN BCS ARMOR
    ],
    steps: [
        {
            locationX: 1137,
            locationY: 645
        },
        {
            locationX: 1483,
            locationY: 545
        },
        {
            locationX: 1605,
            locationY: 579
        }
    ],
    attributeCheck: function() {
        if (bagOfCoins === true){
            return true;
        } else {
            return false;
        }
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        getarmor();
        removecoins();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        setTimeout(function () {
            $('#flavor_text').css("background-image", "url(./assets/Buy_Armour.png)")
                .delay(3000)
                .fadeOut("slow")
            setTimeout(aftertownboss, 4000);
        }, 6000);
    }
};

// YOU LOSE
let state25 = {
    name: 'city_after_lizard_men',
    locationX: 1091,
    locationY: 558,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 1101,
            locationY: 560
        },
        {
            locationX: 1097,
            locationY: 558
        },
        {
            locationX: 1091,
            locationY: 558
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Town-jail.png)");
        setTimeout(youhavedied, 6000);
    }
};

let state24 = {
    name: 'go_to_city_after_returing_to_merchant',
    locationX: 1113,
    locationY: 580,
    possibleOutcomes: [
        state26,    //BUY ARMOR
        state27,    //STEAL ARMOR
        state28     //IGNORE ARMOR
    ],
    steps: [
        {
            locationX: 955,
            locationY: 678
        },
        {
            locationX: 1133,
            locationY: 580
        },
        {
            locationX: 1113,
            locationY: 580
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Town_Store.png)");
    }
};

// go to city after lizard men are dead
let state23 = {
    name: 'lizard_men_go_to_city',
    locationX: 1099,
    locationY: 573,
    possibleOutcomes: [
        state25,    //GO TO CITY
    ],
    steps: [
        {
            locationX: 987,
            locationY: 683
        },
        {
            locationX: 1125,
            locationY: 649
        },
        {
            locationX: 1099,
            locationY: 573
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        bagofcoins();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Help_not.png)");
    }
};

// go back to merchant after killing lizard men
let state22 = {
    name: 'lizard_men_go_back_to_merchant',
    locationX: 899,
    locationY: 647,
    possibleOutcomes: [
        state24,    //GO TO CITY
    ],
    steps: [
        {
            locationX: 993,
            locationY: 677
        },
        {
            locationX: 915,
            locationY: 677
        },
        {
            locationX: 899,
            locationY: 647
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        bagofcoins();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Help2.png)");
    }
};

// ignore merchant and go to city
let state21 = {
    name: 'ignore_merchant',
    locationX: 1091,
    locationY: 555,
    possibleOutcomes: [
        state24, //GO TO TOWN
    ],
    steps: [
        {
            locationX: 947,
            locationY: 675
        },
        {
            locationX: 1123,
            locationY: 647
        },
        {
            locationX: 1071,
            locationY: 555
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Town_Store.png)");
    }
};

// help merchant
let state20 = {
    name: 'help_merchant',
    locationX: 1025,
    locationY: 777,
    possibleOutcomes: [
        state22,    //GO BACK TO ME
        state23     //GO TO CITY
    ],
    steps: [
        {
            locationX: 993,
            locationY: 677
        },
        {
            locationX: 1003,
            locationY: 731
        },
        {
            locationX: 1025,
            locationY: 777
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.adventure += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Help1.png)");
    }
};

// win if you have blaster
let state19 = {
    name: 'after_portal_win',
    locationX: 1677,
    locationY: 494,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 1579,
            locationY: 386
        },
        {
            locationX: 1681,
            locationY: 446
        },
        {
            locationX: 1677,
            locationY: 494
        }
    ],
    attributeCheck: function() {
        if (blaster === true){
            return true;
        } else {
            return false;
        }
    },
    complicatedBehaviour: function () {
        genres.scifi += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Blaster_dragon.png)");
        youwin();
    }
};

// if you dont have blaster you die to dragon
let state18 = {
    name: 'after_portal_dragon_figth_lose',
    locationX: 1677,
    locationY: 494,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 1579,
            locationY: 386
        },
        {
            locationX: 1681,
            locationY: 446
        },
        {
            locationX: 1677,
            locationY: 494
        }
    ],
    attributeCheck: function() {
        return true
    },
    complicatedBehaviour: function () {
        genres.scifi += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Dragon_Run.png)");
        setTimeout(youhavedied, 6000);
    }
};

//WIN game lower discount
let state17 = {
    name: 'dragon_steal',
    locationX: 1663,
    locationY: 451,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 1669,
            locationY: 525
        },
        {
            locationX: 1683,
            locationY: 471
        },
        {
            locationX: 1663,
            locationY: 451
        }
    ],
    attributeCheck: function() {
        return true
    },

    complicatedBehaviour: function () {
        genres.strategy += 1;
        youwin();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Dragon_steal.png)");
    }
};

//Int agy flask check to poison dragon
let state16 = {
    name: 'dragon_posion',
    locationX: 1663,
    locationY: 451,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 1669,
            locationY: 525
        },
        {
            locationX: 1683,
            locationY: 471
        },
        {
            locationX: 1663,
            locationY: 451
        }
    ],
    attributeCheck: function() {
        if (int >= 6 && agy >= 5 && flaskfull === true){
            return true;
        } else {
            return false;
        }
    },
    complicatedBehaviour: function () {
        genres.rpg += 1;
        youwin();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Poison_dragon.png)");
    }
};

// LOSE DRAGON FIGHT
let state15 = {
    name: 'dragon_run',
    locationX: 1663,
    locationY: 451,
    possibleOutcomes: [

    ],
    steps: [
        {
            locationX: 1669,
            locationY: 525
        },
        {
            locationX: 1683,
            locationY: 471
        },
        {
            locationX: 1663,
            locationY: 451
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.horror += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Dragon_Run.png)");
        setTimeout(youhavedied, 6000);
    }
};

//ASK FOR QUEST
let state14 = {
    name: 'ask_for_quest',
    locationX: 1597,
    locationY: 571,
    possibleOutcomes: [
        state15,    //LOSE DRAGON FIGHT
        state16,    //POISON DRAGON
        state17     //STEAL FROM DRAGON
    ],
    steps: [
        {
            locationX: 1133,
            locationY: 643
        },
        {
            locationX: 1467,
            locationY: 539
        },
        {
            locationX: 1597,
            locationY: 571
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

// STEAL ARMOR AGY CHECK
let state13 = {
    name: 'steal_armor',
    locationX: 1597,
    locationY: 571,
    possibleOutcomes: [
        state15,    //LOSE DRAGON FIGHT
        state16,    //POISSON DRAGON
        state17     //STEAL FROM DRAGON
    ],
    steps: [
        {
            locationX: 1133,
            locationY: 643
        },
        {
            locationX: 1467,
            locationY: 539
        },
        {
            locationX: 1597,
            locationY: 571
        }
    ],
    attributeCheck: function() {
        if (agy >= 7){
            return true;
        } else{
            return false;
        }
    },
    complicatedBehaviour: function () {
        genres.rpg += 1;
        getarmor();
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        setTimeout(function () {
            $('#flavor_text').css("background-image", "url(./assets/Steal_Armour.png)")
                .delay(3000)
                .fadeOut("slow")
            setTimeout(wizardtoweraftertown, 4000);
        }, 6000);
    }
};

//TO DRAGON AFTER CITY
let state12 = {
    name: 'no_money_for_armor',
    locationX: 1597,
    locationY: 571,
    possibleOutcomes: [
        state15,    //LOSE DRAGON FIGHT
        state16,    //POISON DRAGON
        state17     //STEAL FROM DRAGON
    ],
    steps: [
        {
            locationX: 1133,
            locationY: 643
        },
        {
            locationX: 1467,
            locationY: 539
        },
        {
            locationX: 1597,
            locationY: 571
        }
    ],
    attributeCheck: function() {
        return true;
    },
    complicatedBehaviour: function () {
        genres.strategy += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        setTimeout(function () {
            $('#flavor_text').css("background-image", "url(./assets/Town_Broke.png)")
                .delay(3000)
                .fadeOut("slow")
            setTimeout(wizardtoweraftertown, 4000);
        }, 6000);
    }
};

//GO TO CITY AFTER FOREST
let state11 = {
    name: 'go_tocity',
    locationX: 1102,
    locationY: 556,
    possibleOutcomes: [
        state12,    //No Money for armor
        state13,    //agy check steal armor
        state14     //Ask for directions
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
        genres.adventure += 1;
        flavortextshowhide();
        setTimeout(flavortextshowhide, 6000);
        $('#flavor_text').css("background-image", "url(./assets/Town_Store.png)");
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
        $('#flavor_text').css("background-image", "url(./assets/Forest_Flask.png)");
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
        $('#flavor_text').css("background-image", "url(./assets/Forest_Clearing.png)");
    }
};

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
        flavortextshowhide();
        $('#flavor_text').css("background-image", "url(./assets/Forest_Dead.png)");
        setTimeout(flavortextshowhide, 6000);
        setTimeout(youhavedied, 6000);
    }
};
//ROAD
let state7 = {
    name: 'road',
    locationX: 894,
    locationY: 671,
    possibleOutcomes: [
        state20,    //HELP
        state21,    //IGNORE
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
        setTimeout(function () {
            $('#flavor_text').css("background-image", "url(./assets/Field_Road.png)")
                .delay(3000)
                .fadeOut("slow")
            setTimeout(merchant, 4000);
        }, 6000);
    }
};

//PORTAL
let state6 = {
    name: 'portal',
    locationX: 1510,
    locationY: 344,
    possibleOutcomes: [
        state18,    //LOSE
        state19,    //WIN ONLY IF YOU HAVE BLASTER
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
        $('#flavor_text').css("background-image", "url(./assets/After-Portal.png)");
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
        setTimeout(function () {
            $('#flavor_text').css("background-image", "url(./assets/Choose_Forest.png)")
                .delay(3000)
                .fadeOut("slow")
            setTimeout(foreststart, 4000);
        }, 6000);
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
        setTimeout(function () {
            $('#flavor_text').css("background-image", "url(./assets/Plasma_Blaster.png)")
                .delay(3000)
                .fadeOut("slow")
            setTimeout(afterwepon, 4000);
        }, 6000);
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
        setTimeout(function () {
            $('#flavor_text').css("background-image", "url(./assets/Wizard_Staff.png)")
                .delay(3000)
                .fadeOut("slow")
            setTimeout(afterwepon, 4000);
        }, 6000);
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
        setTimeout(function () {
            $('#flavor_text').css("background-image", "url(./assets/Bastard_Sword.png)")
                .delay(3000)
                .fadeOut("slow")
            setTimeout(afterwepon, 4000);
        }, 6000);
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

// attributes
let int = 4;
let str = 4;
let agy = 4;
let pointstospend = 5;

// move counter
let moves = -1;

//genre name after wining
let genrewin = "";

// items
let glassKey = true;
let armor = false;
let flask = true;
let flaskfull = false;
let sword = false;
let blaster = false;
let staff = false;
let bagOfCoins = false;

//sounds
let backgroundmusic = new Audio("./assets/background_music.mp3");
let deathsound = new Audio("./assets/died.mp3");
//sounds end
// event memory
// event memory goes here

// ATTRIBUTE ASSIGMENT---------------
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
        document.getElementById("statstr").innerHTML = "Str:" + " " + str;
        document.getElementById("pointsleft").innerHTML = "Points Left:" + " " + pointstospend;
    }
}

// spend skill points to increase agy stat
function addagy() {
    if (pointstospend >= 1) {
        agy += 1;
        pointstospend -= 1;
        document.getElementById("statagy").innerHTML = "Agi:" + " " + agy;
        document.getElementById("pointsleft").innerHTML = "Points Left:" + " " + pointstospend;
    }
}

//ATTRIBUTE ASSIGMENT ENDS---------------

// switches divs background image based on witch way charter is moving
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

    genrewin = maxname;
    // console.log(genrewin);
}


//prints location of mouse cursor onclick
// function printMousePos(event) {
//     document.getElementById("pos").innerHTML =
//         "clientX: " + event.clientX + "<br>" + " - clientY: " + event.clientY;
//     console.log("X: " + event.clientX + " " + "Y: " + event.clientY);
// }
//
// document.addEventListener("click", printMousePos);

// animate movement from array call witchwaydoiface function
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


//MOVEMENT ENDS---------------

/* FLAVOR TEXT EDITS /BACKGROUND CHANGES------------------
hide/show flavor text*/

//hide cards during movement hide flavor text during movment
function flavortextshowhide() {
    $('#flavor_text').toggle("fast");
    $('#cards').toggle("fast");
}

//FLAVOR TEXT EDITS /BACKGROUND CHANGES END---------------

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


    $('#rpg').hide();
    $('#horror').hide();
    $('#adve').hide();
    $('#stra').hide();
    $('#scifi').hide();
};
// start the game only if all attribute points were spent
function startgame() {
    if (pointstospend === 0) {
        $('#flavor_text').toggle("slow");
        $('#cards').toggle("fast");
        $('#starting_screen').toggle("fast");
        $('#didntSpendAllPointsBeforePressingStart').hide();
        backgroundmusic.play();
        backgroundmusic.loop = true;
        backgroundmusic.volume = 0.1;
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
// we past the int check change the picture of flask to full set flask_full value to true set flask value to false
function filltheflask() {
    $('#flask').hide();
    $('#flask_full').show();
    flask = false;
    flaskfull = true;
}
// player has acquired armor show armor icon set armor value to true
function getarmor() {
    $('#armor').show();
    armor = true;
}
// show bag of coins icon set bag of coins variable to true
function bagofcoins() {
    $('#bagofcoins').show();
    bagOfCoins = true;
}
//hide bag of coins icon set bag of coins variable to false
function removecoins() {
    $('#bagofcoins').hide();
    bagOfCoins = false;
}
//items end ---------------------------------------
//ENDING---------------------------
function youwin() {
    chekbest(genres);
    setTimeout(whatdiscountwegive, 12000);
}
//what discount do we give based on choices
function whatdiscountwegive() {
    if (genrewin === "rpg"){
        $('#rpg').show();
    } else if (genrewin === "horrror"){
        $('#horror').show();
    } else if (genrewin === "adventure"){
        $('#adve').show();
    } else if (genrewin === "strategy"){
        $('#stra').show();
    } else if (genrewin === "scfi"){
        $('#scifi').show();
    }
}
//DEAD---
function youhavedied() {
    $('#restart').css('display', 'block');
    backgroundmusic.pause();
    deathsound.play();
    deathsound.volume = 0.2;
}

//DEAD END---
//ENDING END-------------------------------

// FLAVOR TEXT CHANGE FUCNTIONS-------
// change the backroung of flavor text to advance story after chosing your wepon
function afterwepon() {
    $('#flavor_text').css("background-image", "url(./assets/Three_Paths.png)")
        .fadeIn("slow")
}
// change the backrgoun image of flavor text to advance story and set to spring image
function foreststart() {
    $('#flavor_text').css("background-image", "url(./assets/Forest_Spring.png)")
        .fadeIn("slow")
}
//change the background image to helping merchant
function merchant() {
    $('#flavor_text').css("background-image", "url(./assets/Merchant_Troubles.png)")
        .fadeIn("slow")
}
//stealing is bad mkay? change background imange to trhown out of town
function wizardtoweraftertown() {
    $('#flavor_text').css("background-image", "url(./assets/Wizards_Tower.png)")
        .fadeIn("slow")
}

// change background imange to before boss state
function aftertownboss() {
    $('#flavor_text').css("background-image", "url(./assets/Wizards_Tower.png)")
        .fadeIn("slow")
}
//FLAVOR TEXT CHANGE FUNCTIONS END-----

//restart game after you died
function restart() {
    location.reload();
}
//restart game after you died end