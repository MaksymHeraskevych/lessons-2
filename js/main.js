var radioSwitch = document.getElementsByClassName('radio1');
var figure = document.getElementsByClassName('square');


radioSwitch[0].onclick = function () {
	figure[0].classList.add('area');
};

radioSwitch[1].onclick = function () {
	figure[0].classList.remove('area');
};

// 2 - Не получилось

 myNumber.onchange = function() {
    square.style.width = this.value +"px";
  };