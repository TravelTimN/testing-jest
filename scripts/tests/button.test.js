/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

beforeEach(() => {
    /**
     *  testing one piece only
     */
    // document.body.innerHTML = "<p id='par'></p>";

    /**
     * testing an entire HTML page
     */
    let fs = require("fs"); // file system; part of NodeJS for reading/writing files
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.write(fileContents);
    document.close();

});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
    test("h1 should be defined", () => {
        expect(document.getElementsByTagName("h1")).toBeDefined();
    });
});
