// Unit tests for the sayHello function to ensure our function returns the right data type.
describe('sayHello', function() {
    it('should be a defined function', function() {
     expect(typeof sayHello).toBe('function');
    });

    //1,2
    it('should return a string when called', function() {
     expect(typeof sayHello()).toBe("string");
    });

    //3
    it('should return the string "Hello, Jane!" when executed', function() {
      expect(sayHello("Jane")).toBe('Hello, Jane!');
    });

    //4
    it("should return the 'Hello, Alex!' when executed", function() {
     expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    //5
    it("should return the 'Hello, Pat!' when executed", function() {
    expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

    //8
   it("should return the 'Hello, World!' ", function() {
   expect(sayHello("World")).toBe("Hello, World!");
   });

   it("should return the 'Hello, World!' if it true ", function() {
   expect(sayHello(true)).toBe("Hello, true!");
   });

    it("should return the 'Hello, World!' if it false ", function() {
    expect(sayHello(false)).toBe("Hello, false!");
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

//Unit tests for isFive function
describe("isFive",function () {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean value", function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed value of 5', function () {
        expect( isFive(5)).toBe(true);
    });
    it("should return false when passed the value '5' ",function () {
        expect(isFive("5")).toBe(false);
    });
})
