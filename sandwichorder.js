let orderCount = 0;

const makeSandwich = (filling1, filling2, filling3, filling4, filling5) => {
    console.log(`Sandwich with ${filling1}, ${filling2}, ${filling3}, ${filling4}, ${filling5}`);
    orderCount++;
    console.log(`Order number ${orderCount}`);
}

makeSandwich("Ham", "Pineapple", "Peppers", "Tomato", "Brown Sauce");
