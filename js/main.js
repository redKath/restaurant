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
const food4 = document.querySelector('#card4');

const hoverFood1Breakfast = () => {
    food1.style.cssText = 'filter: brightness(50%); padding: 50px 0;'
    // document.styleSheets[0].insertRule('#food1::after { content: ""; opacity: 0.5; }', 0);
    food1.innerHTML = '<section><h2>$14.99</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Rice + Miso Soup + Salmon</p><button>Order Now</button></section>'
    console.log('works liek a charm')
}

const outFood1Breakfast = () => {
    food1.style.cssText = 'background-image: url("./img/breakfast/b01.png"); background-repeat: no-repeat; background-position: center center; '
    food1.style.removeProperty('filter');
    console.log('works liek aasa charm')
    food1.innerHTML = ''

}

const hoverFood2Breakfast = () => {
    food2.style.cssText = 'filter: brightness(50%); padding: 50px 0;'
    // document.styleSheets[0].insertRule('#food1::after { content: ""; opacity: 0.5; }', 0);
    food2.innerHTML = '<h2>$16.99</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Rice + Miso Soup & Tofu + Fish</p><button>Order Now</button>'
    console.log('food 2 breakfast')
}
const outFood2Breakfast = () => {
    food2.style.removeProperty('filter');
    console.log('works liek aasa charm')
    food2.innerHTML = ''
    food2.style.cssText = 'background-image: url("./img/breakfast/b02.png"); background-repeat: no-repeat; background-position: center center; '
}

const outFood1Lunch = () => {
    food12.style.cssText = 'background-image: url("./img/lunch/l01.png"); background-repeat: no-repeat; background-position: center center; '
    food12.style.removeProperty('filter');
    console.log('works liek aasa charm')
    food12.innerHTML = ''

}


const chooseBreakfast = () => {
    breakfast.setAttribute("id", "selectedMeal");
    lunch.setAttribute("id", "");
    dinner.setAttribute("id", "");
    dessert.setAttribute("id", "");


    // food1.style.cssText = 'background-color: rgba(76, 175, 80, 0.3); background-image: url("./img/breakfast/b01.png") !important;'
    // food2.style.cssText = 'background-image: url("./img/breakfast/b02.png"); background-repeat: no-repeat; background-position: center center; '
    // food3.style.cssText = 'background-image: url("./img/breakfast/b03.png"); background-repeat: no-repeat; background-position: center center; '
    // food4.style.cssText = 'background-image: url("./img/breakfast/b04.png"); background-repeat: no-repeat; background-position: center center; '
    food1.classList.remove("hidden")
    food12.classList.add("hidden")
    food13.classList.add("hidden")
    food14.classList.add("hidden")

    food2.classList.remove("hidden")
    food22.classList.add("hidden")
    food23.classList.add("hidden")
    food24.classList.add("hidden")

    food1.addEventListener("mouseover", hoverFood1Breakfast);
    food1.addEventListener("mouseout", outFood1Breakfast);

    food2.addEventListener("mouseover", hoverFood2Breakfast);
    food2.addEventListener("mouseout", outFood2Breakfast);

}
const hoverFood1Lunch = () => {
    // food12.style.cssText = 'filter: brightness(50%); padding: 50px 0;'
    food12.style.cssText = 'background-image: url("./img/lunch/l01.png"); background-repeat: no-repeat; background-position: center center; '
    food12.style.cssText = 'filter: brightness(50%); padding: 50px 0;color:white;'
    // document.styleSheets[0].insertRule('#food1::after { content: ""; opacity: 0.5; }', 0);
    food12.innerHTML = '<h2>$15.99</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Seafood gourmet</p><button>Order Now</button>'
    console.log('food 1 lunch')


}


const chooseLunch = () => {
    lunch.setAttribute("id", "selectedMeal");
    breakfast.setAttribute("id", "");
    dinner.setAttribute("id", "");
    dessert.setAttribute("id", "");

    food12.addEventListener("mouseover", hoverFood1Lunch);
    food12.addEventListener("mouseout", outFood1Lunch);

    // food22.addEventListener("mouseover", hoverFood1Lunch);
    // food22.addEventListener("mouseout", outFood1Lunch);

    food12.classList.remove("hidden")
    food1.classList.add("hidden")
    food13.classList.add("hidden")
    food14.classList.add("hidden")

    food22.classList.remove("hidden")
    food2.classList.add("hidden")
    food23.classList.add("hidden")
    food24.classList.add("hidden")
}

const chooseDinner = () => {
    dinner.setAttribute("id", "selectedMeal");
    breakfast.setAttribute("id", "");
    lunch.setAttribute("id", "");
    dessert.setAttribute("id", "");


    // food1.style.cssText = 'background-image: url("./img/dinner/d01.png"); background-repeat: no-repeat; background-position: center center; '
    // food2.style.cssText = 'background-image: url("./img/dinner/d02.png"); background-repeat: no-repeat; background-position: center center; '
    // food3.style.cssText = 'background-image: url("./img/dinner/d03.png"); background-repeat: no-repeat; background-position: center center; '
    // food4.style.cssText = 'background-image: url("./img/dinner/d04.png"); background-repeat: no-repeat; background-position: center center; '

    food13.classList.remove("hidden")
    food12.classList.add("hidden")
    food1.classList.add("hidden")
    food14.classList.add("hidden")

    food23.classList.remove("hidden")
    food2.classList.add("hidden")
    food22.classList.add("hidden")
    food24.classList.add("hidden")
}
const chooseDessert = () => {
    dessert.setAttribute("id", "selectedMeal");
    breakfast.setAttribute("id", "");
    lunch.setAttribute("id", "");
    dinner.setAttribute("id", "");

    // food1.style.cssText = 'background-image: url("./img/dessert/ds01.png"); background-repeat: no-repeat; background-position: center center; '
    // food2.style.cssText = 'background-image: url("./img/dessert/ds02.png"); background-repeat: no-repeat; background-position: center center; '
    // food3.style.cssText = 'background-image: url("./img/dessert/ds03.png"); background-repeat: no-repeat; background-position: center center; '
    // food4.style.cssText = 'background-image: url("./img/dessert/ds04.png"); background-repeat: no-repeat; background-position: center center; '

    food14.classList.remove("hidden")
    food12.classList.add("hidden")
    food1.classList.add("hidden")
    food13.classList.add("hidden")

    food24.classList.remove("hidden")
    food2.classList.add("hidden")
    food22.classList.add("hidden")
    food23.classList.add("hidden")
}
// const meals = [breakfast, lunch, dinner, dessert];
// meals.forEach(meal => meal.addEventListener('click', chooseBreakfast));

breakfast.addEventListener('click', chooseBreakfast);
lunch.addEventListener('click', chooseLunch);
dinner.addEventListener('click', chooseDinner);
dessert.addEventListener('click', chooseDessert)

// on hover eventlisteners



if (breakfast.id == 'selectedMeal') {



}