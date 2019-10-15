/* eslint-disable no-param-reassign */
const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const { JSDOM } = require("jsdom");

const jsdom = new JSDOM(
  `
  <!doctype html>
  <html>
    <head>
      <title>Playspace Tests</title>
    </head>
    <body>
    </body>
  </html>`,
  {
    /*
     * Fixes the "SecurityError: localStorage is not available for opaque origins" issue.
     * Read https://github.com/jsdom/jsdom/issues/2383#issuecomment-442199291
     */
    url: "http://test.url"
  }
);
const { window } = jsdom;

const setupDOM = global => {
  global.window = window;
  global.document = window.document;
  global.HTMLElement = window.HTMLElement;
  global.navigator = {
    userAgent: "node.js"
  };
  global.HTMLElement = window.HTMLElement;
  global.history = {
    pushState: () => {}
  };
};

Enzyme.configure({ adapter: new Adapter() });
setupDOM(global);
