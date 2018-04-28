
var showSum = document.querySelector('.sum');
var btn = document.querySelector('.btn-order');
btn.addEventListener('click', updateOrder);

  var productsArray = {
  	'cake' : 4,
  	'croisant' : 0.5, 
  	'bizcocho': 1,
  	'cherry_pie' : 5.6,  
  	'pecan_pie' : 6.4
  }

  function updateOrder() {
  	var sum = 0;
  	for(product_id in productsArray) {
  		var product_price = productsArray[ product_id ];
  		var product_quantity = document.getElementById( product_id ).value;
  		sum += product_price * product_quantity;
   
  	}

  	showSum.innerHTML = sum;
  }