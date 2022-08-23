# hack-env-cy-v10

![CI](https://github.com/wlsf82/hack-env-cy-v10/actions/workflows/ci.yml/badge.svg)

Sample Cypress project to demonstrate how to run tests on different environments, where each one would have its specific data.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.13.2` and `8.3.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

This project allows running tests against two different production environments.

They are called **Prod-v1** and **Prod-v2**.

### Prod-v1

Run `npm run test:prod:v1` to run the tests in headless mode against the **Prod-v1** environment.

Or, run `npm run cy:open:prod:v1` to open Cypress in interactive mode against the **Prod-v1** environment.

### Prod-v2

Run `npm run test:prod:v2` to run the tests in headless mode against the **Prod-v2** environment.

Or, run `npm run cy:open:prod:v2` to open Cypress in interactive mode against the **Prod-v2** environment.

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
