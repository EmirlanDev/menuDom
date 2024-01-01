//! Navigation Link
let clickMenu = document.querySelector(".clickMenu");
let clickOrder = document.querySelector(".clickOrder");
let clickAdmin = document.querySelector(".clickAdmin");
let menu = document.querySelector("#menu");
let order = document.querySelector("#order");
let admin = document.querySelector("#admin");

let active = false;

clickMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  order.style.display = "none";
  admin.style.display = "none";
  clickMenu.classList.add("active");
  clickOrder.classList.remove("active");
  clickAdmin.classList.remove("active");

  adminTitle.innerText = "CREATE PRODUCT";
  createBtn.style.display = "block";
  saveBtn.style.display = "none";
  for (let i of input) {
    i.value = "";
  }
});

clickOrder.addEventListener("click", () => {
  menu.style.display = "none";
  order.style.display = "flex";
  admin.style.display = "none";
  clickMenu.classList.remove("active");
  clickOrder.classList.add("active");
  clickAdmin.classList.remove("active");

  adminTitle.innerText = "CREATE PRODUCT";
  createBtn.style.display = "block";
  saveBtn.style.display = "none";
  for (let i of input) {
    i.value = "";
  }
});

clickAdmin.addEventListener("click", () => {
  menu.style.display = "none";
  order.style.display = "none";
  admin.style.display = "flex";
  clickMenu.classList.remove("active");
  clickOrder.classList.remove("active");
  clickAdmin.classList.add("active");

  adminTitle.innerText = "CREATE PRODUCT";
  createBtn.style.display = "block";
  saveBtn.style.display = "none";
  for (let i of input) {
    i.value = "";
  }
});

//! ADD

let input = document.querySelectorAll("input");
let image = document.querySelector(".image");
let name = document.querySelector(".name");
let price = document.querySelector(".price");
let createBtn = document.querySelector(".create");
let saveBtn = document.querySelector(".save");
let classMenu = document.querySelector(".menu");
let adminTitle = document.querySelector(".adminTitle");
let classOrder = document.querySelector(".order");

getData();
getOrder();

createBtn.addEventListener("click", () => addData());

function addData() {
  let product = {
    image: image.value,
    name: name.value,
    price: price.value,
    id: Date.now(),
  };
  if (!image || !name || !price) {
    alert("Заполните поле!!!");
    return;
  }
  let storage = JSON.parse(localStorage.getItem("foods")) || [];
  if (
    storage.some(
      (el) =>
        el.name === product.name ||
        el.price === product.price ||
        el.image === product.image
    )
  ) {
    alert("Такой элемент уже есть");
    return;
  }
  storage.push(product);
  localStorage.setItem("foods", JSON.stringify(storage));
  getData();
}

//! GET

function getData() {
  classMenu.innerHTML = "";

  let newProduct = JSON.parse(localStorage.getItem("foods")) || [];
  let carts = document.createElement("div");
  newProduct.forEach((el, index) => {
    let cart = document.createElement("div");
    let btnDiv = document.createElement("div");
    let nameH = document.createElement("h2");
    let priceH = document.createElement("h2");
    let cartImg = document.createElement("img");
    let delBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let orderBtn = document.createElement("button");

    carts.classList.add("carts");
    cart.classList.add("cart");
    cartImg.classList.add("cartImg");
    nameH.classList.add("nameH");
    priceH.classList.add("priceH");
    btnDiv.classList.add("btnDiv");
    delBtn.classList.add("delBtn");
    editBtn.classList.add("editBtn");
    orderBtn.classList.add("orderBtn");

    orderBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.182 16.8496H25.3338C25.9633 16.8496
       26.4579 16.3291 26.4579 15.7015C26.4579 15.0586 25.9633 14.5534 25.3338 14.5534H21.182C20.5525 
       14.5534 20.0579 15.0586 20.0579 15.7015C20.0579 16.3291 20.5525 16.8496 21.182 16.8496ZM30.2649
       8.89124C31.1792 8.89124 31.7787 9.2127 32.3782 9.91685C32.9778 10.621 33.0827 11.6313 32.9478
        12.5482L31.5239 22.59C31.2541 24.5203 29.6354 25.9424 27.7318 25.9424H11.3796C9.38614 25.9424
        7.73742 24.3826 7.57255 22.362L6.19362 5.67511L3.93039 5.27711C3.33086 5.16995 2.91118 4.57296
        3.0161 3.96065C3.12102 3.33457 3.70556 2.91973 4.32008 3.01311L7.8948 3.56265C8.4044 3.65603
        8.77911 4.08311 8.82407 4.60357L9.10885 8.03248C9.15382 8.52386 9.54351 8.89124 10.0231
        8.89124H30.2649ZM11.1395 28.3619C9.88052 28.3619 8.86131 29.4028 8.86131 30.6887C8.86131
        31.9592 9.88052 33.0001 11.1395 33.0001C12.3836 33.0001 13.4028 31.9592 13.4028 30.6887C13.4028
        29.4028 12.3836 28.3619 11.1395 28.3619ZM28.0014 28.3619C26.7424 28.3619 25.7232 29.4028 25.7232
        30.6887C25.7232 31.9592 26.7424 33.0001 28.0014 33.0001C29.2454 33.0001 30.2646 31.9592 30.2646
        30.6887C30.2646 29.4028 29.2454 28.3619 28.0014 28.3619Z" fill="#fff"/>
    </svg>
    `;
    delBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
      <path d="M28.9873 14.2017C28.9873 14.2017
       28.1728 24.3042 27.7003 28.5597C27.4753 30.5922 26.2198 31.7832
       24.1633 31.8207C20.2498 31.8912 16.3318 31.8957 12.4198 31.8132C10.4413
       31.7727 9.20681 30.5667 8.98631 28.5702C8.51081 24.2772 7.70081 14.2017 7.70081 14.2017"
       stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M31.0622 9.35901H5.62524" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.1609 9.35923C24.9834 9.35923 23.9694 8.52673 23.7384 7.37323L23.3739 5.54923C23.1489
       4.70773 22.3869 4.12573 21.5184 4.12573H15.1689C14.3004 4.12573 13.5384 4.70773 13.3134 5.54923L12.9489
       7.37323C12.7179 8.52673 11.7039 9.35923 10.5264 9.35923" stroke="#fff" stroke-width="2" 
       stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
    editBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2894 15.3563L23.3137 4.35031C25.119
       2.5499 28.0449 2.5499 29.8502 4.35031L31.6459 6.14301C33.4514 7.94553 33.4514 10.869 31.6459
       12.6696L20.5689 23.7282C19.7609 24.5349 18.6651 24.9883 17.5223 24.9883H11.9963C11.3745 24.9883
       10.8748 24.4769 10.8903 23.8563L11.0289 18.2891C11.0568 17.1866 11.5078 16.1365 12.2894 15.3563ZM30.0813
       7.70505L28.2865 5.91318C27.3451 4.97435 25.8189 4.97435 24.8779 5.91276L23.971 6.8182L29.1744 12.0129L30.0817
       11.1071C31.0226 10.1688 31.0226 8.64473 30.0813 7.70505ZM27.6097 13.575L22.4063 8.38024L13.8541 16.9183C13.4739
       17.2978 13.2546 17.8085 13.241 18.3444L13.1296 22.7779L17.5223 22.7792C18.0086 22.7792 18.4775 22.6104 18.8506
       22.3052L19.0043 22.1661L27.6097 13.575ZM17.0022 3.05694C17.6132 3.05694 18.1086 3.55146 18.1086 4.16147C18.1086
       4.72066 17.6924 5.18279 17.1523 5.25592L17.0022 5.26601H11.4866C7.7669 5.26601 5.35756 7.72943 5.21905 11.555L5.21274
       11.9065V24.1506C5.21274 28.0629 7.50492 30.6363 11.1514 30.7843L11.4866 30.791H24.5034C28.2323 30.791 30.6344 28.3329
       30.7724 24.5025L30.7787 24.1506V18.2185C30.7787 17.6085 31.2741 17.114 31.8851 17.114C32.4452 17.114 32.9081 17.5295
       32.9814 18.0686L32.9915 18.2185V24.1506C32.9915 29.2492 29.7564 32.8342 24.8485 32.9945L24.5034 33.0001H11.4866C6.50296
       33.0001 3.15484 29.5308 3.00523 24.5038L3 24.1506V11.9065C3 6.81278 6.24338 3.22309 11.1422 3.06255L11.4866 3.05694H17.0022Z"
       fill="#fff"/>
    </svg>
    `;
    nameH.innerText += el.name;
    priceH.innerText += el.price + "$";
    cartImg.src = el.image;
    cartImg.alt = "Produce Img";

    btnDiv.append(orderBtn);
    btnDiv.append(delBtn);
    btnDiv.append(editBtn);
    cart.append(cartImg);
    cart.append(nameH);
    cart.append(priceH);
    cart.append(btnDiv);
    carts.append(cart);
    classMenu.append(carts);

    orderBtn.addEventListener("click", () => {
      addOrder(index);
      if (checkOrder(el.id)) {
        orderBtn.style.background = "gray";
      } else {
        orderBtn.style.background = "#ddaa27";
      }
    });
    delBtn.addEventListener("click", () => removeData(index));
    editBtn.addEventListener("click", () => editData(index));
    if (checkOrder(el.id)) {
      orderBtn.style.background = "gray";
    } else {
      orderBtn.style.background = "#ddaa27";
    }
  });
}

//! REMOVE DATA

function removeData(index) {
  let storage = JSON.parse(localStorage.getItem("foods")) || [];
  storage.splice(index, 1);
  localStorage.setItem("foods", JSON.stringify(storage));
  getData();
}

//! EDIT DATA

function editData(index) {
  menu.style.display = "none";
  order.style.display = "none";
  admin.style.display = "flex";
  clickMenu.classList.remove("active");
  clickOrder.classList.remove("active");
  clickAdmin.classList.remove("active");

  adminTitle.innerText = "EDIT PRODUCT";

  createBtn.style.display = "none";
  saveBtn.style.display = "block";

  let storage = JSON.parse(localStorage.getItem("foods")) || [];

  image.setAttribute("id", index);

  image.value = storage[index].image;
  name.value = storage[index].name;
  price.value = storage[index].price;
}

saveBtn.addEventListener("click", () => saveData());

function saveData() {
  let imageId = image.id;
  let storage = JSON.parse(localStorage.getItem("foods")) || [];

  let newObj = {
    image: image.value,
    name: name.value,
    price: price.value,
    id: storage[imageId].id,
  };

  storage.splice(imageId, 1, newObj);
  localStorage.setItem("foods", JSON.stringify(storage));

  for (let i of input) {
    i.value = "";
  }

  menu.style.display = "flex";
  order.style.display = "none";
  admin.style.display = "none";
  clickMenu.classList.add("active");
  clickOrder.classList.remove("active");
  clickAdmin.classList.remove("active");

  adminTitle.innerText = "CREATE PRODUCT";

  createBtn.style.display = "block";
  saveBtn.style.display = "none";
}

//! ORDER

//? ADD ORDER

function addOrder(index) {
  let storage = JSON.parse(localStorage.getItem("foods")) || [];
  storage = storage.splice(index, 1);
  let oneProduct = storage[0];
  oneProduct.count = 1;
  let order = JSON.parse(localStorage.getItem("order")) || [];
  if (order.find((el) => el.id === oneProduct.id)) {
    alert("Этот элемент уже есть в корзине !!!");
    return;
  }
  order.push(storage);
  order = order.flat();
  localStorage.setItem("order", JSON.stringify(order));
  getOrder();
}

function checkOrder(id) {
  let order = JSON.parse(localStorage.getItem("order")) || [];
  return order.some((el) => el.id === id);
}

//? GET ORDER

function getOrder() {
  classOrder.innerHTML = "";
  let newOrder = JSON.parse(localStorage.getItem("order")) || [];
  newOrder.forEach((el, index) => {
    let orderCart = document.createElement("div");
    let orderText = document.createElement("div");
    let orderBtns = document.createElement("div");
    let orderCount = document.createElement("div");

    let orderImg = document.createElement("img");
    let orderName = document.createElement("h2");
    let orderPrice = document.createElement("h2");
    let count = document.createElement("h2");
    let orderDelete = document.createElement("button");
    let minus = document.createElement("button");
    let plus = document.createElement("button");

    orderCart.classList.add("orderCart");
    orderImg.classList.add("orderImg");
    orderText.classList.add("orderText");
    orderName.classList.add("orderName");
    orderPrice.classList.add("orderPrice");
    orderBtns.classList.add("orderBtns");
    orderCount.classList.add("orderCount");
    orderDelete.classList.add("orderDelete");
    minus.classList.add("minus");
    count.classList.add("count");
    plus.classList.add("plus");

    orderImg.src = el.image;
    orderName.innerText = el.name;
    orderPrice.innerText = el.price * el.count + "$";
    orderDelete.innerText = "delete order";
    minus.innerText = "-";
    count.innerText = el.count + "x";
    plus.innerText = "+";

    orderText.append(orderName);
    orderText.append(orderPrice);

    orderCount.append(minus);
    orderCount.append(count);
    orderCount.append(plus);

    orderBtns.append(orderDelete);
    orderBtns.append(orderCount);

    orderCart.append(orderImg);
    orderCart.append(orderText);
    orderCart.append(orderBtns);

    classOrder.append(orderCart);

    orderDelete.addEventListener("click", () => removeOrderData(index));
    plus.addEventListener("click", () => plusCount(index));
    minus.addEventListener("click", () => minusCount(index));
  });
}

//? REMOVE ORDER

function removeOrderData(index) {
  let order = JSON.parse(localStorage.getItem("order")) || [];
  order.splice(index, 1);
  localStorage.setItem("order", JSON.stringify(order));
  getOrder();
}

function plusCount(index) {
  let order = JSON.parse(localStorage.getItem("order")) || [];
  let plus = order[index].count + 1;
  let newOrder = order[index];
  newOrder.count = plus;
  order.splice(index, 1, newOrder);
  localStorage.setItem("order", JSON.stringify(order));
  getOrder();
}

function minusCount(index) {
  let order = JSON.parse(localStorage.getItem("order")) || [];

  let minus = order[index].count;
  if (order[index].count > 1) {
    minus = order[index].count - 1;
  }
  let newOrder = order[index];
  newOrder.count = minus;
  order.splice(index, 1, newOrder);
  localStorage.setItem("order", JSON.stringify(order));
  getOrder();
}
