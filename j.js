import fetch from 'node-fetch'

const product = await fetch("https://api-morty-products.vercel.app/product", {
  method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
   body: JSON.stringify({
     id: 8,
     name: "Mouse Gamer",
    price: 500,
     img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F61QXVSF6bLL._AC_SL1500_.jpg&f=1&nofb=1&ipt=4008d1dd353e0b61d340a03cb9f08a36eaeddcbb643e3dbb8a289f46bb7968da&ipo=images",
}),
});

console.log(product);
