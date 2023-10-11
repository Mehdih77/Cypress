
# Document

[Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress)

### ⚡️ Command Lines

**Open Cypress App:**

``` npx cypress open ```

**Run all spec(cy) files in the project:**

``` npx cypress run ```

or can change scripts:
```
  "scripts": {
    "test": "cypress run"
  }
```
then use: ``` npm run test ```

**Run all spec(cy) files in a folder:**

``` npx cypress run --spec "cypress/e2e/**/*" ```

**Run one spec(cy) file:**

``` npx cypress run --spec "cypress/e2e/test-one.cy.js" ```

**Run one spec(cy) file in a specific browser:**

``` npx cypress run --spec "cypress/e2e/test-one.cy.js" --browser chrome ```

**Run or Skip a specific test in a spec(cy) file:**

you can add ```only``` or ```skip``` to **it** in test

``` it.only("" , () => {}) ```

``` it.skip("" , () => {}) ```



## Related

Here are some related and useful links

[Cypress.io Youtube Channel](https://www.youtube.com/@Cypressio/playlists)

[Cypress Tips & Tricks](https://www.youtube.com/playlist?list=PLP9o9QNnQuAYYRpJzDNWpeuOVTwxmIxcI)

[Visually testing React component using open source tools](https://www.youtube.com/playlist?list=PLP9o9QNnQuAYhotnIDEUQNXuvXL7ZmlyZ)

[Testing a React Todo App](https://www.youtube.com/playlist?list=PL8GlT7H3xOcJbXNVnM6lTT3Fec8dikotY)

https://github.com/bushralam/Cypress

https://github.com/cypress-io/cypress-realworld-app

https://github.com/cypress-io/cypress-example-kitchensink/tree/master/cypress/e2e/2-advanced-examples

https://github.com/cypress-io/cypress-component-testing-apps/tree/main/react-next13-ts

https://github.com/bonnie/udemy-NEXTJS-TESTING

https://github.com/bahmutov/sudoku

https://docs.cypress.io/examples/media/courses-media

https://www.youtube.com/playlist?list=PLzDWIPKHyNmK9NX9_ng2IdrkEr8L4WwB0

https://www.youtube.com/watch?v=u8vMu7viCm8&list=WL&index=15&t=2914s&pp=gAQBiAQB

https://www.youtube.com/watch?v=OIAzwr-_jhY&list=WL&index=16&t=4887s&pp=gAQBiAQB

https://www.youtube.com/watch?v=avb-VDa3ZG4&list=WL&index=17&t=2533s&pp=gAQBiAQB

https://www.youtube.com/watch?v=5XQOK0v_YRE&list=WL&index=18&t=971s&pp=gAQBiAQB
