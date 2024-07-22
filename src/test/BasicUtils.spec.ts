import { product, authenticateUser, UserNameToLowercase } from "../app/BasicUtils"

describe("BasicUtils test suite", () => {
    it("Returns the product of 3 and 2", () => {
        const actual = product(3, 2);
        expect(actual).toBe(6)
        expect(actual).toEqual(6)
        expect(actual).toBeLessThan(9)
        expect(actual).toBeGreaterThan(3)
    })

    describe("User authentication block", () => {
        it("Username to be lowercase", () => {
            const sut = authenticateUser;
            const actual = sut("developer", "dev");
            expect(actual.usernameToLower).toBe("developer")
        })

        it("Username characters check", () => {
            const sut = authenticateUser;
            const actual = sut("developer", "dev");
            expect(actual.usernameCharacters).toEqual(["d", "e", "v", "e", "l", "o", "p", "e", "r"])
        })

        it("Check contains characters", () => {
            const sut = authenticateUser;
            const actual = sut("developer", "dev");
            expect(actual.usernameCharacters).toContain("r")
        })
    })

    describe("UsernameToLowercase class test suite", () => {
        // setup

        let sut: UserNameToLowercase

        beforeEach(() => {
            sut = new UserNameToLowercase();
        })

        it("Returns the lowercase of valid username", () => {
            const actual = sut.toLower("Bob");
            expect(actual).toBe("bob")
        })

        it("Throws an error for invalid username", () => {
            expect(() => sut.toLower("")).toThrow();
        })

        it("Throws an error for an invalid username", () => {
            function handleError() {
                const actual = sut.toLower("")
            }
            expect(handleError).toThrow()
        })

    })

})