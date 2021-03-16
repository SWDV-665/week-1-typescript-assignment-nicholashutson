var Grocery = /** @class */ (function () {
    function Grocery(n, q, p) {
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
    return Grocery;
}());

var list_of_items = [
    new Grocery("milk", 5, 10),
    new Grocery("bread", 8, 25),
    new Grocery("egg", 15, 10)
];

var ele = document.getElementById("app");

list_of_items.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = e.name + " " + e.quantity + " -> $" + e.price;
    ele.appendChild(p);
});
