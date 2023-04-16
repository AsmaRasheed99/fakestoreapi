class Products {
  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}
let ProArr = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let product = new Products(
        data[i].title,
        data[i].price,
        data[i].description,
        data[i].image
      );
      ProArr.push(product);
    }
    // console.log(ProArr);

    ProArr.map((element) => {
      let proCard = document.getElementById("product-cards");
      let container = document.createElement("div");
      let img = document.createElement("img");
      img.src = `${element.image}`;
      container.appendChild(img);
      let p1 = document.createElement("p");
      p1.textContent = `Title : ${element.title}`;
      let p2 = document.createElement("p");
      p2.textContent = `Price : ${element.price}`;
      let p3 = document.createElement("p");
      p3.textContent = `Description : ${element.description}`;

      container.appendChild(p1);
      container.appendChild(p2);
      container.appendChild(p3);
      proCard.appendChild(container);

      img.style.width = "20vh";
      img.style.marginBottom = "4rem";
      container.style.width = "60vh";
      container.style.boxShadow = "3px 3px 5px 3px grey";
      container.style.padding = "1rem";
      container.style.marginLeft = "1rem";
      container.style.marginRight = "1rem";
    });
  });
