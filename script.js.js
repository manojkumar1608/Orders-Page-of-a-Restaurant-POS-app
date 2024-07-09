
const menu = [
  { name: 'Chicken Biryani', price: 300, imageUrl: 'https://th.bing.com/th/id/OIP.Y6467E_Dbzh3GzFyhcnP6AHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
  { name: 'Cheeseburger', price: 150, imageUrl: 'https://cdn.pixabay.com/photo/2024/04/27/12/41/ai-generated-8723664_1280.png' },
  { name: 'Margherita Pizza', price: 220, imageUrl: 'https://envato-shoebox-0.imgix.net/8af6/4803-fd7e-4e89-a5d1-9137b0b09524/2015-11-23+SKR_5876_02_isolated.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=17cd7b7492ee4f2c87108a95c2069b4f' },
  { name: 'French Fries', price: 90, imageUrl: 'https://envato-shoebox-0.imgix.net/1931/e9f9-823f-4d3a-b46a-dda1497ff68a/IMG_4612.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=48f3c24f622559931b3f63f5efd90545' },
  { name: 'Tacos', price: 100, imageUrl: 'https://envato-shoebox-0.imgix.net/c118/20d8-3887-49df-a9ad-389cfaaed3ef/61964.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=668aab5232273fc7a85f204069d532a6' },
  { name: 'Sandwich', price: 120, imageUrl: 'https://th.bing.com/th/id/OIP.YzOQadTvlOfgDxtOPev0TQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
  { name: 'Hot Chocolate', price: 120, imageUrl: 'https://envato-shoebox-0.imgix.net/9c3d/98a9-5017-40aa-97d9-defcf592a216/IMG_4982_2.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=08419d3cba13a96f66bebfbd7acabbbc' },
  { name: 'Ice Cream', price: 90, imageUrl: 'https://envato-shoebox-0.imgix.net/4d1e/4b33-e756-4b3d-a9d1-8d8512eb5c47/20747.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=800&fit=max&markalign=center%2Cmiddle&markalpha=18&s=357b309e22d8878b6171fca902aff9e3' },
  { name: 'Blue Cocktail', price: 60, imageUrl: 'https://envato-shoebox-0.imgix.net/4204/24ea-634a-11e2-952c-842b2b692e1a/Blue+cocktail+in+a+big+glass.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=600&fit=max&markalign=center%2Cmiddle&markalpha=18&s=e88d28564e7241b04c9b148b6b1912a9' },
  { name: 'Water Bottle', price: 20, imageUrl: 'https://th.bing.com/th?id=OIP.HMRnN2phEFDzu3E63GwsjgHaH-&w=240&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' },
];

function menucard() {
  // Get the card container
  const cardContainer = document.querySelector('#menucards-container');

  // Generate the HTML for all cards
  const cardsHTML = menu.map(item => `
                <div class="card custom-card custom-margin m-2 d-flex rounded-4 p-1" style="height: 13.6rem; width: 13rem;" data-name="${item.name}" data-price="${item.price}">
                    <img src="${item.imageUrl}" class="card-img-top mx-auto mt-1" alt="${item.name}" style="width: 7rem; height: 7rem;">
                    <div class="card-body d-flex flex-column align-items-center">
                        <h6 class="card-title">${item.name}</h6>
                        <p class="card-price">Rs ${item.price}</p>
                    </div>
                </div>
            `).join('');

  // Set the innerHTML of the card container
  cardContainer.innerHTML = cardsHTML;

  // Add event listeners to each card
  document.querySelectorAll('.custom-card').forEach(card => {
    card.addEventListener('click', function () {
      addItemToOrder(this.getAttribute('data-name'), parseFloat(this.getAttribute('data-price')));

    });
  });

  function addItemToOrder(name, price) {
    const orderBody = document.getElementById('order-body');
    const existingRow = document.querySelector(`.order-row[data-name="${name}"]`);

    if (existingRow) {
      const qtyElement = existingRow.querySelector('.qty');
      let qty = parseInt(qtyElement.textContent);
      qty++;
      qtyElement.textContent = qty;
      const totalCell = existingRow.querySelector('.order-price');
      totalCell.textContent = (qty * price).toFixed(2);
    } else {
      const row = document.createElement('div');
      row.classList.add('order-row');
      row.setAttribute('data-name', name);
      row.innerHTML = `
    <div class="d-flex flex-column pt-2" data-id="order1">
        <div class="d-flex flex-column" style="height: 2.5rem;">
          <div class="order-item" style="font-weight: 700; text-align: start;">${name}</div>
          <p class="price" style="font-weight: 600; font-size: smaller; color: #4C3BCF; text-align: start;">Amount ${price}</p>
        </div>
      </div>
      <div class="order-quantity bg-primary rounded-2 " style="height: 2rem; width: 6rem;">
        <button class="btn btn-sm text-light mx-2 decrement" type="button" style="font-size: large;">-</button>
        <p class="qty mt-3" style="font-weight: 500;">1</p>
        <button class="btn btn-sm text-light   increment" type="button" style="font-size: large;">+</button>
      </div>
      <div class="order-price" style=" width: 6rem; text-align:center">${price}</div>
      <div class="order-actions " style="width: 2rem;">
        <i class="bi bi-trash trash-icon" type="button" style="font-size: large; cursor: pointer;"></i>
        </div>
      `;
      orderBody.appendChild(row);

      // Add event listeners for increment and decrement buttons
      row.querySelector('.increment').addEventListener('click', () => {
        const qtyElement = row.querySelector('.qty');
        const totalCell = row.querySelector('.order-price');
        let qty = parseInt(qtyElement.textContent);
        qty++;
        qtyElement.textContent = qty;
        totalCell.textContent = (qty * price).toFixed(2);
      });

      row.querySelector('.decrement').addEventListener('click', () => {
        const qtyElement = row.querySelector('.qty');
        const totalCell = row.querySelector('.order-price');
        let qty = parseInt(qtyElement.textContent);
        if (qty > 1) {
          qty--;
          qtyElement.textContent = qty;
          totalCell.textContent = (qty * price).toFixed(2);
        }
      });
      // Add event listener for the trash icon in the newly created row
      row.querySelector('.trash-icon').addEventListener('click', () => {
        row.remove(); // Remove the entire row when trash icon is clicked
      });
    }
  }

  let totalPrice = 0;

  // Function to update the total price
  function updateTotalPrice() {
    const priceElements = document.querySelectorAll('.order-price');
    totalPrice = 0;
    priceElements.forEach(priceElement => {
      totalPrice += parseFloat(priceElement.textContent);
    });
    const totalElement = document.querySelector('#total-price');
    totalElement.textContent = `${totalPrice.toFixed(2)}`;
  }

  const mutationObserver = new MutationObserver(() => {
    updateTotalPrice();
    updateTotalPayment();
  });

  // Observe changes to the #order-body element
  mutationObserver.observe(document.getElementById('order-body'), {
    childList: true,
    subtree: true
  });



  // Call the updateTotalPrice *SubTotal* function initially
  updateTotalPrice();

  let Payment = 0;
  function updateTotalPayment() {
    const Subtotal = document.querySelector('#total-price')
    const discount = document.querySelector('#discount')
    Payment = 0
    Payment = parseFloat(Subtotal.textContent) - parseFloat(discount.textContent);
    const totalPayment = document.querySelector('#Total-payment')
    totalPayment.textContent = ` ${Payment.toFixed(2)}`

  }



// Function to handle adding items to an existing order after navigation
function handleAddItemsAfterNavigation() {
  // Parse the order index from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const orderIndex = urlParams.get('orderIndex');
  
  // Example: Fetch order details from storage or database based on orderIndex
  const storedOrders = JSON.parse(getCookie('orders') || "[]");
 // Example of getting orders from localStorage

  if (storedOrders && storedOrders[orderIndex]) {
    const order = storedOrders[orderIndex];
    // Loop through items in the order to add them to the order management page
    document.getElementById('order-select1').value = order.table || "";
    document.getElementById('order-nameInput').value = order.name || "";
    document.getElementById('order-dine-in').classList.toggle('active', order.orderType === "Dine");
    document.getElementById('order-togo').classList.toggle('active', order.orderType === "To Go");
    document.getElementById('order-delivery').classList.toggle('active', order.orderType === "Delivery");
    updateTotalPrice();
    updateTotalPayment();
  } else {
    // console.error(`Order with index ${orderIndex} not found.`);
    null
  }
}

// Call the function to handle adding items after navigation
handleAddItemsAfterNavigation();


  // Function to get current time in hh:mm format
  function getCurrentTime() {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes} | ${date}/${month}/${year}`;
  }

  // Select all dateTimeSelect elements
  const dateTimeSelects = document.querySelectorAll('.dateTimeSelect');

  // Loop through each select element
  dateTimeSelects.forEach(dateTimeSelect => {
    // Find the first option within each select element
    const firstOption = dateTimeSelect.querySelector('.option');

    if (firstOption) {
      // Get current time
      const currentTime = getCurrentTime();

      // Update the text content and value of the first option
      firstOption.textContent = `Kot  II ${currentTime}  ${firstOption.textContent}`;
      firstOption.value = currentTime;
    }
  });

  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}
menucard();


document.addEventListener("DOMContentLoaded", function () {
  clearURLParameters()
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }


  function storeFormData(event) {
    event.preventDefault(); 
    const orderBody = document.getElementById('order-body')
    const orderItems = orderBody.querySelectorAll('.order-row')
    if(orderItems.length > 0){
  
    const tableSelect = document.getElementById('order-select1');
    const nameInput = document.getElementById('order-nameInput');
    const orderTypeTabs = document.querySelector('.nav-tabs .nav-link.active');
    const totalPayment = document.getElementById('Total-payment').textContent;
  
    const table = tableSelect.value;
    const name = nameInput ? nameInput.value : "" ;
    const orderType = orderTypeTabs.textContent;
  
    const orderBodyData = Array.from(document.querySelectorAll('#order-body .order-item')).map((item, index) => {
      const amount = document.querySelectorAll('#order-body .price')[index].textContent.replace('Amount ', '');
      const qty = document.querySelectorAll('#order-body .qty')[index].textContent;
      const price = document.querySelectorAll('#order-body .order-price')[index].textContent;
      return {
        name: item.textContent,
        amount: parseFloat(amount),
        qty: parseInt(qty, 10),
        price: parseFloat(price)
      };
    });
  
    // Filter out empty items
    const filteredOrderBodyData = orderBodyData.filter(item => item.name || item.amount || item.qty || item.price);
  
    // Retrieve existing orders from cookies
    let orders = JSON.parse(getCookie('orders') || "[]");
    console.log(orders);
  
    // Check if there are existing orders for merging
    if (orders.length > 0) {
      // Find the index of the existing order, if any
      const existingOrderIndex = orders.findIndex(order => order.table === table && order.name === name && order.orderType === orderType);
  
      if (existingOrderIndex !== -1) {
        // Merging new items into the existing order
        filteredOrderBodyData.forEach(newItem => {
          const existingItemIndex = orders[existingOrderIndex].items.findIndex(item => item.name === newItem.name);
          if (existingItemIndex !== -1) {
            // Updating quantity and amount of existing item
            orders[existingOrderIndex].items[existingItemIndex].qty += newItem.qty;
            orders[existingOrderIndex].items[existingItemIndex].amount += newItem.amount;
            orders[existingOrderIndex].items[existingItemIndex].price += newItem.price;
          } else {
            // Adding new item if it doesn't exist
            orders[existingOrderIndex].items.push(newItem);
          }
        });
        // Update total payment
        orders[existingOrderIndex].totalPayment = parseFloat(orders[existingOrderIndex].totalPayment) + parseFloat(totalPayment);
      } else {
        // Add a new order entry
        orders.push({
          table: table,
          name: name,
          orderType: orderType,
          totalPayment: totalPayment,
          items: filteredOrderBodyData
        });
      }
    } else {
      // If no existing orders, simply add the new order
      orders.push({
        table: table,
        name: name,
        orderType: orderType,
        totalPayment: totalPayment,
        items: filteredOrderBodyData
      });
    }
  
    // Saving updated orders back to cookies
    setCookie('orders', JSON.stringify(orders), 7);
  
    clearFormFields();
    clearURLParameters();
    alert('Order Successfully added! check Ongoing-Orders ');
    cards(); 
  }else{
    alert('Select items to place order')
  }
  }
  
  document.getElementById('save').addEventListener('click', storeFormData);
  
  // Function to clear form fields
  function clearFormFields() {
    const tableSelect = document.getElementById('order-select1');
    const nameInput = document.getElementById('order-nameInput');
  
    tableSelect.value = '';
    if (nameInput) {
      nameInput.value = '';
    }
    const orderBody = document.getElementById('order-body');
    orderBody.innerHTML = '';
  }
  
// Function to clear URL parameters 
function clearURLParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('orderIndex')) {
      window.history.replaceState({}, document.title, window.location.pathname); // Clear URL parameters
  }
}

  function cards() {
    const orders = JSON.parse(getCookie('orders') || "[]");

    const cardContainer = document.getElementById('cards-container-all');
    const cardsHTML = orders.map((order, index) => {
      let borderColor, textColor, backgroundColor;
      if (order.orderType === "Dine") {
          borderColor = "lightgreen";
          textColor = "text-success";
          backgroundColor = "bg-success-subtle";
      } else if (order.orderType === "To Go") {
          borderColor = "#ff0000";
          textColor = "text-danger";
          backgroundColor = "bg-danger-subtle";
      } else if (order.orderType === "Delivery") {
          borderColor = "#ff9f00";
          textColor = "text-warning";
          backgroundColor = "bg-warning-subtle";
      }
  

        return `
        <div class="ongoingorder-cards me-3 mb-3" data-order-index="${index}" data-order='${JSON.stringify(order)}'>
          <div class="table bg-light-subtle mt-2 rounded-3 pt-3 px-3" style="width:23rem; margin-bottom: 0;">
            <div class="tableno d-flex justify-content-between w-100" style="height: 1.8rem;font-weight: 600;">
              <p>${order.table}</p>
              <p id="orderid">#1234</p>
            </div>
            <div class="d-flex justify-content-between w-100" style="font-weight: 600;height: 1.8rem;">
              <p>Name:${order.name}</p>
              <p id="taotalpayment">Rs${order.totalPayment}</p>
            </div>
            <div class="buttons d-flex justify-content-between px-1 py-2">
              <div class="buttons">
                <button type="button" class="btn btn-light bg-primary px-4 mx-1" style="font-weight: bold; color:white; padding-top:0.4rem;padding-bottom:0.4rem;">Pay</button>
                <button type="button" class="btn btn-light mx-1" style="font-weight: bold;color:gray; background-color: #EEF5FF; padding-top:0.4rem;padding-bottom:0.4rem;">Pay later</button>
              </div>
              <div class="">
                <i class="btn bi bi-x-lg px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
                <i class="btn bi bi-printer px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
                <i class="btn bi bi-pencil px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
              </div>
            </div>
          </div>
          <div class="ordertype px-4 d-flex justify-content-between rounded-1 align-items-center ${backgroundColor} w-100" style="height: 2.8rem; font-weight: 500; border-top: 2px dashed ${borderColor};">
            <p class="m-0 ${textColor}">${order.orderType}</p>
            <i class="bi bi-alarm text-primary" style="font-size: small;"> 15min</i>
          </div>
        </div>
        `;
    }).join('');
    
    cardContainer.innerHTML = cardsHTML;

    document.querySelectorAll('.ongoingorder-cards').forEach(card => {
      card.addEventListener('click', function () {
          const order = JSON.parse(this.getAttribute('data-order'));
          const orderIndex = this.getAttribute('data-order-index');
          populateForm(order);
          localStorage.setItem('currentOrderIndex', orderIndex);
      });
    });
    document.addEventListener('DOMContentLoaded', function() {
      const AllTabAddItemsButton = document.getElementById('add-items-button');
      
      AllTabAddItemsButton.addEventListener('click', function() {
       
        // Check if the order body is empty
        if (orderItems.length === 0) {
          AllTabAddItemsButton.disabled = true;
          console.log('No items in order body. Add Items button is disabled.');
        } else {
          AllTabAddItemsButton.disabled = false;
          console.log('Current order index:', localStorage.getItem('currentOrderIndex'));
        }
      });
    });
    
  
    // Attach click event to the "Add items" button
    const AllTabAddItemsButton = document.getElementById('add-items-button');
    AllTabAddItemsButton.addEventListener('click', function() {
      const currentOrderIndex = localStorage.getItem('currentOrderIndex');
      const orderBody = document.querySelector('#ongoing-order-body'); // Adjust the selector to match your order body
      const orderItems = orderBody.querySelectorAll('.ongoing-order-row'); // Adjust the selector to match your order items
  
      if(orderItems.length > 0) {
      if (currentOrderIndex !== null) {
        // Navigate back to menu page to add items//
        window.location.href = `menu.html?orderIndex=${currentOrderIndex}`;
      } else {
        console.log('No order selected');
      }
    }else{
      alert(' Select an order to add items');
    }
    });

    const dinetab = document.getElementById('cards-container-Dine-in')
    const dineorders = orders.filter(order => order.orderType === 'Dine')

    const dinecardsHtml = dineorders.map((order,index) =>{ 
      let borderColor, textColor, backgroundColor;
        if (order.orderType === "Dine") {
            borderColor = "lightgreen";
            textColor = "text-success";
            backgroundColor = "bg-success-subtle";
        } else if (order.orderType === "To Go") {
            borderColor = "#ff0000";
            textColor = "text-danger";
            backgroundColor = "bg-danger-subtle";
        } else if (order.orderType === "Delivery") {
            borderColor = "#ff9f00";
            textColor = "text-warning";
            backgroundColor = "bg-warning-subtle";
        }
      return`
               <div class="ongoingorder-cards me-3 mb-3" data-order-index="${index}" data-order='${JSON.stringify(order)}'>
          <div class="table bg-light-subtle mt-2 rounded-3 pt-3 px-3" style="width:23rem; margin-bottom: 0;">
            <div class="tableno d-flex justify-content-between w-100" style="height: 1.8rem;font-weight: 600;">
              <p>${order.table}</p>
              <p id="orderid">#1234</p>
            </div>
            <div class="d-flex justify-content-between w-100" style="font-weight: 600;height: 1.8rem;">
              <p>Name:${order.name}</p>
              <p id="taotalpayment">Rs${order.totalPayment}</p>
            </div>
            <div class="buttons d-flex justify-content-between px-1 py-2">
              <div class="buttons">
                <button type="button" class="btn btn-light bg-primary px-4 mx-1" style="font-weight: bold; color:white; padding-top:0.4rem;padding-bottom:0.4rem;">Pay</button>
                <button type="button" class="btn btn-light mx-1" style="font-weight: bold;color:gray; background-color: #EEF5FF; padding-top:0.4rem;padding-bottom:0.4rem;">Pay later</button>
              </div>
              <div class="">
                <i class="btn bi bi-x-lg px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
                <i class="btn bi bi-printer px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
                <i class="btn bi bi-pencil px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
              </div>
            </div>
          </div>
          <div class="ordertype px-4 d-flex justify-content-between rounded-1 align-items-center ${backgroundColor} w-100" style="height: 2.8rem; font-weight: 500; border-top: 2px dashed ${borderColor};">
            <p class="m-0 ${textColor}">${order.orderType}</p>
            <i class="bi bi-alarm text-primary" style="font-size: small;"> 15min</i>
          </div>
        </div>
        `;
    }).join('');

    dinetab.innerHTML = dinecardsHtml

    document.querySelectorAll('.ongoingorder-cards').forEach(card => {
      card.addEventListener('click', function () {
          const order = JSON.parse(this.getAttribute('data-order'));
          const orderIndex = this.getAttribute('data-order-index');
          populateForm(order);
          localStorage.setItem('currentOrderIndex', orderIndex);
      });
    });
  
    

    const togotab = document.getElementById('cards-container-To-Go')
    const togoOrders = orders.filter(order => order.orderType === 'To Go')

    const togoCardHtml = togoOrders.map((order,index) => {
      let borderColor, textColor, backgroundColor;
        if (order.orderType === "Dine") {
            borderColor = "lightgreen";
            textColor = "text-success";
            backgroundColor = "bg-success-subtle";
        } else if (order.orderType === "To Go") {
            borderColor = "#ff0000";
            textColor = "text-danger";
            backgroundColor = "bg-danger-subtle";
        } else if (order.orderType === "Delivery") {
            borderColor = "#ff9f00";
            textColor = "text-warning";
            backgroundColor = "bg-warning-subtle";
        }
      return`
               <div class="ongoingorder-cards me-3 mb-3" data-order-index="${index}" data-order='${JSON.stringify(order)}'>
          <div class="table bg-light-subtle mt-2 rounded-3 pt-3 px-3" style="width:23rem; margin-bottom: 0;">
            <div class="tableno d-flex justify-content-between w-100" style="height: 1.8rem;font-weight: 600;">
              <p>${order.table}</p>
              <p id="orderid">#1234</p>
            </div>
            <div class="d-flex justify-content-between w-100" style="font-weight: 600;height: 1.8rem;">
              <p>Name:${order.name}</p>
              <p id="taotalpayment">Rs${order.totalPayment}</p>
            </div>
            <div class="buttons d-flex justify-content-between px-1 py-2">
              <div class="buttons">
                <button type="button" class="btn btn-light bg-primary px-4 mx-1" style="font-weight: bold; color:white; padding-top:0.4rem;padding-bottom:0.4rem;">Pay</button>
                <button type="button" class="btn btn-light mx-1" style="font-weight: bold;color:gray; background-color: #EEF5FF; padding-top:0.4rem;padding-bottom:0.4rem;">Pay later</button>
              </div>
              <div class="">
                <i class="btn bi bi-x-lg px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
                <i class="btn bi bi-printer px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
                <i class="btn bi bi-pencil px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
              </div>
            </div>
          </div>
          <div class="ordertype px-4 d-flex justify-content-between rounded-1 align-items-center ${backgroundColor} w-100" style="height: 2.8rem; font-weight: 500; border-top: 2px dashed ${borderColor};">
            <p class="m-0 ${textColor}">${order.orderType}</p>
            <i class="bi bi-alarm text-primary" style="font-size: small;"> 15min</i>
          </div>
        </div>
        `;
    }).join('');

    togotab.innerHTML = togoCardHtml

    document.querySelectorAll('.ongoingorder-cards').forEach(card => {
      card.addEventListener('click', function () {
          const order = JSON.parse(this.getAttribute('data-order'));
          const orderIndex = this.getAttribute('data-order-index');
          populateForm(order);
          localStorage.setItem('currentOrderIndex', orderIndex);
      });
    });
  
   
    const deliveryTab = document.getElementById('cards-container-Delivery')
    const deliveryOrders = orders.filter(order => order.orderType === 'Delivery')

    const deliveryCardHtml = deliveryOrders.map((order,index) =>{
      let borderColor, textColor, backgroundColor;
      if (order.orderType === "Dine") {
          borderColor = "lightgreen";
          textColor = "text-success";
          backgroundColor = "bg-success-subtle";
      } else if (order.orderType === "To Go") {
          borderColor = "#ff0000";
          textColor = "text-danger";
          backgroundColor = "bg-danger-subtle";
      } else if (order.orderType === "Delivery") {
          borderColor = "#ff9f00";
          textColor = "text-warning";
          backgroundColor = "bg-warning-subtle";
      }
    return`
             <div class="ongoingorder-cards me-3 mb-3" data-order-index="${index}" data-order='${JSON.stringify(order)}'>
        <div class="table bg-light-subtle mt-2 rounded-3 pt-3 px-3" style="width:23rem; margin-bottom: 0;">
          <div class="tableno d-flex justify-content-between w-100" style="height: 1.8rem;font-weight: 600;">
            <p>${order.table}</p>
            <p id="orderid">#1234</p>
          </div>
          <div class="d-flex justify-content-between w-100" style="font-weight: 600;height: 1.8rem;">
            <p>Name:${order.name}</p>
            <p id="taotalpayment">Rs${order.totalPayment}</p>
          </div>
          <div class="buttons d-flex justify-content-between px-1 py-2">
            <div class="buttons">
              <button type="button" class="btn btn-light bg-primary px-4 mx-1" style="font-weight: bold; color:white; padding-top:0.4rem;padding-bottom:0.4rem;">Pay</button>
              <button type="button" class="btn btn-light mx-1" style="font-weight: bold;color:gray; background-color: #EEF5FF; padding-top:0.4rem;padding-bottom:0.4rem;">Pay later</button>
            </div>
            <div class="">
              <i class="btn bi bi-x-lg px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
              <i class="btn bi bi-printer px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
              <i class="btn bi bi-pencil px-2 mx-1 py-1" style="background-color: #EEF5FF;"></i>
            </div>
          </div>
        </div>
        <div class="ordertype px-4 d-flex justify-content-between rounded-1 align-items-center ${backgroundColor} w-100" style="height: 2.8rem; font-weight: 500; border-top: 2px dashed ${borderColor};">
          <p class="m-0 ${textColor}">${order.orderType}</p>
          <i class="bi bi-alarm text-primary" style="font-size: small;"> 15min</i>
        </div>
      </div>
      `;
  }).join('');

  deliveryTab.innerHTML = deliveryCardHtml

   // Attach click event to each order card
   document.querySelectorAll('.ongoingorder-cards').forEach(card => {
    card.addEventListener('click', function () {
        const order = JSON.parse(this.getAttribute('data-order'));
        const orderIndex = this.getAttribute('data-order-index');
        populateForm(order);
        localStorage.setItem('currentOrderIndex', orderIndex);
    });
  });

  
}
cards();





  function populateForm(order) {
    document.getElementById('select2').value = order.table;
    document.getElementById('ongoingorder-nameInput').value = order.name;
    // Set the correct tab based on orderType
    document.getElementById('dinein').classList.toggle('active', order.orderType === "Dine");
    document.getElementById('togo').classList.toggle('active', order.orderType === "To Go");
    document.getElementById('delivery').classList.toggle('active', order.orderType === "Delivery");
   
    const ongoingOrderBody = document.getElementById('ongoing-order-body');
    ongoingOrderBody.innerHTML = ''; // Clear previous items

    order.items.forEach(item => {
        
        // Creates a new row element
        const row = document.createElement('div');
        row.classList.add('ongoing-order-row', 'd-flex', 'justify-content-between', 'align-items-center', 'py-2');

        // Set the inner HTML of the row
        row.innerHTML = `
            
                <div class="d-flex flex-column" style="height: 2.5rem;">
                    <div class="ongoing-order-item" style="font-weight: 700; text-align: start;width:8rem;">${item.name}</div>
                    <p class="price" style="font-weight: 600; font-size: smaller; color: #4C3BCF; text-align: start;">Amount ${item.amount}</p>
                </div>
            </div>
            <div class="ongoing-order-quantity bg-primary rounded-2 pt-1" style="height: 2rem; width: 6rem; text-align:center">
                <p class="qty" style="font-weight: 500;">${item.qty}</p>
            </div>'
            <div id="ongoing-total-prices" class="ongoing-order-price" style="width: 6rem; text-align:end">${item.price}</div>
        `;

        // Append the row to the ongoingOrderBody
        ongoingOrderBody.appendChild(row);
      });
      let OngoingTotalPrice = 0;
      const ongoingprice = document.getElementById('ongoing-total-price')
      const ongoingTotalPayment = document.getElementById('ongoing-Total-payment')
      const priceElements = document.querySelectorAll('#ongoing-total-prices');
      console.log(priceElements)
      OngoingTotalPrice = 0;
      priceElements.forEach(priceElement => {
        OngoingTotalPrice += parseFloat(priceElement.textContent);
      });
      ongoingprice.innerHTML += OngoingTotalPrice 

    }
  });
 