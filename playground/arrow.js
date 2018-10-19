var square = x => x*x;
console.log(`square: ${square(9)}`);

var add = function(...args) {
  var sum = 0;
  args.forEach(number => sum += number);  
  return sum;
} // End of var add = function()

console.log(`sum: ${add(2,2,3)}`);

var user = {
  name: 'jerome',
  greet: function() {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  greet_arrow: () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  greet_alt() {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
}

//user.greet(1, 2, 3);
//user.greet_arrow(1, 2, 3);
//user.greet_alt(1, 2, 3);