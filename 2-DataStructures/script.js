'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //[weekdays[3]]: { //asi se accede a un atributo de un array
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDlivery: function ({
    //le pongo algo por defecto por si no trae nada
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    addres,
  }) {
    console.log(
      `Order receved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here s your declicius pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


//el set es para crear un array sin duplicados y no tiene indice
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Matias'));

console.log(ordersSet.size); //para saber el tamaño del set
//el has es para saber si existe un elemento en el set
console.log(ordersSet.has('Pizza')); //para saber si existe un elemento en el set
console.log(ordersSet.has('Bread'));//para saber si existe un elemento en el set


//example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; //el ... es para desestructurar el set y convertirlo en un array
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); //para saber el tamaño del set
/*
 /// Property NAMES
//el objet.keys es para devolver un array con los atributos del objeto, los atributos son los nombres de los dias
const propeties = Object.keys(openingHours);
let openStr = `We are open on ${propeties.length} days: `;
for(const day of Object.keys(openingHours)){
  openStr += `${day}, `;
}
console.log(openStr);

//property VALUES

//esto es para devolver un array con los valores de los atributos del objeto
const values = Object.values(openingHours);
console.log(values);

//entire object
//el entries es para devolver un array con los atributos y los valores del objeto
const entries = Object.entries(openingHours);
console.log(entries);


//el primero es la clave y el segundo es el valor y lo puedo desestructurar
for(const [key, {open,close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
//el ? es para preguntar si existe el atributo, el ? evalua hasta mon y si no existe no sigue
console.log(restaurant.openingHours.mon?.open); //si el atributo no existe me devulve undefined
console.log(restaurant.openingHours?.mon?.open); //si el atributo no existe me devulve undefined

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  //console.log(day);
  //el [day] lo pongo asi para que me devulva el valor que tenga el mismo nombre del atributo
  const open = restaurant.openingHours[day]?.open ?? 'closed'; //si no existe el atributo me devulve closed, le pongo ?? para que me devulva closed si es undefined
  console.log(`On ${day}, we open at ${open}`);
}
*/
/*
//////////////for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //uniendo 2 arr en 1

//el for of es para iterar sobre los elementos de un array, de doy una variable y luego el nombre del array para recorrerlo
for(const item of menu) console.log(item);


//el entries es para ver el indice y el valor
for(const item of menu.entries()){
  console.log(item);
}
 //el [i, el] es para desestructurar el array, el i es el indice y el el es el valor
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
/*
const rest1 = {
  name: 'rosi',
  numGuest: 56,
};
const rest2 = {
  name: 'la fea',
  owner: 'matias',
};

rest1.numGuest = rest1.numGuest || 10;
//si no existe el atributo me devulve 10, ademas le estoy poniendo numGuest al objeto rest2
rest2.numGuest = rest2.numGuest || 10;
*/
/*
//////////The Nullish Coalescing Operator (??)

//restaurant.numGuest estaria indefinido y le asigno 0 para que no me de error
restaurant.numGuest = 0;
//si no existe el atributo me devulve 10
const guest = restaurant.numGuest || 10;
console.log(guests1);

const guestCorrect = restaurant.numGuest ?? 10; //si es indefinido o null me devulve el 10 pero si no es null me devulve un valor definicdo, ya que al poner ?? 
*/
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
//estoy haciendo una copia del arr
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
