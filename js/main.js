
var radioSwitch = document.getElementsByClassName('radio1');
var figure = document.getElementsByClassName('square');
var enter1 = document.getElementsByClassName('myNumber1');
var enter2 = document.getElementsByClassName('myNumber2');



radioSwitch[0].onclick = function () {
	figure[0].classList.remove('area');
};

radioSwitch[1].onclick = function () {
	figure[0].classList.add('area');
};

radioSwitch[2].onclick = function () {
	figure[0].classList.remove('area');
};

radioSwitch[3].onclick = function () {
	figure[0].classList.add('area');
};


enter1[0].onchange = function() {
    figure[0].style.width = this.value +"px";
    figure[0].style.height = this.value +"px";
  };

enter1[1].onchange = function() {
    figure[0].style.width = this.value +"px";
    figure[0].style.height = this.value +"px";
  };

enter2[0].onchange = function() {
    figure[0].style.width = this.value +"px";
  };

enter2[1].onchange = function() {
    figure[0].style.width = this.value +"px";
  };


  // Hamburger


const sizes = [{
   	name: 'small',
   	price: 50,
   	calories: 20
   },
   {
   	name: 'big',
   	price: 100,
   	calories: 40
}];

const stuffings = [{
   	name: 'cheese',
   	price: 10,
   	calories: 20
   },
   {
   	name: 'salad',
   	price: 20,
   	calories: 5
   },
   {
   	name: 'potato',
   	price: 15,
   	calories: 10
}];

const toppings = [{
   	name: 'flavoring',
   	price: 15,
   	calories: 0
   },
   {
   	name: 'mayonnaise',
   	price: 20,
   	calories: 5
}];

var Hamburger = function() {
	this.size = sizes[0];
	this.stuffings = [];
	this.toppings = [];
	this.price = 0;
};

Hamburger.prototype.setsize = function(size) {
	this.size = size;
};

Hamburger.prototype.addStuffing = function(stuffing) {
	for (let i = 0; i < this.stuffings.length; i++) {
		if (stuffing.name === this.stuffings[i].name) {
			console.log('there is already such a filling');
			return;
		}
	}
};

Hamburger.prototype.addTopping = function(topping) {
	for (let t = 0; t < this.toppings.length; t++) {
		if (topping.name === this.toppings.length[t].name) {
			console.log('such seasoning is already there');
			return;
		}
	}
};

Hamburger.prototype.calculatePrice = function(price) {
	this.price = this.size.price;
	for (let i = 0; i < this.stuffings.length; i++) {
		this.price += this.stuffings[i].price;
	}
	return this.price;
};

Hamburger.prototype.calculateCalories = function(price) {
	this.price = this.size.price;
	for (let t = 0; t < this.toppings.length; t++) {
		this.price += this.toppings[t].price;
	}
	return this.price;
};

Hamburger.prototype.getSize = function() {
  return this.size;
}

Hamburger.prototype.getStuffings = function() {
  return this.stuffings;
}

Hamburger.prototype.getToppings = function() {
  return this.toppings;
}

Hamburger.prototype.getHamburgerData = function(callback) {
  const data = {
    size: this.getSize(),
    stuffings: this.getStuffings(),
    toppings: this.getToppings(),
    price: this.calculatePrice() + this.calculateCalories()
  }
  callback(data);
}

;