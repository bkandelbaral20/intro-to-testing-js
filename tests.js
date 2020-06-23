// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "say Hello" when executed', function() {
      expect(sayHello()).toBe("say, Hello");
    });
    it("should never return 'undefined' when called", function() {
      expect(sayHello()).not.toBe(undefined);
    });
});

//Unit tests for the isEven number function
describe("isEven",function(){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean value', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed value of 10', function () {
        expect( isEven(10)).toBe(true);
    });
    it("should return false when passed the value 7",function () {
    expect(isEven(7)).toBe(false);
    });
});

//