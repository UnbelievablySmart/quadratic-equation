module.exports = function solveEquation(equation) {
var array=equation.split(' '); 
var a=+array[0]; 
var b=+array[4]; 
var c=+array[8]; 
if(array[3]=='-') b=-b; 
if(array[7]=='-') c=-c; 
var D = Math.sqrt(Math.pow(b,2) - 4 * a * c); 
var x1 = (-b - D) / (2 * a); 
var x2 = (-b + D) / (2 * a); 
var arr = [Math.round(x1), Math.round(x2)]; 
return arr.sort(function(a,b) { 
return a - b; 
});
}