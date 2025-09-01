let cart = [];

// Add to Cart
function addToCart(name, price) {
  cart.push({name, price});
  renderCart();
}

// Render Cart Items
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  document.getElementById('total').textContent = `Total: ₹${total}`;
}

// Filter Products by category & price
function filterProducts() {
  const category = document.getElementById('filter-category').value;
  const minPrice = Number(document.getElementById('min-price').value) || 0;
  const maxPrice = Number(document.getElementById('max-price').value) || Infinity;
  document.querySelectorAll('.product-card').forEach(card => {
    const cardCategory = card.classList.contains(category) || category === "all";
    const price = Number(card.querySelector('p').textContent.replace('₹',''));
    const inPriceRange = price >= minPrice && price <= maxPrice;
    if (cardCategory && inPriceRange) card.style.display = "block";
    else card.style.display = "none";
  });
}

// Wishlist using localStorage
function addToWishlist(item) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  if (!wishlist.includes(item)) {
    wishlist.push(item);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(item + " added to wishlist!");
  } else {
    alert("Already in wishlist");
  }
}

// Add Customer Reviews
function addReview(e) {
  e.preventDefault();
  const name = document.getElementById('reviewer').value.trim();
  const text = document.getElementById('review-text').value.trim();
  if (!name || !text) return alert("Please enter both name and review.");
  const reviewList = document.getElementById('review-list');
  const li = document.createElement('li');
  li.textContent = `${name}: ${text}`;
  reviewList.appendChild(li);
  document.getElementById('reviewer').value = '';
  document.getElementById('review-text').value = '';
}
