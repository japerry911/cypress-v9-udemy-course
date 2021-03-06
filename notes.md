- cypress
  - automated testing framework
- game changers
  - time travel
    - takes snapchats as your tests run
  - debuggability
    - great for debugging
  - real time reloads
    - automatically reloads when you make changes to your test
  - automatic waiting
    - never adds waits or sleeps to your tests, cypress automatically does this
  - spies, stubs, and clocks
  - network traffic control
  - consistent results
    - no selenium or webDriver
  - view screenshots/videos
- does not use selenium
  - most end-to-end testing tools are selenium-based
- cypress focuses on doing end-to-end testing really well
- works on any framework or website
- tests are written only in JavaScript
- Cypress is all in one
- cypress is for developers and QA engineers
- runs much, much faster
- pros
  - easy to set up
  - quick and very stable
  - flake resistent
    - cypress is notified the omment the page loads and the moment the page unloads, impossible to miss elements when it fires events
  - API testing
    - ability to test and mock APIs
- cons
  - ideally some knowledge/experience using JavaScript
  - no mobile testing
  - single domain and single tab
- `cypress.json`
  - change cypress default settings
- `cypress/support/index.js`
  - add additional imports, event listeners, etc...
- `cypress/support/commands.js`
  - houses commands
  - reduces redundency and re-uses code
- `cypress/plugins/index.js`
  - extend from cypress functionality
- `cypress/fixtures`
  - store any test data that is needed
    - mock objects
    - mock data
    - etc...
- `cypress/integration`
  - the main folder where test files are stored
  - cypress test runner will look into this folder in order to locate test files
- mocha
  - feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun
  - tests run serially
    - allows for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases
  - cmoes pre bundled with two function calls
    - `describe()`
      - simply a way to group our tests
        - enabling us to group a series of tests together
      - 2 arguments
        1. name of the test group
        2. call-back function
    - `it()`
      - a way to describe each individual test case which is nested inside of the `describe()` block
      - should be described in a way that makes sense for the given test case
      - used to describe the individual test cases