// lower case
let personName: string ="Abdul"
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:",personName.toUpperCase());

// Title case
console.log("Titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));