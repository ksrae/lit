import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'src/components/**/cypress/*.cy.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // includeShadowDom: true
  },
});
