describe("Ultimate Tic Tac Toe Game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should visit", () => {
    cy.contains(".player-turn", "Next player: X");
  });

  it("should win X the first square", () => {
    // Round 1
    cy.get(".square").eq(0).click(); // X in Small Board 0
    cy.get(".square").eq(5).click(); // O in Small Board 0

    // Round 2
    cy.get(".square").eq(49).click(); // X in Small Board 5
    cy.get(".square").eq(36).click(); // O in Small Board 4

    // Round 3
    cy.get(".square").eq(4).click(); // X in Small Board 0
    cy.get(".square").eq(43).click(); // O in Small Board 4

    // Round 4
    cy.get(".square").eq(63).click(); // X in Small Board 7
    cy.get(".square").eq(2).click(); // O in Small Board 0

    // Round 5
    cy.get(".square").eq(21).click(); // X in Small Board 2
    cy.get(".square").eq(27).click(); // O in Small Board 3

    // Round 6
    cy.get(".square").eq(8).click(); // X in Small Board 0

    // At this point, X should win the small board 0
    cy.get(".board").eq(0).should("have.class", "disabled");
  });
});
