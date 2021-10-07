// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("It returns false if the given alphabet isn't exactly 26 characters long", () => {
        const input = "captain"; //"a";
        const alphabet = "abcdefghijklmnopqrstuvwxyzz"; //"abc";
        const expected = false;
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.be.false;
    });

    it("It correctly translates the given phrase, based on the alphabet given to the function", () => {
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "jrufscpw";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.equal(expected); 
    });

    it("It returns false if there are any duplicate characters in the given alphabet", () => {
        const input = "captain";
        const alphabet = "abcdefghijklmnopqrstuvwxyzz";
        const expected = false;
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.be.false;
    });

    it("It maintains spaces in the message, before and after encoding or decoding", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.equal(expected);
    });

    it("It ignores capital letters", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne"; 
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.equal(expected);
    });
})
