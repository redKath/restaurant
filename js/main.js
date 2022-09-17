// meal choices
const breakfast = document.querySelector('#meal1');
const lunch = document.querySelector('#meal2');
const dinner = document.querySelector('#meal3');
const dessert = document.querySelector('#meal4');

// cards for foods
const food1 = document.querySelector('#card1');
const food12 = document.querySelector('#card12');
const food13 = document.querySelector('#card13');
const food14 = document.querySelector('#card14');

const food2 = document.querySelector('#card2');
const food22 = document.querySelector('#card22');
const food23 = document.querySelector('#card23');
const food24 = document.querySelector('#card24');

const food3 = document.querySelector('#card3');
const food32 = document.querySelector('#card32');
const food33 = document.querySelector('#card33');
const food34 = document.querySelector('#card34');

const food4 = document.querySelector('#card4');
const food42 = document.querySelector('#card42');
const food43 = document.querySelector('#card43');
const food44 = document.querySelector('#card44');


//**************************************************** 
//*************BREAKFAST MENU CARDS*******************
//****************************************************
const hoverFood1Breakfast = () => {
    food1.style.cssText = 'background-image: url("./img/breakfast/b01x.png"); padding: 50px 0; color:white'
    // document.styleSheets[0].insertRule('#food1::after { content: ""; opacity: 0.5; }', 0);
    food1.innerHTML = '<section><h2>$14.99</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Rice + Miso Soup + Salmon</p><button>Order Now</button></section>'
    console.log('works liek a charm')
}

const outFood1Breakfast = () => {
    food1.style.cssText = 'background-image: url("./img/breakfast/b01.png"); background-repeat: no-repeat; background-position: center center; '
    console.log('works liek aasa charm')
    food1.innerHTML = ''

}

const hoverFood2Breakfast = () => {
    food2.style.cssText = 'background-image: url("./img/breakfast/b02x.png"); padding: 50px 0; color:white'
    // document.styleSheets[0].insertRule('#food1::after { content: ""; opacity: 0.5; }', 0);
    food2.innerHTML = '<h2>$16.99</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Rice + Miso Soup & Tofu + Fish</p><button>Order Now</button>'
    console.log('food 2 breakfast')
}
const outFood2Breakfast = () => {
    console.log('works liek aasa charm')
    food2.innerHTML = ''
    food2.style.cssText = 'background-image: url("./img/breakfast/b02.png"); background-repeat: no-repeat; background-position: center center; '
}

const hoverFood3Breakfast = () => {
    food3.style.cssText = 'background-image: url("./img/breakfast/b03x.png");padding: 50px 0; color:white'
    // document.styleSheets[0].insertRule('#food1::after { content: ""; opacity: 0.5; }', 0);
    food3.innerHTML = '<section><h2>$12.99</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Rice + Miso Soup + Egg and Fish</p><button>Order Now</button></section>'
    console.log('works liek a charm')
}

const outFood3Breakfast = () => {
    food3.style.cssText = 'background-image: url("./img/breakfast/b03.png"); background-repeat: no-repeat; background-position: center center; '
    console.log('works liek aasa charm')
    food3.innerHTML = ''

}

const hoverFood4Breakfast = () => {
    food4.style.cssText = 'background-image: url("./img/breakfast/b04x.png"); padding: 50px 0; color:white'
    // document.styleSheets[0].insertRule('#food1::after { content: ""; opacity: 0.5; }', 0);
    food4.innerHTML = '<section><h2>$11.99</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Rice + egg + Grilled Salmon</p><button>Order Now</button></section>'
    console.log('works liek a charm')
}

const outFood4Breakfast = () => {
    food4.style.cssText = 'background-image: url("./img/breakfast/b04.png"); background-repeat: no-repeat; background-position: center center; '
    console.log('works liek aasa charm')
    food4.innerHTML = ''

}


const chooseBreakfast = () => {
    breakfast.setAttribute("id", "selectedMeal");
    lunch.setAttribute("id", "");
    dinner.setAttribute("id", "");
    dessert.setAttribute("id", "");

    food1.classList.remove("hidden")
    food12.classList.add("hidden")
    food13.classList.add("hidden")
    food14.classList.add("hidden")

    food2.classList.remove("hidden")
    food22.classList.add("hidden")
    food23.classList.add("hidden")
    food24.classList.add("hidden")

    food3.classList.remove("hidden")
    food32.classList.add("hidden")
    food33.classList.add("hidden")
    food34.classList.add("hidden")

    food4.classList.remove("hidden")
    food42.classList.add("hidden")
    food43.classList.add("hidden")
    food44.classList.add("hidden")

    food1.addEventListener("mouseover", hoverFood1Breakfast);
    food1.addEventListener("mouseout", outFood1Breakfast);

    food2.addEventListener("mouseover", hoverFood2Breakfast);
    food2.addEventListener("mouseout", outFood2Breakfast);

    food3.addEventListener("mouseover", hoverFood3Breakfast);
    food3.addEventListener("mouseout", outFood3Breakfast);

    food4.addEventListener("mouseover", hoverFood4Breakfast);
    food4.addEventListener("mouseout", outFood4Breakfast);

}

//**************************************************** 
//*************LUNCH MENU CARDS*******************
//****************************************************

const hoverFood1Lunch = () => {
    food12.style.cssText = 'background-image: url("./img/lunch/l01x.png"); padding: 50px 0; color:white'
    food12.innerHTML = '<h2>$15.99</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Seafood gourmet</p><button>Order Now</button>'
    console.log('food 1 lunch')

}

const outFood1Lunch = () => {
    food12.style.cssText = 'background-image: url("./img/lunch/l01.png"); background-repeat: no-repeat; background-position: center center; '
    food12.innerHTML = ''

}

const hoverFood2Lunch = () => {
    food22.style.cssText = 'background-image: url("./img/lunch/l02x.png"); padding: 50px 0; color:white'
    food22.innerHTML = '<h2>$13.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Healthy lunch with veggies</p><button>Order Now</button>'
    console.log('food 2lunch')
}



const outFood2Lunch = () => {
    food22.style.cssText = 'background-image: url("./img/lunch/l02.png"); background-repeat: no-repeat; background-position: center center; '
    food22.innerHTML = ''

}

const hoverFood3Lunch = () => {
    food32.style.cssText = 'background-image: url("./img/lunch/l03x.png"); padding: 50px 0; color:white'
    food32.innerHTML = '<h2>$11.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Japanese Sushi</p><button>Order Now</button>'
    console.log('food 2lunch')
}

const outFood3Lunch = () => {
    food32.style.cssText = 'background-image: url("./img/lunch/l03.png"); background-repeat: no-repeat; background-position: center center; '
    food32.innerHTML = ''

}

const hoverFood4Lunch = () => {
    food42.style.cssText = 'background-image: url("./img/lunch/l04x.png"); padding: 50px 0; color:white'
    food42.innerHTML = '<h2>$10.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Rice + fruits + sushi</p><button>Order Now</button>'
    console.log('food 2lunch')
}

const outFood4Lunch = () => {
    food42.style.cssText = 'background-image: url("./img/lunch/l04.png"); background-repeat: no-repeat; background-position: center center; '
    food42.innerHTML = ''

}

const chooseLunch = () => {
    lunch.setAttribute("id", "selectedMeal");
    breakfast.setAttribute("id", "");
    dinner.setAttribute("id", "");
    dessert.setAttribute("id", "");

    food12.addEventListener("mouseover", hoverFood1Lunch);
    food12.addEventListener("mouseout", outFood1Lunch);

    food22.addEventListener("mouseover", hoverFood2Lunch);
    food22.addEventListener("mouseout", outFood2Lunch);

    food32.addEventListener("mouseover", hoverFood3Lunch);
    food32.addEventListener("mouseout", outFood3Lunch);

    food42.addEventListener("mouseover", hoverFood4Lunch);
    food42.addEventListener("mouseout", outFood4Lunch);

    food12.classList.remove("hidden")
    food1.classList.add("hidden")
    food13.classList.add("hidden")
    food14.classList.add("hidden")

    food22.classList.remove("hidden")
    food2.classList.add("hidden")
    food23.classList.add("hidden")
    food24.classList.add("hidden")

    food32.classList.remove("hidden")
    food3.classList.add("hidden")
    food33.classList.add("hidden")
    food34.classList.add("hidden")

    food42.classList.remove("hidden")
    food4.classList.add("hidden")
    food43.classList.add("hidden")
    food44.classList.add("hidden")

}
//**************************************************** 
//*************DINNER MENU CARDS*******************
//****************************************************
const hoverFood1Dinner = () => {
    food13.style.cssText = 'background-image: url("./img/dinner/d01x.png"); padding: 50px 0; color:white'
    food13.innerHTML = '<h2>$10.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Healthy lunch with veggies</p><button>Order Now</button>'
    console.log('food 2lunch')
}

const outFood1Dinner = () => {
    food13.style.cssText = 'background-image: url("./img/dinner/d01.png"); background-repeat: no-repeat; background-position: center center; '
    food13.innerHTML = ''

}

const hoverFood2Dinner = () => {
    food23.style.cssText = 'background-image: url("./img/dinner/d02x.png"); padding: 50px 0; color:white'
    food23.innerHTML = '<h2>$10.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Healthy lunch with veggies</p><button>Order Now</button>'
    console.log('food 2lunch')
}

const outFood2Dinner = () => {
    food23.style.cssText = 'background-image: url("./img/dinner/d02.png"); background-repeat: no-repeat; background-position: center center; '
    food23.innerHTML = ''

}

const hoverFood3Dinner = () => {
    food33.style.cssText = 'background-image: url("./img/dinner/d03x.png"); padding: 50px 0; color:white'
    food33.innerHTML = '<h2>$10.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Healthy lunch with veggies</p><button>Order Now</button>'
    console.log('food 2lunch')
}

const outFood3Dinner = () => {
    food33.style.cssText = 'background-image: url("./img/dinner/d03.png"); background-repeat: no-repeat; background-position: center center; '
    food33.innerHTML = ''

}

const hoverFood4Dinner = () => {
    food43.style.cssText = 'background-image: url("./img/dinner/d04x.png"); padding: 50px 0; color:white'
    food43.innerHTML = '<h2>$10.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Healthy lunch with veggies</p><button>Order Now</button>'
    console.log('food 2lunch')
}

const outFood4Dinner = () => {
    food43.style.cssText = 'background-image: url("./img/dinner/d04.png"); background-repeat: no-repeat; background-position: center center; '
    food43.innerHTML = ''

}
const chooseDinner = () => {
    dinner.setAttribute("id", "selectedMeal");
    breakfast.setAttribute("id", "");
    lunch.setAttribute("id", "");
    dessert.setAttribute("id", "");

    food13.classList.remove("hidden")
    food12.classList.add("hidden")
    food1.classList.add("hidden")
    food14.classList.add("hidden")

    food23.classList.remove("hidden")
    food2.classList.add("hidden")
    food22.classList.add("hidden")
    food24.classList.add("hidden")

    food33.classList.remove("hidden")
    food3.classList.add("hidden")
    food32.classList.add("hidden")
    food34.classList.add("hidden")

    food43.classList.remove("hidden")
    food4.classList.add("hidden")
    food42.classList.add("hidden")
    food44.classList.add("hidden")

    food13.addEventListener("mouseover", hoverFood1Dinner);
    food13.addEventListener("mouseout", outFood1Dinner);

    food23.addEventListener("mouseover", hoverFood2Dinner);
    food23.addEventListener("mouseout", outFood2Dinner);

    food33.addEventListener("mouseover", hoverFood3Dinner);
    food33.addEventListener("mouseout", outFood3Dinner);

    food43.addEventListener("mouseover", hoverFood4Dinner);
    food43.addEventListener("mouseout", outFood4Dinner);
}

//**************************************************** 
//*************DESSERT MENU CARDS*******************
//****************************************************

const hoverFood1Dessert = () => {
    food14.style.cssText = 'background-image: url("./img/dessert/ds01x.png"); padding: 50px 0; color:white'
    food14.innerHTML = '<h2>$10.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Healthy lunch with veggies</p><button>Order Now</button>'
    console.log('food 2lunch')
}

const outFood1Dessert = () => {
    food14.style.cssText = 'background-image: url("./img/dessert/ds01.png"); background-repeat: no-repeat; background-position: center center; '
    food14.innerHTML = ''

}

const hoverFood2Dessert = () => {
    food24.style.cssText = 'background-image: url("./img/dessert/ds02x.png"); padding: 50px 0; color:white'
    food24.innerHTML = '<h2>$10.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Healthy lunch with veggies</p><button>Order Now</button>'
    console.log('food 2lunch')
}

const outFood2Dessert = () => {
    food24.style.cssText = 'background-image: url("./img/dessert/ds02.png"); background-repeat: no-repeat; background-position: center center; '
    food24.innerHTML = ''

}


const hoverFood3Dessert = () => {
    food34.style.cssText = 'background-image: url("./img/dessert/ds03x.png"); padding: 50px 0; color:white'
    food34.innerHTML = '<h2>$10.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Healthy lunch with veggies</p><button>Order Now</button>'
    console.log('food 2lunch')
}

const outFood3Dessert = () => {
    food34.style.cssText = 'background-image: url("./img/dessert/ds03.png"); background-repeat: no-repeat; background-position: center center; '
    food34.innerHTML = ''

}



const hoverFood4Dessert = () => {
    food44.style.cssText = 'background-image: url("./img/dessert/ds04x.png"); padding: 50px 0; color:white'
    food44.innerHTML = '<h2>$10.89</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Healthy lunch with veggies</p><button>Order Now</button>'
    console.log('food 2lunch')
}

const outFood4Dessert = () => {
    food44.style.cssText = 'background-image: url("./img/dessert/ds04.png"); background-repeat: no-repeat; background-position: center center; '
    food44.innerHTML = ''

}


const chooseDessert = () => {
    dessert.setAttribute("id", "selectedMeal");
    breakfast.setAttribute("id", "");
    lunch.setAttribute("id", "");
    dinner.setAttribute("id", "");

    food14.classList.remove("hidden")
    food12.classList.add("hidden")
    food1.classList.add("hidden")
    food13.classList.add("hidden")

    food24.classList.remove("hidden")
    food2.classList.add("hidden")
    food22.classList.add("hidden")
    food23.classList.add("hidden")

    food34.classList.remove("hidden")
    food3.classList.add("hidden")
    food32.classList.add("hidden")
    food33.classList.add("hidden")

    food44.classList.remove("hidden")
    food4.classList.add("hidden")
    food42.classList.add("hidden")
    food43.classList.add("hidden")

    food14.addEventListener("mouseover", hoverFood1Dessert);
    food14.addEventListener("mouseout", outFood1Dessert);

    food24.addEventListener("mouseover", hoverFood2Dessert);
    food24.addEventListener("mouseout", outFood2Dessert);

    food34.addEventListener("mouseover", hoverFood3Dessert);
    food34.addEventListener("mouseout", outFood3Dessert);

    food44.addEventListener("mouseover", hoverFood4Dessert);
    food44.addEventListener("mouseout", outFood4Dessert);
}


breakfast.addEventListener('click', chooseBreakfast);
lunch.addEventListener('click', chooseLunch);
dinner.addEventListener('click', chooseDinner);
dessert.addEventListener('click', chooseDessert)
