interface Maki {
    salmon: string;
    tuna: string;
}

function makiToEat(maki: Maki) {
    console.log("I would like to eat " + maki.tuna + " and " + maki.salmon);
}

let roll = { tuna: "Spicy Tuna", salmon: "Pink Alaska" };

makiToEat(roll);