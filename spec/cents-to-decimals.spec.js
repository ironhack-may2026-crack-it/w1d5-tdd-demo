

describe("function centsToDecimals", function () {
    it("Should be defined", function () {
        expect(centsToDecimals).toBeDefined()
    })

    it("Should convert value from cents to floating point number with 2 decimals", function () {
        expect(centsToDecimals(105)).toBe(1.05)
        expect(centsToDecimals(0)).toBe(0.00)
        expect(centsToDecimals(9)).toBe(0.09)
        expect(centsToDecimals(23)).toBe(0.23)
        expect(centsToDecimals(400)).toBe(4.00)
    })

    it("Should work with very large numbers", function () {
        expect(centsToDecimals(56789012)).toBe(567890.12)
    })

    it("Should work with negative numbers", function () {
        expect(centsToDecimals(-5)).toBe(-0.05)
        expect(centsToDecimals(-132)).toBe(-1.32)
    })

    it("Should return null, if invoked without any argument", function () {
        expect(centsToDecimals()).toBeNull()
    })

    it("Should return null, if invoked with an argument that is not a valid number", function () {
        expect(centsToDecimals("eleven")).toBeNull();
    });
})
