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
});