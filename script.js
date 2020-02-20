let test = [
    {name: "rpg", score:0},
    {name: "horror", score:0},
    {name: "adventure", score:0},
    {name: "strategy", score:0}
];
function rpgs() {
    objIndex = test.findIndex((obj => obj.name === "rpg"));
    // console.log("before adding value", test[objIndex]);
    test[objIndex].score = shit += 1;
    // console.log("updated value", test[objIndex])
}

function horrors() {
    
}