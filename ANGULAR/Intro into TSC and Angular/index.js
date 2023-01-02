var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return "".concat(this.name, " says hello!");
    };
    return User;
}());
var user = new User('Peter');
console.log(user.sayHello());
