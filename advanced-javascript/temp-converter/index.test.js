// code that is going to test our main code
const {tempConverter, fahrenheitToCelsius} = require("./index")

// a description of the piece of code (unit) that you are testing
describe("tempConverter", function(){
    // tests go here

    // normal inputs
    // tempConverter(212, "C") // 100
    test("212F converts to 100C", () => {
        // run the code
        const results = tempConverter(212, "C")

        // check the code, syntax by jest
        expect( results ).toEqual(100)
    })


    // tempConverter(0, "F") // 32
    test("0C converts to 32F", () => {
        // run the code
        const results = tempConverter(0, "F")

        // check the code, syntax by jest
        expect( results ).toEqual(32)
    })

    // tempConverter(0, "K") // 273.15

    // // extreme inputs
    // tempConverter(100000*10000, "C") // 
    test("100000*10000C converts to 32F", () => {
        // run the code
        const results = tempConverter(100000*10000, "F")

        // check the code, syntax by jest
        expect( results ).toEqual(1800000032)
    })

    // // negative numbers
    // tempConverter(-1000, "C") // 
    test("0C converts to 32F", () => {
        // run the code
        const results = tempConverter(-1000, "C")

        // check the code, syntax by jest
        expect( results ).toBeCloseTo(-573.333)
    })

    // // decimals
    // tempConverter(65.421, "F")
    test("0C converts to 32F", () => {
        // run the code
        const results = tempConverter(0, "F")

        // check the code, syntax by jest
        expect( results ).toEqual(32)
    })
    // wrong inputs
    // error, try to convert it to a number, if NaN then error
    // tempConverter("ssdf", "C") // error
    // tempConverter("212", "C")  // 100
    test("wrong input gives error message", () => {
        // run the code
        const results = tempConverter("ssdf", "C")

        // check the code, syntax by jest
        expect( results ).toEqual("error: your input is invalid")
    })

    // enforce only C, F, K
    // tempConverter("212", "ABC")  // 100
    // tempConverter("212", "c")  // 100
    // tempConverter("212")  // default?

}) 

describe("translation", function(){
    // tests go here

    // normal inputs
    // tempConverter(212, "C") // 100
    test("yellow -> elloway", () => {
       // test against yellow
    })

    // add more test()s
})
