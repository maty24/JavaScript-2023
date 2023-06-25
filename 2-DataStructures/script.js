'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
    order:function(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDlivery: function({ //le pongo algo por defecto por si no trae nada 
      starterIndex = 1,
      mainIndex = 0,
      time = '20:00',
      addres,
    }){
      console.log(
        `Order receved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`
      );
    },
    orderPasta: function(ing1, ing2, ing3){
      console.log(`Here s your declicius pasta with ${ing1}, ${ing2}, ${ing3}`);
    }
};



/////////////////////////////////////////////////////////
/*
//shot circuting (&& and ||)
console.log('--------------OR-----------------');
console.log(3 || 'Matias'); //si el primero es verdadero lo demas lo ingonara
console.log(undefined || 0 || '' || 'hello'|| 23 || null); //el primer valor verdadero es hello y el resto que o suige lo ignora

const guests1 = restaurant.numGuest ?
 restaurant.numGuest : 10;
 console.log(guests1);

const guests2 = restaurant.numGuests || 10; //como la primera es flase me devulve el 10
console.log(guests2);

console.log('--------------AND-----------------');
console.log(0 && 'Matias'); //si el primero es falso deja de evaluar los demas
console.log(7 && 'Matias'); //como las 2 son verdaderos me retorna el ultimo valor
console.log('hello' && 23 && null && 'matias'); //si hay un falso toda la opereacion es falsa
*/

///////////////////////////////////////////////////
/*
//rest pattern and parametars
const arr = [7,8,9];
const newArr = [1,2,...arr]; //me incluye todos los atributos que tiene el otro arr y me los incluye

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //me traigo todos atributos de mainmenu y le incluyo a mi nuevo arr
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //uniendo 2 arr en 1
console.log(menu);


const ingredients = [
  prompt("Let's makepasta! Ingresient 1 ?"),
  prompt("Ingredietn 2"),
  prompt('ingredint 3')
]
 
console.log(ingredients);
restaurant.orderPasta(...ingredients)//meto todo lso ingredientes de una


const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}; //meto mas atributos y luego el operador ... para incyut toda los atributos del restaurant
console.log(newRestaurant);
*/

//////////////////////////////////////////////////////////
/*
//Destructuring Objet
restaurant.orderDlivery({
  time: '22:00',
  addres: 'garcia hurtado',
  mainIndex: 2,
  starterIndex: 2
})
restaurant.orderDlivery({
  addres:'Via los ctm',
  starterIndex: 1
})

const { name,openingHours,categories } = restaurant; //deben ser los exactamente los mismos nombres 
console.log(name,openingHours,categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant //estoy cambiando el nombre de los objetos

const {
  fri: {open: o, close: c}
} = openingHours; //desestructuro el objeto y solo me muestra los valores
console.log(o, c);
*/

////////////////////////////////////////////////////////////////////////
/*
//Desestrucring arrays
const [first, second] = restaurant.categories; //estoy obteneiendo solo 2 del arreglo
let [main,,secondary] = restaurant.categories; //me salto una pocision del arr
console.log(first, second);

[main, secondary] = [secondary, main]; //estoy sobreescribiendo los datos
console.log(main, secondary);

const [starter, mainCount]= restaurant.order(0,2); //para que no me devulva un arr
console.log(starter,mainCount); 

//Nested destructuring
const nested = [2,3,[4,5]];
const [i,,[k,l]] = nested; //es como una desestructuraciion
console.log(i,k,l);
*/