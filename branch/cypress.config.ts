// import { defineConfig } from "cypress";

// export default defineConfig({
//   component: {
//     devServer: {
//       framework: "react",
//       bundler: "webpack",
//     },
//   },

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// import { defineConfig } from "cypress";

// export default defineConfig({
//   component: {
//     supportFile: "cypress/support/component.ts",
//     devServer: {
//       bundler: "vite",
//       framework: "svelte",
//     },
//     indexHtmlFile: "cypress/support/component-index.html",
//   },

//   experimentalWebKitSupport: true,

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'src/components/cypress/*.cy.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // includeShadowDom: true
  },
});
