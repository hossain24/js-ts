let arr3 = ["apple", "orange", "banana"];
let arr4 = ["apple", "orange", "mango"];

let arr5 = arr3.filter(item =>
    arr4.includes(item)
);

console.log(arr5);
