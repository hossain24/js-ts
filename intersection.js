var ancient = ["apple", "orange", "grape"];
var old = ["mango", "banana", "apple"];

function intersection() {
    var newEra = ancient.filter(fruit => old.includes(fruit));
    console.log(newEra);
}
intersection();