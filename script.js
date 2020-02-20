let test = [
    {name: "rpg", score:0},
    {name: "horror", score:0},
    {name: "adventure", score:0},
    {name: "strategy", score:0}
];

console.log(Object.is(test[0]));

let fornow = 0;
let strat = 0;
let plzwork = 0;

function rpgs() {
    objIndex = test.findIndex((obj => obj.name === "rpg"));
    // console.log("before adding value", test[objIndex]);
    test[objIndex].score = fornow += 1;
    // console.log("updated value", test[objIndex])
}

function horrors() {
    console.log(test[0].name + "  " + test[0].score);
}

function adventures() {
    for (i = 0; i < test.length; i++){
        if (plzwork < test[0].score){
            plzwork = test[0].score;
        }
        console.log(plzwork);
    }
}

function strategys() {
    objIndex = test.findIndex((obj => obj.name === "strategy"));
    // console.log("before adding value", test[objIndex]);
    test[objIndex].score = strat += 1;
    // console.log("updated value", test[objIndex])
}