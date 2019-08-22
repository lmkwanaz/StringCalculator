describe("String calculator", function(){
    it("suppose to add numbers",function(){
        expect(add("1,2")).toBe(2);
    });
});
describe("multiply numbers", function(){
    it("suppose to multiply", function(){
        expect(multiply(1, 2, 3, 4, 5)).toBe(120);
    });
});