let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${productName} added to cart!`);
}

function updateCartCount() {
  const count = cart.length;
  document.getElementById("cart-count").innerText = count;
}

window.onload = updateCartCount;
