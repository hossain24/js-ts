let arr1 = [{ name: "apple" }, { name: "orange" }, { name: "mango" }];

let arr2 = [];

function addUp() {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].name === "orange") {
            arr2.push("orange");
        }
    }
    console.log(arr2);
}

addUp();