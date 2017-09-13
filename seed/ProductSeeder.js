var Product = require("../models/product");
var mongoose = require("mongoose");

mongoose.connect('localhost:27017/shopping');

var products = [ 
	new Product({
	imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
	title: "Gothic Video Game",
	description: "1",
	price: 50
}),
	new Product({
	imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
	title: "Gothic Video Game",
	description: "2",
	price: 60
}), 
		new Product({
	imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
	title: "Gothic Video Game",
	description: "3",
	price: 70
}), 
			new Product({
	imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
	title: "Gothic Video Game",
	description: "4",
	price: 80
}), 
				new Product({
	imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
	title: "Gothic Video Game",
	description: "5",
	price: 90
}), 
					new Product({
	imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
	title: "Gothic Video Game",
	description: "6",
	price: 100
}), 

];

var done = 0;

for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if (done === products.length){
			exit();
		}
	})
}

function exit(){
	mongoose.disconnect();
}


