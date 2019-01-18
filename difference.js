var ancient = ["maki", "nigiri", "sashimi"];
var old = ["salad", "stick", "maki"];

function differenceOne() {
    var newEra = old.filter(sushi => !ancient.includes(sushi));
    console.log(newEra);
}

function differenceTwo() {
    var anotherNewEra = ancient.filter(sushi => !old.includes(sushi));
    console.log(anotherNewEra);
}

differenceOne();
differenceTwo();