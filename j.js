import fetch from 'node-fetch'

const product = await fetch("https://astro-fetching.vercel.app/product", {
  method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
   body: JSON.stringify({
     id: 6,
     name: "Jaifon XS",
    price: 500,
     img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gizmochina.com%2Fwp-content%2Fuploads%2F2023%2F01%2Fiphone15-concept.jpg&f=1&nofb=1&ipt=7809ae6b73c0a5f68e184b4292a5e66106ba234c98c524da5bb67bc728cb633a&ipo=images",
}),
});

console.log(product);
