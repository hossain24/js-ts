var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return User;
}());
/* interface Customer {
    firstName: string;
    lastName: string;
} */
function userName(user) {
    console.log("The user name is " + user.firstName + " " + user.lastName);
}
var user = new User("John", "Doe");
userName(user);
