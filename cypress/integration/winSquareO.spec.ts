describe("Ultimate Tic Tac Toe Game", () => {
  beforeEach(() => {
    cy.viewport(1400, 1200);
    cy.visit("http://localhost:3000");
    cy.get("body").type("X");
    cy.get("body").type("q");
    cy.get("body").type("w");
    cy.wait(6000);
  });

  it("should win O the first square", () => {
    // Round 1
    cy.get(".square").eq(0).click(); // X in Small Board 0
    cy.get(".square").eq(2).click(); // O in Small Board 0

    // Round 2
    cy.get(".square").eq(18).click(); // X in Small Board 2
    cy.get(".square").eq(4).click(); // O in Small Board 0

    // Round 3
    cy.get(".square").eq(36).click(); // X in Small Board 4
    cy.get(".square").eq(3).click(); // O in Small Board 0

    // Round 4
    cy.get(".square").eq(27).click(); // X in Small Board 3
    cy.get(".square").eq(5).click(); // O in Small Board 0

    // At this point, O should win the small board 0
    //  cy.get(".board").eq(0).should("have.class", "disabled");
  });
});
