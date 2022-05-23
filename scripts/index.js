//store the products array in localstorage as "products"
function NikObj(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price= p;
    this.image = i;

}
function disc(event){
    event.preventDefault()
    let form = document.getElementById("products")
    let type = form.type.value;
    let description = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let nike = new NikObj(type,description,price,image)
   
    let products = JSON.parse(localStorage.getItem("productsArr")) || []
    products.push(nike)
    localStorage.setItem("productsArr",JSON.stringify(products))

}