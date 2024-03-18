
//*************************************************//

//**************** Chapter 5 ***********************//

//Question 1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.
document.write("<p style=font-size:30px>Output 1</p>")
let num1,num2;
    
    num1 = 6;

    num2 = 10;

let sum = num1 + num2;

console.log(sum);
document.write("<p style=font-size:30px;>The sum of "+ num1 +" and " +num2+ " is " +sum+ "</p>");
//*************************************************//

//Question 2. Repeat task1 for subtraction, multiplication, division & modulus.
document.write("<p style=font-size:30px>Output 2</p>")
    num1 = 10;
    num2 = 3;

let sub = num1 - num2;
console.log(sub);
document.write("<p style=font-size:30px;>The difference of "+ num1 +" and " +num2+ " is " +sub+ "</p>");
let mul = num1 * num2;
console.log(mul);
document.write("<p style=font-size:30px;>The product of "+ num1 +" and " +num2+ " is " +mul+ "</p>");
let div = num1 / num2;
console.log(div);
document.write("<p style=font-size:30px;>The division of "+ num1 +" and " +num2+ " is " +div+ "</p>");
let mod = num1 % num2;
console.log(mod);
document.write("<p style=font-size:30px;>The difference of "+ num1 +" and " +num2+ " is " +sub+ "</p>");

//Question 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

document.write("<p style=font-size:30px>Output 3</p>")

let  var1;
document.write("<p style=font-size:30px;>Value after variable declaration is: " +var1+ "</p>");

var1 = 5;
document.write("<p style=font-size:30px;>Initial value: " +var1+ "</p>");

var1++;

document.write("<p style=font-size:30px;>Value after increment is: " +var1+ "</p>");

var1 += 7;

document.write("<p style=font-size:30px;>Value after addition is: " +var1+ "</p>");

var1--;

document.write("<p style=font-size:30px;>Value after decrement is: " +var1+ "</p>");

var1 %= 3;

document.write("<p style=font-size:30px;>The remainder is : " +var1+ "</p>");

//*************************************************//

//Question 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable 
//& calculate the cost of buying 5 tickets to a movie. Example output:

document.write("<p style=font-size:30px>Output 4</p>")

let ticketPrice = 600;

let totalCost = ticketPrice * 5;

document.write("<p style=font-size:30px;>The total cost of buying 5 tickets to a movie is " +totalCost+ "</p>"); //three tarzan 😂

//*************************************************//

//Question 5. Write a script to display multiplication table of any number in your browser.

document.write("<p style=font-size:30px>Output 5</p><p style=font-size:30px>Table of 4</p>")

let i = 4
    document.write("<p style=font-size:30px;>" +i+ " x 1 = " +i*1+ "</p>");
    document.write("<p style=font-size:30px;>" +i+ " x 2 = " +i*2+ "</p>");
    document.write("<p style=font-size:30px;>" +i+ " x 3 = " +i*3+ "</p>");
    document.write("<p style=font-size:30px;>" +i+ " x 4 = " +i*4+ "</p>");
    document.write("<p style=font-size:30px;>" +i+ " x 5 = " +i*5+ "</p>");
    document.write("<p style=font-size:30px;>" +i+ " x 6 = " +i*6+ "</p>");
    document.write("<p style=font-size:30px;>" +i+ " x 7 = " +i*7+ "</p>");
    document.write("<p style=font-size:30px;>" +i+ " x 8 = " +i*8+ "</p>");
    document.write("<p style=font-size:30px;>" +i+ " x 9 = " +i*9+ "</p>");
    document.write("<p style=font-size:30px;>" +i+ " x 10 = " +i*10+ "</p>");

//*************************************************//

//Question 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

document.write("<p style=font-size:30px>Output 6</p>")

let tempCelsius = 30;

let fahrenheit = tempCelsius * (9/5) + 32;

document.write("<p style=font-size:30px>30<sup>o</sup> celsius is " +fahrenheit+"<sup>o</sup> fahrenheit</p>");

let tempFahrenheit = 100;

let celsius = (tempFahrenheit - 32) * (5/9);

document.write("<p style=font-size:30px>100<sup>o</sup> fahrenheit is " +celsius+ "<sup>o</sup> celsius</p>");

//*************************************************//

//Question 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2   
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write("<p style=font-size:30px>Output 7</p>")

let item1 = +prompt("Enter the price of 1st item: "); 

let item2 = +prompt("Enter the price of 2nd item: ");

let quantity1 = +prompt("Enter the quantity of 1st item: ");;

let quantity2 = +prompt("Enter the quantity of 2nd item: ");;

let shipping = 100;

let totalAmount = item1 * quantity1 + item2 * quantity2 + shipping;
document.write("<h1>Shopping Cart</h1>");
document.write("<p style=font-size:30px>"
+"The price of item 1 is "+item1+"<br>"
+"The quantity of item 1 is "+quantity1+"<br>"
+"The price of item 2 is "+item2+"<br>"
+"The quantity of item 2 is "+quantity2+"<br><br>"
+"The total cost of your order is " +totalAmount+ "</p>");

//*************************************************//

//Question 8. Store total marks & marks obtained by a student in 2  variables. Compute the percentage & show the result in your browser

document.write("<p style=font-size:30px>Output 8</p>")

let totalMarks = 980;

let marksObtained = 804;

let percentage = (marksObtained / totalMarks) * 100;
document.write("<h1>Marks Sheet</h1>");
document.write("<p style=font-size:30px>"
+"Total marks: "+totalMarks+"<br>"
+"Marks obtained: "+marksObtained+"<br>"
+"Percentage: "+percentage+"%</p>");

//*************************************************//

//Question 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<p style=font-size:30px>Output 9</p>")

let usd = 104.80;

let srd = 28;

let total = usd * 10 + srd * 25;

document.write("<h1>Currency in PKR</h1>");
document.write("<p style=font-size:30px>"
+"The total amount in Pakistani Rupees is " +total+ "</p>");

//*************************************************//

//Question 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

document.write("<p style=font-size:30px>Output 10</p>")

let num = 10;
console.log(num);
num += 5;
console.log(num)
num *= 10;
console.log(num)
num /= 2;
console.log(num)
document.write("<p style=font-size:30px>"
+"The result is " +num+ "</p>");

//*************************************************//

// Question 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write("<p style=font-size:30px>Output 11</p>")

let currentYear = new Date().getFullYear();

let birthYear = +prompt("Enter your birth year: ");

let age = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>");
document.write("<p style=font-size:30px>"
    +"Current year is "+currentYear+"<br>"
    +"Birth year is "+birthYear+"<br>"
    +"They are "+age+" years old</p>");

//*************************************************//

//Queation 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

document.write("<p style=font-size:30px>Output 12</p>")

let radius = +prompt("Enter the radius of the circle: ",20);
let circumference = 2 * Math.PI * radius;

let area = Math.PI * radius * radius;

document.write("<h1>Geometrizer</h1>");

document.write("<p style=font-size:30px>"
+"The radius of the circle is "+radius+"<br>"
+"The circumference of the circle is "+circumference+"<br>"
+"The area of the circle is "+area+"</p>");

//*************************************************//

//Question 13 The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<p style=font-size:30px>Output 13</p>")

let favoriteSnack = prompt("Enter your favorite snack: ");

let currentAge = new Date().getFullYear();

let maximumAge = +prompt("Enter your maximum age: ");

let estimatedAmountPerDay = +prompt("Enter the estimated amount per day: ");

let totalEaten = (maximumAge - currentAge) * estimatedAmountPerDay;

document.write("<h1>Lifetime Supply Calculator</h1>");

document.write("<p style=font-size:30px>"
+"Your favorite snack is "+favoriteSnack+"<br>"
+"Your current age is "+currentAge+"<br>"
+"Your maximum age is "+maximumAge+"<br>"); 



