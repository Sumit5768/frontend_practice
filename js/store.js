const products = [
  { id: 1, name: "Milk", price: 70 },
  { id: 2, name: "Tea Powder", price: 120 },
  { id: 3, name: "Atta", price: 55 },
];

function showProducts() {
   products.forEach((product) => {
    console.log(`Product: ${product.name} - ₹${product.price}`);
  });
}

  showProducts();

let cart = [];

const addToCart = function (productId, quantity) {
  if (product) {
     cart.push({
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
    console.log(`${product.name} added to cart (${quantity} units)`);
  } else {
    console.log("Product not found");
  }
};

addToCart(1, 3);
addToCart(2, 1);

const calculateTotal = () => {
    let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

function applyDiscount(totalAmount) {
  if (totalAmount >= 200) {
         return 25;
  }
  return 0;
}

function showFinalMessage(total, discount, callback) {
     console.log(`Cart Total: ₹${total}`);
    console.log(`Discount Applied: ₹${discount}`);
  let finalAmount = total - discount;
  callback(finalAmount);
}

let total = calculateTotal();
 let discount = applyDiscount(total);

showFinalMessage(total, discount, function (finalAmount) {
       console.log(`You need to pay ₹${finalAmount}`);
});