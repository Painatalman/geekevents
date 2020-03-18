import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  failureThreshold: 0.0,
  failureThresholdType: "percent",
  customDiffConfig: { threshold: 0.0 }
});

console.log("here");

Cypress.Commands.add("setResolution", size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }
});
