class User {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = firstName + " " + lastName;
    }
}

function userName(user: User) {
    console.log("The user name is " + user.firstName + " " + user.lastName);
}

let user = new User("John", "Doe");

userName(user);