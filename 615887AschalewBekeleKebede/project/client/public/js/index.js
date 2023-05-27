window.onload = getProducts();
token = sessionStorage.getItem('accessToken');
document.getElementById("userName").innerText = "Welcome " + token.split('-')[1];
const cart = new Map();
const db = new Map();
async function getProducts() {
  const response = await fetch("http://localhost:3000/products/", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
    }
  });
  const jsonData = await response.json();
  for (let e of jsonData) {
    db.set(e.id, e);
    addNewProductRowToTable(e.id, e.name, e.image, e.price, e.stock);
  }
 
}
function addNewProductRowToTable(id, name, image, price, stock) {
  html = `<tr><td>${name}</td><td>${price}</td><td><img width="70" class="img-thumbnail" src="${image}" alt="${name}"></td><td>${stock}</td><td><button onclick="addToCart(${id})" id="add-${id}">Add</button></td></tr>`;

  document.getElementById("productTable").innerHTML += html;
}
function addToCart(id) {
  if (!cart.has(id)) {
    p = db.get(id);
    if (p.stock < 1) {
      
      return;
    }
    html = `<tr><td>${p.name}</td><td>${p.price}</td><td>${p.stock}</td>
    <td>
      <button onclick="decreaseQuantity(${p.id})">-</button>
      <span id="quantity-${p.id}">1</span>
      <button onclick="increaseQuantity(${p.id})">+</button>
    </td></tr>`;
    document.getElementById("cartTable").innerHTML += html;
    cart.set(id, 1);
  } else {
    increaseQuantity(id);
  }
  updateTotal();
  updateTotalPrice();
}

function updateTotalPrice() {
  let totalPrice = 0;
  cart.forEach((quantity, id) => {
    p = db.get(id);
    totalPrice += quantity * p.price;
  });
  document.getElementById("totalProductPrice").innerText = totalPrice;
}
function increaseQuantity(id) {
  p = db.get(id);
  actualQuantity = cart.get(id);
  if (actualQuantity < p.stock) {
    cart.set(id, actualQuantity + 1);
    document.getElementById(`quantity-${p.id}`).innerText = actualQuantity + 1;
  }
  updateTotal();
}
function decreaseQuantity(id) {
  p = db.get(id);
  actualQuantity = cart.get(id);

  if (actualQuantity > 1 && p.stock > 0) {
    cart.set(id, actualQuantity - 1);
    document.getElementById(`quantity-${p.id}`).innerText = actualQuantity - 1;
  }
  updateTotal();
}
function updateTotal() {
  total = 0;
  cart.forEach((quantity, id) => {
    p = db.get(id);
    total += quantity * p.price;
  });
  document.getElementById("totalProductCost").innerText = total;
}
function logout() {
  window.location.href = "/";
}
function checkout() {

  items = [];
  cart.forEach((quantity, id) => {
    items.push({ id: id, quantity: quantity });
  });

  fetch('http://localhost:3000/products/checkout', {
    method: 'POST',
    body: JSON.stringify(items),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
    }
  }).then(response => response.json())
    .then(data => {
      console.log(data);

      window.location.reload();
    })
}




