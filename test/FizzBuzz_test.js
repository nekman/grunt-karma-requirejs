define(function(require) {

  var FizzBuzz = require('src/FizzBuzz');

  describe('FizzBuzz', function() {

    it('should be defined', function() {
      expect(FizzBuzz).toBeDefined();
      expect(typeof FizzBuzz === 'object').toBe(true);
    });

    it('returns Fizz for numbers that are divisible only with 3', function() {
      var numbersDivisableWith3 = [3, 6, 9, 27];

      numbersDivisableWith3.forEach(function(number) {
        var result = FizzBuzz.print(number);
        expect(result).toBe('Fizz');
      });

    });

    it('returns Buzz for numbers that are divisible only with 5', function() {
      var numbersDivisableWith5 = [5, 10, 25, 35];

      numbersDivisableWith5.forEach(function(number) {
        var result = FizzBuzz.print(number);
        expect(result).toBe('Buzz');
      });

    });


    it('returns FizzBuzz for numbers that are divisible with both 3 and 5', function() {
      var fizzBuzzNumbers = [15, 30, 60, 90];

      fizzBuzzNumbers.forEach(function(number) {
        var result = FizzBuzz.print(number);
        expect(result).toBe('FizzBuzz');
      });

    });
  });
});