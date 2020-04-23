var UIController = (()=>{
    //PRODUCTS
    const products = [
      {name:"Creme Donuts", price:"$4/pc", image: "./img/doughnut-4.jpg", id: 'donuts'},
      {name:"Rainbow Donuts", price:"$4/pc", image: './img/doughnut-1.jpg', id: 'donuts'},
      {name:"Sparkle Donuts", price:"$5/pc", image: './img/doughnut-2.jpg', id: 'donuts'},
      {name:"BlueBerry Cake", price:"$20/kg", image: "./img/cake-2.jpg", id: 'cakes'},
      {name:"Chocolate Cake", price:"$25/kg", image: "./img/cake.jpg", id: 'cakes'},
      {name:"Cute Macaroons", price:"$3/pc", image: "./img/mac.jpg", id: 'sweets'},
      {name:"Rainbow Macaroons", price:"$3/pc", image: "./img/mac-2.jpg", id: 'sweets'},
      {name:"Mixed Macaroons", price:"$4/pc", image: "./img/mac-3.jpg", id: 'sweet'},
      {name:"Chocolate Cupcakes", price:"$8/pc", image: "./img/cc.jpg", id: 'cupcakes'},
      {name:"Mango Cupcakes", price:"$10/pc", image: "./img/cc-1.jpg", id: 'cupcakes'},
      {name:"Strawberry Cupcakes", price:"$10/pc", image: "./img/cc-3.jpg", id: 'cupcakes'},
      {name:"Chocochip Cupcakes", price:"$10/pc", image: "./img/cc-4.jpg", id: 'cupcakes'}
    ];

    //DISPALING PRODUCT
    displayProduct = (name,image,price) => {
        var html = '<div class="grid-item"><img src=' + image + '><div class="col product-description" ><div class="row"><div class="col-8"><b>'+ name +'</b></div><div class="col-4 text-right"><b>'+ price + '</b></div></div></div></div>';
        document.querySelector(".product-container").innerHTML+=html;
    };

    //FILTER ARRAY AND DISPLAYING
    filterArray = (id) => {
      products.map((obj)=>{
        if (obj.id==id){
          console.log(obj.name,obj.image,obj.price);
          return displayProduct(obj.name,obj.image,obj.price);
        }
      })
    }
    return {
      //GETING PRODUCT
      getProduct: (e) => {
        document.querySelector(".product-container").innerHTML= "";

        if(e.target.id =="all"){
          products.map((obj)=>{
            console.log(obj.name,obj.image,obj.price);
            return displayProduct(obj.name,obj.image,obj.price);
          })
        }

        if (e.target.id == 'cakes') {
          filterArray(e.target.id)
        }

        if (e.target.id == 'sweets') {
          filterArray(e.target.id)
        }

        if (e.target.id == 'cupcakes') {
          filterArray(e.target.id)
        }

        if (e.target.id == 'donuts') {
          filterArray(e.target.id)
        }
      }
    }
})();

var controller = ((UICtrl)=>{

  //HANDLING EVENTS
  const eventHandler = () => {
    document.getElementById("all").addEventListener("click", UICtrl.getProduct);
    document.getElementById("cakes").addEventListener("click", UICtrl.getProduct);
    document.getElementById("cupcakes").addEventListener("click", UICtrl.getProduct);
    document.getElementById("sweets").addEventListener("click", UICtrl.getProduct);
    document.getElementById("donuts").addEventListener("click", UICtrl.getProduct);
  }

  return{
    //INITIALIZATION FUNCTION
    init: () => {
      console.log("App started");
      eventHandler();
    }
  }
})(UIController);
controller.init();
