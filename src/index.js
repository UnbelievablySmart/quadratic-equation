module.exports = function solveEquation(equation) {
    const expression = equation.split(' '); 
    let a = +expression[0]; 
    let b = +expression[4]; 
    let c = +expression[8];

    if (expression[3] === '-') b = -b; 
    if (expression[7] === '-') c = -c;

    let D = Math.sqrt(Math.pow(b, 2) - 4 * a * c); 
    let x1 = (-b - D) / (2 * a); 
    let x2 = (-b + D) / (2 * a); 
    const results = [Math.round(x1), Math.round(x2)]; 

    return results.sort((a, b) => a - b);
}