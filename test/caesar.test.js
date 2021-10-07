// Write your tests here!
const expect = require("chai").expect
const {caesar} = require("../src/caesar");
//caesar has to be in curly brackets because it's an object being imported

describe("caesar", () => {
    it("Should return false if shift is not present", () => {
        const input = "captain";
        const shift = undefined;
        const expected = false;
        const actual = caesar(input, shift,(encode = true));
        expect(actual).to.equal(expected);
    })
    it("Should return false if shift is 0", () => {
        const input = "captain";
        const shift = 0;
        const expected = false;
        const actual = caesar(input, shift,(encode = true));
        expect(actual).to.equal(expected);
    });
    it("Should return false if shift is less than -25", () => {
        const input = "captain";
        const shift = -26;
        const expected = false;
        const actual = caesar(input, shift, (encode = true));
        expect(actual).to.equal(expected);
    })
    it("Should return false if shift is greater than 25", () => {
        let input = "captain";
        let shift = 26;
        const expected = false;
        const actual = caesar(input, shift, (encode = true));
        expect(actual).to.equal(expected);
    })
    it("Should return wklqnixo when given thinkful", () => {
        let input = "thinkful";
        let shift = 3;
        let actual = caesar(input, shift, (encode = true));
        let expected = "wklqnixo";
        expect(actual).to.equal(expected);
    })
    it("Should decode 'bpqa qa I amkzmb umaaiom!' to 'this is a secret message!'", () => {
       let input = "bpqa qa I amkzmb umaaiom!";
       let shift = -8;
       let actual = caesar(input, shift, (encode=true)); 
       let expected = "this is a secret message";
    })
    it("should return thinkful when given wklqnixo", () => {
        let input = "wklqnixo";
        let shift = -3;
        let actual = caesar(input, shift, (encode=true));
        let expected = "thinkful";
        expect(actual).to.equal(expected);
    })
    it("spaces and characters should be maintained", () => {
        let input = "@#$% &^&&^ @#$%$#@";
        let shift = -3;
        let actual = caesar(input, shift, (encode = true));
        let expected = "@#$% &^&&^ @#$%$#@";
        expect(actual).to.equal(expected);
    })
    it("should invert shift (decode) if encode is false", () => {
        let input = "bpqa qa i amkzmb umaaiom";
        let shift = 8;
        let encode = false;
        let actual = caesar(input, shift, encode);
        let expected = "this is a secret message";
        expect(actual).to.equal(expected);
      })
      it("should ignore capital letters", () => {
        let input1 = "A Message";
        let input2 = "a message";
        let shift = 8;
        let encode = true;
        let actual = caesar(input1, shift, encode);
        let expected = caesar(input2, shift, encode);
        expect(actual).to.equal(expected);
      });  
});

//---Test---
//If the shift value is not present, equal to 0, less than -25, 
//or greater than 25, the function should return false.

//if there is no input or no shift return an error message
//if encode is true encode, else decode
//if input is not a string throw error message


//it should shift to the right if the number is positive
//it should shift to the left if the number is negative
