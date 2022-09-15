// meal choices
const breakfast = document.querySelector('#meal1');
const lunch = document.querySelector('#meal2');
const dinner = document.querySelector('#meal3');
const dessert = document.querySelector('#meal4');

// cards for foods
const food1 = document.querySelector('#card1');
const food2 = document.querySelector('#card2');
const food3 = document.querySelector('#card3');
const food4 = document.querySelector('#card4');

const hoverFood1Breakfast = () => {
    food1.style.cssText = 'filter: brightness(50%); padding: 50px 0;'
    // document.styleSheets[0].insertRule('#food1::after { content: ""; opacity: 0.5; }', 0);
    food1.innerHTML = '<h2>$14.99</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Rice + Miso Soup + Salmon</p><button>Order Now</button>'
    console.log('works liek a charm')
}

const outFood1 = () => {
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

const outFood2 = () => {
    food2.style.removeProperty('filter');
    // console.log('works liek aasa charm')
    food2.innerHTML = ''
}

const chooseBreakfast = () => {
    breakfast.setAttribute("id", "selectedMeal");
    lunch.setAttribute("id", "");
    dinner.setAttribute("id", "");
    dessert.setAttribute("id", "");

    food1.style.cssText = 'background-image: url("./img/breakfast/b01.png"); background-repeat: no-repeat; background-position: center center; '
    food2.style.cssText = 'background-image: url("./img/breakfast/b02.png"); background-repeat: no-repeat; background-position: center center; '
    food3.style.cssText = 'background-image: url("./img/breakfast/b03.png"); background-repeat: no-repeat; background-position: center center; '
    food4.style.cssText = 'background-image: url("./img/breakfast/b04.png"); background-repeat: no-repeat; background-position: center center; '

    food1.addEventListener("mouseover", hoverFood1Breakfast);
    food1.addEventListener("mouseout", outFood1);

    food2.addEventListener("mouseover", hoverFood2Breakfast);
    food2.addEventListener("mouseout", outFood2);

}
const hoverFood1Lunch = () => {
    if (lunch.id == "selectedMeal") {
        food1.style.cssText = 'background-image: url("./img/lunch/l01.png"); background-repeat: no-repeat; background-position: center center; '
        food1.style.cssText = 'filter: brightness(50%); padding: 50px 0;'
        // document.styleSheets[0].insertRule('#food1::after { content: ""; opacity: 0.5; }', 0);
        food1.innerHTML = '<h2>$15.99</h2><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><p>Seafood gourmet</p><button>Order Now</button>'
        console.log('food 1 lunch')
    }

}


const chooseLunch = () => {
    lunch.setAttribute("id", "selectedMeal");
    breakfast.setAttribute("id", "");
    dinner.setAttribute("id", "");
    dessert.setAttribute("id", "");

    food1.style.cssText = 'background-image: url("./img/lunch/l01.png"); background-repeat: no-repeat; background-position: center center; '
    food2.style.cssText = 'background-image: url("./img/lunch/l02.png"); background-repeat: no-repeat; background-position: center center; '
    food3.style.cssText = 'background-image: url("./img/lunch/l03.png"); background-repeat: no-repeat; background-position: center center; '
    food4.style.cssText = 'background-image: url("./img/lunch/l04.png"); background-repeat: no-repeat; background-position: center center; '

    food1.addEventListener("mouseover", hoverFood1Lunch);
    food1.addEventListener("mouseout", outFood1);
}

const chooseDinner = () => {
    dinner.setAttribute("id", "selectedMeal");
    breakfast.setAttribute("id", "");
    lunch.setAttribute("id", "");
    dessert.setAttribute("id", "");


    food1.style.cssText = 'background-image: url("./img/dinner/d01.png"); background-repeat: no-repeat; background-position: center center; '
    food2.style.cssText = 'background-image: url("./img/dinner/d02.png"); background-repeat: no-repeat; background-position: center center; '
    food3.style.cssText = 'background-image: url("./img/dinner/d03.png"); background-repeat: no-repeat; background-position: center center; '
    food4.style.cssText = 'background-image: url("./img/dinner/d04.png"); background-repeat: no-repeat; background-position: center center; '
}
const chooseDessert = () => {
    dessert.setAttribute("id", "selectedMeal");
    breakfast.setAttribute("id", "");
    lunch.setAttribute("id", "");
    dinner.setAttribute("id", "");

    food1.style.cssText = 'background-image: url("./img/dessert/ds01.png"); background-repeat: no-repeat; background-position: center center; '
    food2.style.cssText = 'background-image: url("./img/dessert/ds02.png"); background-repeat: no-repeat; background-position: center center; '
    food3.style.cssText = 'background-image: url("./img/dessert/ds03.png"); background-repeat: no-repeat; background-position: center center; '
    food4.style.cssText = 'background-image: url("./img/dessert/ds04.png"); background-repeat: no-repeat; background-position: center center; '
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