/* const coffeeOrder = (size, type) => {
    console.log(`${size} ${type} please`);
}

coffeeOrder("large", "cappucino");
coffeeOrder("small", "latte");
coffeeOrder("medium", "frappucino");
*/

let orderCount = 0;

const takeOrder = (topping1, topping2, topping3) => {
    console.log(`Pizza with ${topping1}, ${topping2}, ${topping3}`);
    orderCount++;
    console.log(`Order number ${orderCount}`);
}

takeOrder("Ham", "Pineapple", "Peppers");
takeOrder("Chicken", "Jalepinos", "Salami");
takeOrder("Beef", "Sweetcorn", "Extra Cheese");
takeOrder("Onions", "Sausage", "Mushrooms");