const data = require("../lib/lib");

// grouping the tests, data is the name of the funtion
describe("data", () => {
  it("test positive number, if input is positive", () => {
    const result = data.testData(1);
    expect(result).toBe(1);
  });

  it("test positive number, if input is negative", () => {
    //input is negative
    const result = data.testData(-1);
    //expectation
    expect(result).toBe(1);
  });

  it("test return zero, if input is zero", () => {
    //input is negative
    const result = data.testData(0);
    //expectation
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("return name with welcome ", () => {
    const result = data.greet("Abhishek");
    // its to specfic test
    // expect(result).toBe("Welcome Abhishek");

    // generalize
    expect(result).toMatch(/Abhishek/);

    expect(result).toContain("Abhishek");
  });
});

describe("getCurrencies", () => {
  it("return currencies of various country ", () => {
    const result = data.getCurrencies();
    //Too general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    //Too specific
    expect(result[0]).toBe("INR");
    expect(result[1]).toBe("USD");
    expect(result[2]).toBe("EUR");
    expect(result.length).toBe(3);

    //proper way

    expect(result[0]).toContain("INR");
    expect(result[1]).toContain("USD");
    expect(result[2]).toContain("EUR");

    //ideal way
    expect(result).toEqual(expect.arrayContaining(["USD", "INR", "EUR"]));
  });
});

describe("getProduct", () => {
  it("return product  from the fuction", () => {
    const result = data.getProduct();
    // expect(result).toEqual({
    //   id: 1,
    //   product: "Abhishek Aryan",
    //   desc: "very good",
    // });

    // here we can pass property which we are intrested in
    expect(result).toMatchObject({
      id: 1,
      product: "Abhishek Aryan",
      desc: "very good",
    });

    // pass the property which you are intrested in
    expect(result).toHaveProperty("id", 1);
  });
});

describe("getUser", () => {
  it("should throw exception if user is falsy", () => {
    // Null
    // undefined
    // Nan
    // ""
    // 0
    // false
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        data.getUser(a);
      }).toThrow();
    });
  });
  it("get username when user is passed", () => {
    const result = data.getUser("Abhishek");

    expect(result).toEqual({ id: 1, product: "Abhishek Aryan" });
  });
});
