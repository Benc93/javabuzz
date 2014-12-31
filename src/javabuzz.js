function Javabuzz(){
  Javabuzz.prototype.isDivisibleByThree = function(number) {
    return (number % 3 === 0);
  };

  Javabuzz.prototype.isDivisibleByFive = function(number) {
    return (number % 5 === 0);
  };

  Javabuzz.prototype.isDivisibleByFifteen = function(number) {
    return (number % 15 === 0);
  };

  Javabuzz.prototype.FizzBuzz = function(number) {
    if (this.isDivisibleByFifteen(number)) return "Javabuzz";
    if (this.isDivisibleByThree(number)) return "Java";
    if (this.isDivisibleByFive(number)) return "Buzz";
    return number
  };
};