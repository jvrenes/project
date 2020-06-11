import "babel-polyfill"

import { checkForInput } from '../src/client/js/textChecker.js';
import { sendFormText } from '../src/client/js/formHandler.js';

 

describe("Test the sendFormText function to be correctly defined", () => {
    test('this is sendFormText test', async () => {
  expect(sendFormText).toBeDefined();
});
})



describe("Test the checkForInput function", () => {
    test('Input should be valid', () => {
        const input = "test";
        const output = true;

        expect(checkForInput(input)).toEqual(output);
    })
})

