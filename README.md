# Testing with [Jest](https://jestjs.io/)

## Initialize NPM
- `npm init`
- hit `<enter>` for all options except for **test command:**, and type `jest`.

## Use Jest in a dev environment
- Adds Jest to a list called Dev Dependencies
- `npm install --save-dev jest`

## Run Jest
- `npm test`

## Describing Tests
<details>
<summary>Sample Test in plain English</summary>

- I want to test a calculator.
- I am going to test the addition function.
- I want to get the result of 42.
- I expect 20 + 22 to equal 42.

</details>

<details>
<summary>Sample Test using Jest</summary>

```javascript
describe("calculator tests", () => {
    describe("addition tests", () => {
        test("should return 42", () => {
            expect(addition(20, 22)).toBe(42);
        });
    });
});
```

- `.toBe()` is a type of "Matcher".
- View [Jest Matchers](https://jestjs.io/docs/using-matchers).

</details>

---

## **IMPORTANT !**

## Due to a change in Jest's default configuration, you need to add the following code to the top of your `button.test.js` file:

```javascript
/**
 * @jest-environment jsdom
 */
```
