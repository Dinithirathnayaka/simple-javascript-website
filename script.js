var menuItem = [
  "Potato Chips",
  "Pizza",
  "Ice Cream",
  "Chocolate Cake",
  "Pudin",
  "Pan Cake",
];
var priceList = ["Rs 200", "Rs 240", "Rs 300", "Rs 100", "Rs 150", "Rs 200"];
var content = [
  "You can now enjoy your favourite pizzas, pastas, appetizers & more from our newly opened Matugama outlet at No. 199, Polgahawaththa, Kalutara Road, Matugama. 🍕.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto.",
  "You can now enjoy your favourite pizzas, pastas, appetizers & more from our newly opened Matugama outlet at No. 199, Polgahawaththa, Kalutara Road, Matugama. 🍕.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto.",
  "You can now enjoy your favourite pizzas, pastas, appetizers & more from our newly opened Matugama outlet at No. 199, Polgahawaththa, Kalutara Road, Matugama. 🍕.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto.",
  "You can now enjoy your favourite pizzas, pastas, appetizers & more from our newly opened Matugama outlet at No. 199, Polgahawaththa, Kalutara Road, Matugama. 🍕.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto.",
  "You can now enjoy your favourite pizzas, pastas, appetizers & more from our newly opened Matugama outlet at No. 199, Polgahawaththa, Kalutara Road, Matugama. 🍕.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto.",
  "You can now enjoy your favourite pizzas, pastas, appetizers & more from our newly opened Matugama outlet at No. 199, Polgahawaththa, Kalutara Road, Matugama. 🍕.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, iusto.",
];

var dynamic = document.querySelector(".container");
var dynamicnew = document.querySelector(".tablecontainer");

for (var i = 0; i < menuItem.length; i++) {
  var fetch = document.querySelector(".container").innerHTML;
  dynamic.innerHTML =
    `
      <div class="row" >
     
      <div class="right-about-text mx-auto d-block">

        <div class="image"> 
        <img src='assets/images/${menuItem[i]}.jpg' class="img" id="cards${i}" alt="food-image" />
        </div>
    

        <div class="text">
        <h5 class=" text-center" id="">${menuItem[i]}</h5>
        <h4 id="pPrice1">${priceList[i]}</h4>
        <p>${content[i]}</p>
  
        <a href="#" class="btn" id="" onclick="myTable(${i})">Order Now</a>
        </div>
      
  
    </div>
    </div>
     ` + fetch;

  var img = document.getElementById(`cards${i}`);
  img.style.backgroundImage = `url('assets/images/${menuItem[i]}.jpg')`;
}

function myTable(index) {
  console.log(menuItem[index]);

  var fetch = document.querySelector(".tablecontainer").innerHTML;
  dynamicnew.innerHTML =
    `
      <div>
  
  
      <tr>
      <td>${menuItem[index]}</td>
      <td>${priceList[index]}</td>
      </tr>
      
     
    
      </div>
  
    ` + fetch;
}
