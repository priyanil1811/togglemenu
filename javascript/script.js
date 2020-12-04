//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? 
//Store the following into variables: job title, geographic location, annual salary, company name. 
//Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle = `web developer`
let locate = `Toronto`
let annualSalary = `12000`
let companyName = `Horizn`
let mothlysalary = annualSalary / 12
console.log(`You will be a ${jobTitle} in ${locate}, making $${mothlysalary} for ${companyName}.`)


//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. 
//Store their birth year in a variable. Calculate their age based on the stored values. 
//Output them to the console like so: "They are NN years old.", substituting the values.

let currentYear = 2020
let birthYear = 1988
let age = currentYear - birthYear
console.log(`They are ${age} years old.`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? 
//Wonder no more! Store your current age into a variable. Store a maximum age into a variable. 
//Store an estimated amount per day (as a number). 
//Calculate how many you would eat total for the rest of your life. Output the result to the console like so: 
//"You will need NN to last you until the ripe old age of X".

let currentAge = 30
let maximumAge = 90  
let amount = 5
let remainningAge = maximumAge - currentAge
let totalAmount = 365 * amount * remainningAge
console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maximumAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. 
//Store a radius into a variable. Calculate the circumference based on the radius, and output 
//"The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 5
let circumference = 2 * 3.14 * radius
console.log(`The circumference is ${circumference}`)
 

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. 
//Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. 
//Convert it to celsius and output "NN°F is NN°C."

let celsiusTemp = 20
let fahrenheitTemp = (celsiusTemp * 1.8) + 32
console.log(`${celsiusTemp}°C is ${fahrenheitTemp}°F`)

fahrenheitTemp = 50
celsiusTemp = (fahrenheitTemp - 32) / 1.8
console.log(`${fahrenheitTemp}°F is ${celsiusTemp}°C`)


function toggleMenu() {
   // document.getElementById("menu").classList.toggle('fa-window-close');

    document.querySelector("#menu").classList.toggle('fa-window-close');
    
    let menu = document.querySelector('.menubar')
    if (menu.style.display === "none") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
}
//make menu hidden