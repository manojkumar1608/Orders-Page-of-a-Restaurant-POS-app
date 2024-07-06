document.addEventListener("DOMContentLoaded", function() {
  function cards() {
    const data = [
      { name: 'John Doe', amount: 100 },
      { name: 'Jane Smith', amount: 200 },
      { name: 'Alice Johnson', amount: 300 },
      { name: 'Bob Brown', amount: 400 }
    ];

    const cardContainer = document.querySelector('#cards-container');

    //  HTML code for all cards
    const cardsHTML = data.map(card => `
       <div class="card m-2" style="width: 30%;">
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">Amount: ${card.amount}</p>
          <a href="#" class="btn btn-primary">Button</a>
        </div>
      </div>
    `).join('');

    // updating innerHTML of the card container
    cardContainer.innerHTML = cardsHTML;
  }

  cards();
});



document.addEventListener("DOMContentLoaded", function() {
  function menucard(){
    const menu = [
      { name: 'Chicken Biryani', price: 300, imageUrl: 'https://th.bing.com/th/id/OIP.Y6467E_Dbzh3GzFyhcnP6AHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
      { name: 'Cheeseburger', price: 150, imageUrl: 'https://cdn.pixabay.com/photo/2024/04/27/12/41/ai-generated-8723664_1280.png' },
      { name: 'Margherita Pizza', price: 220, imageUrl: 'https://envato-shoebox-0.imgix.net/8af6/4803-fd7e-4e89-a5d1-9137b0b09524/2015-11-23+SKR_5876_02_isolated.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=17cd7b7492ee4f2c87108a95c2069b4f' },
      { name: 'French Fries', price: 90, imageUrl: 'https://envato-shoebox-0.imgix.net/1931/e9f9-823f-4d3a-b46a-dda1497ff68a/IMG_4612.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=48f3c24f622559931b3f63f5efd90545' },
      { name: 'Tacos', price: 100, imageUrl: 'https://envato-shoebox-0.imgix.net/c118/20d8-3887-49df-a9ad-389cfaaed3ef/61964.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=668aab5232273fc7a85f204069d532a6' },
      { name: 'Sandwich', price: 120, imageUrl: 'https://th.bing.com/th/id/OIP.YzOQadTvlOfgDxtOPev0TQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
      { name: 'Hot Choclate', price: 120, imageUrl: 'https://envato-shoebox-0.imgix.net/9c3d/98a9-5017-40aa-97d9-defcf592a216/IMG_4982_2.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1000&fit=max&markalign=center%2Cmiddle&markalpha=18&s=08419d3cba13a96f66bebfbd7acabbbc' },
      { name: 'Ice cream Desert', price: 90, imageUrl: 'https://envato-shoebox-0.imgix.net/4d1e/4b33-e756-4b3d-a9d1-8d8512eb5c47/20747.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=800&fit=max&markalign=center%2Cmiddle&markalpha=18&s=357b309e22d8878b6171fca902aff9e3' },
      { name: 'Blue Cocktail', price: 60, imageUrl: 'https://envato-shoebox-0.imgix.net/4204/24ea-634a-11e2-952c-842b2b692e1a/Blue+cocktail+in+a+big+glass.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=600&fit=max&markalign=center%2Cmiddle&markalpha=18&s=e88d28564e7241b04c9b148b6b1912a9' },
      { name: 'Water Bottle', price: 20, imageUrl: 'https://th.bing.com/th?id=OIP.HMRnN2phEFDzu3E63GwsjgHaH-&w=240&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' },
    ];

    // Get the card container
    const cardContainer = document.querySelector('#menucards-container');

    // Generate the HTML for all cards
    const cardsHTML = menu.map(item => `
      <div class="card custom-card custom-margin m-2 d-flex rounded-4 p-1" style= "height: 13.6rem; width:12rem">
        <img src="${item.imageUrl}" class="card-img-top mx-auto mt-1 " alt="${item.name}" style= "width:7rem; height:7rem">
         <div class="card-body d-flex flex-column align-items-center">
          <h6 class="card-title">${item.name}</h6>
          <p class="card-price"> Rs ${item.price} </p>
         </div>
      </div>
    `).join('');

    // Set the innerHTML of the card container
    cardContainer.innerHTML = cardsHTML;
  }
  menucard();
});