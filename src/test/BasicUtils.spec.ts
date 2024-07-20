import { product, authenticateUser } from "../app/BasicUtils"

describe("BasicUtils test suite", () => {
    it("Returns the product of 3 and 2", () => {
        const actual = product(3, 2);
        expect(actual).toBe(6)
        expect(actual).toEqual(6)
        expect(actual).toBeLessThan(9)
        expect(actual).toBeGreaterThan(3)
    })

    it("User authentication", () => {
        const sut = authenticateUser;
        const actual = sut("developer", "dev");
        expect(actual.usernameToLower).toBe("developer")
        expect(actual.usernameCharacters).toEqual(["d", "e", "v", "e", "l", "o", "p", "e", "r"])
        expect(actual.usernameCharacters).toContain("r")
    })
})