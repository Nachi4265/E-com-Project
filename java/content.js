fetch("/Json/products.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector(".product");
	let out = "";
	for(let product of products){
		out += `

		<div class = "columns">
		<div class="product-box">

		<div class="product-item">
		<video  id ="video" src="${product.video}" muted autoplay preload loop></video>
        </div>

	



		<div class="product-content">

			<div class="product-name">
				<h1>${product.name}</h1>
			</div>

			<div class="product-description">
				<p>${product.description}</p>
            </div>

			<div class="product-price">
				<p>${product.price}</p>	
			</div>

			<div class= "button">${product.button}</div>
            
            </div>
			
			</div>
			<div>`;





}
	placeholder.innerHTML = out;
});