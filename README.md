# BCICentralTest
BCI Central Test by Try Okta Bagaskara to check the Registration page & Search Hotel Section in Traveloka

This repository contains Cypress test scripts for navigating and interacting with specific sections of the Traveloka website. The tests are designed to verify that key functionalities on the website are working as expected, such as navigating to the Registration page and searching for hotels.

## Prerequisites

Before running these tests, ensure that you have the following installed:

- Node.js (version 12 or higher)
- npm (Node Package Manager)
- Cypress

You can install Cypress by running the following command:

```bash
npm install cypress --save-dev

## Install Cypress XPath Plugin (optional if we want to use XPath):
npm install -D cypress-xpath

## Include the Plugin in Your Cypress Project:
After installing the plugin, you need to require it in your cypress/support/e2e.js (or index.js in older versions) file.
require('cypress-xpath');

## Running the Tests
To run the tests locally, use the following command:
npx cypress open

## Customizing Screenshots
Screenshots are captured at various points during the test to provide visual confirmation of the UI state. The screenshots are configured to capture only the viewport (without scrolling). This behavior is managed with the capture: 'viewport' option in the cy.screenshot() command

This `README.md` file explains the purpose of the test scripts, the steps each script performs, and how to run the tests. It also covers troubleshooting tips and additional notes related to the scripts.
