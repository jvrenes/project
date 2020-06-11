import "babel-polyfill"

import { checkForInput } from '../src/client/js/textChecker.js';
import { sendFormText } from '../src/client/js/formHandler.js';

var fetch = require('node-fetch-polyfill');




describe("API call function", () => {
    test('API request', () => {
        global.fetch = jest.fn(() => Promise.resolve())
        const input = {formText: "learning front end development is very funny"};
        const output = {polarity: "positive", subjectivity: "subjective", text: "learning front end development is very funny", polarity_confidence: 0.8428494334220886, subjectivity_confidence: 0.9999999442489029};
        expect(sendFormText(input)).toEqual(output);
    })
})   

describe("Test the checkForInput function", () => {
    test('Input should be valid', () => {
        const input = "test";
        const output = true;

        expect(checkForInput(input)).toEqual(output);
    })
})

