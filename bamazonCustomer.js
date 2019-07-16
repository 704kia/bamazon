var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",


    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome to BAmazon, the quickest one-stop shop! Your connection id is " + connection.threadId);
    inventory();
});

function inventory() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Item id: " + res[i].item_id + " | Product: " + res[i].product_name + " | Department: " +
                res[i].department_name + " | Price: " + res[i].price + " | Quantity: " + res[i].stock_quantity)
        }

        buy();
    });
}

function buy() {
    inquirer.prompt([{
            name: "prodId",
            type: "input",
            message: "What's the id of the product you wish to buy?"
        },
        {
            name: "prodQty",
            type: "input",
            message: "How many would you like to buy?"
        }
    ]).then(function (answer) {
            var selectedID = answer.id;
            var selectedQty = answer.quantity;

            connection.query("SELECT * FROM products WHERE ?", {
                item_id: selectedID
            }, function (err, selectedItem) {
                if (err) throw err;


                if (selectedItem[0] - selectedQty >= 0) {
                    console.log("PLacing order now.")
                } else {

                    console.log("INSUFFICIENT QUANTITY!");



                }
            })
        }

    )
};