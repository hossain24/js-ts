let arr1 = [{ name: "apple" }, { name: "orange" }, { name: "mango" }];

let arr2 = [];

function addUp() {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].name === "apple") {
            arr2.push("apple");
        }
    }
    console.log(arr2);
}

addUp();