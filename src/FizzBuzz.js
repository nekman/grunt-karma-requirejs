define({

  run: function(number) {
    for (var i = 1; i <= number; i++) {
      console.log(this.print(i)); 
    } 
  },

  print: function(i) {
    if (i % 3 === 0 && i % 5 === 0) {
      return 'FizzBuzz';
    } else if (i % 3 === 0) {
      return 'Fizz';       
    } else if (i % 5 === 0) {
      return 'Buzz';
    } 

    return i;
  }
});