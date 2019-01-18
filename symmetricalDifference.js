var ancient = ["maki", "nigiri", "sashimi"];
var old = ["salad", "stick", "maki"];

function symmetric() {
    var newEra = ancient.filter(sushi => !old.includes(sushi))
        .concat(old.filter(sushi => !ancient.includes(sushi)
        ));
    console.log(newEra);
}

symmetric();