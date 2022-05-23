let products = JSON.parse(localStorage.getItem("productsArr"))


function display(data){
    data.forEach(function(ele)
    {
        var box=document.createElement("div");
     
        let p1=document.createElement("p");
        p1.innerText=ele.type;
        let p3=document.createElement("p");
        p3.innerText=  ele.desc;
        let p4=document.createElement("p");
        p4.innerText= ele.price
        let image = document.createElement("img")
        image.setAttribute("src",ele.image)
        box.append(image,p1,p3,p4);
        document.querySelector("#all_products").append(box);
        

    })
}

display(products)