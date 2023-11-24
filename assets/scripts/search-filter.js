const btns = document.querySelectorAll(".btn");
const productsDOM = document.querySelector(".products-center");
const storeProducts = document.querySelectorAll(".product");
const searchInput = document.querySelector("#search");


let allProductsData = [{
        "id": 1,
        "title": "Watch product",
        "class": "watch",
        "price": 109.99,
        "image": "./assets/images/watch-1.webp"
    },
    {
        "id": 2,
        "title": "Dress product",
        "class": "dress",
        "price": 175.00,
        "image": "./assets/images/dress-1.webp"
    },
    {
        "id": 3,
        "title": "Suit product",
        "class": "suit",
        "price": 270.50,
        "image": "./assets/images/suit-1.webp"
    },
    {
        "id": 4,
        "title": "Perfume product",
        "class": "perfume",
        "price": 99.99,
        "image": "./assets/images/perfume-1.webp"
    },

    {
        "id": 5,
        "title": "Watch product",
        "class": "watch",
        "price": 119.00,
        "image": "./assets/images/watch-2.webp"
    },
    {
        "id": 6,
        "title": "Dress product",
        "class": "dress",
        "price": 359.00,
        "image": "./assets/images/dress-2.webp "
    },

    {
        "id": 7,
        "title": "Suit product",
        "class": "suit",
        "price": 215.20,
        "image": "./assets/images/suit-2.webp"
    },
    {
        "id": 8,
        "title": "Dress product",
        "class": "dress",
        "price": 319.95,
        "image": "./assets/images/dress-3.webp"
    },
    {
        "id": 9,
        "title": "Perfume product",
        "class": "perfume",
        "price": 89.95,
        "image": "./assets/images/perfume-2.webp"
    },
    {
        "id": 10,
        "title": "Watch product",
        "class": "watch",
        "price": 94.20,
        "image": "./assets/images/watch-3.webp"
    },
    {
        "id": 11,
        "title": "Perfume product",
        "class": "perfume",
        "price": 104.45,
        "image": "./assets/images/perfume-3.webp"
    },


    {
        "id": 12,
        "title": "Dress product",
        "class": "dress",
        "price": 62.69,
        "image": "./assets/images/dress-4.webp"
    },



    {
        "id": 13,
        "title": "Suit product",
        "class": "suit",
        "price": 179.95,
        "image": "./assets/images/suit-3.webp"
    },
    {
        "id": 14,
        "title": "Dress product",
        "class": "dress",
        "price": 74.20,
        "image": "./assets/images/dress-5.webp"
    },
    {
        "id": 15,
        "title": "Perfume product",
        "class": "perfume",
        "price": 225.00,
        "image": "./assets/images/perfume-5.webp"
    },
    {
        "id": 16,
        "title": "Dress product",
        "class": "dress",
        "price": 158.69,
        "image": "./assets/images/dress-7.webp"
    },

    {
        "id": 17,
        "title": "Perfume product",
        "class": "perfume",
        "price": 117.50,
        "image": "./assets/images/perfume-6.webp"
    },
    {
        "id": 18,
        "title": "Suit product",
        "class": "suit",
        "price": 279.95,
        "image": "./assets/images/suit-5.webp"
    },


    {
        "id": 19,
        "title": "Suit product",
        "class": "suit",
        "price": 99.99,
        "image": "./assets/images/suit-4.webp"
    },
    {
        "id": 20,
        "title": "Watch product",
        "class": "watch",
        "price": 99.90,
        "image": "./assets/images/watch-4.webp"
    },
    {
        "id": 21,
        "title": "Perfume product",
        "class": "perfume",
        "price": 175.00,
        "image": "./assets/images/perfume-4.webp"
    },


    {
        "id": 22,
        "title": "Dress product",
        "class": "dress",
        "price": 68.20,
        "image": "./assets/images/dress-6.webp"
    }
];
const filters = {
    searchItems: "",

};
document.addEventListener("DOMContentLoaded", () => {
    //axios
    //.get("http://localhost:3000/items")
    //.then((res) => {
    //console.log(res.data);
    //allProductsData = res.data;
    //render products on DOM:
    renderProducts(allProductsData, filters);
    //})
    //.catch((err) => console.log(err));
});


function renderProducts(products, _filters) {
    const filteredProducts = products.filter((p) => {
        return p.title.toLowerCase().includes(_filters.searchItems.toLowerCase());
    });
    //console.log(filteredProducts);

    productsDOM.innerHTML = "";
    //render to DOM:
    filteredProducts.forEach((item) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.classList.add("focus:focus");
        productDiv.innerHTML = `<div class="img-container">
       
        <img src=${item.image} class="product-img" />
    </div>
    <div class="product-desc">
    <p class="product-title">${item.title}</p>
        <p class="product-price">${item.price}$</p>
       
    </div>`;
        //append to DOM:
        productsDOM.appendChild(productDiv);
    });
}
searchInput.addEventListener("input", (e) => {
    //console.log(e.target.value);
    filters.searchItems = e.target.value;
    renderProducts(allProductsData, filters);
});
//filter based on groups:
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {


        const filter = e.target.dataset.filter;
        //console.log(filter);
        filters.searchItems = filter;
        renderProducts(allProductsData, filters);
    });
})