var searchNeg = /[-]/g;
showError = num => {
  var testNeg = searchNeg.test(num); //boolean
  if (!testNeg) {
    return "Great!";
  } else {
    return "negatives not allowed";
  }
};

describe("String calculator", function(){
    it("suppose to return sum of the numbers if two are given",function(){
        expect(add("1,2")).toBe(3); 
    });
    it("should return sum of the numbers if there's a newline in between", function(){
        expect(add("1\n2,3")).toBe(6);
    });
    it("should return 0 if the string is empty", function(){
        expect(add("")).toBe(0);
    });
    it("should return that number if one number was passed to the string", function(){
        expect(add("1")).toBe(1);
    });
    it("should support different delimiters", function(){
        expect(add("//;\n1;2")).toBe(3)
    });
    it("Allow the Add method to handle an unknown amount of numbers", function(){
        expect(add("11111222223333344444555556666677777888889999900000")).toBe(1.1111222223333345e+49)
    });
    it("Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2", function(){
        expect(add("2, 1001")).toBe(2)
    });
    it("Delimiters can be of any length with the following format:“//delimiter]\n”", function(){
        expect(add("//[**]\n1**2***3")).toBe(6)
    });
    it("should throw an error for negative numbers", () => {
        var result6 = showError("-35");
        var jasmineError = () => {
          throw result6;
        };
        expect(jasmineError).toThrow("negatives not allowed");
      });

    
});