describe("Ultimate Tic Tac Toe Game", () => {
  beforeEach(() => {
    cy.viewport(1400, 1200);
    cy.visit("http://localhost:3000");
    cy.get("body").type("X");
    cy.get("body").type("q");
    cy.get("body").type("w");
    cy.wait(6000);
  });

  it("should be X the winner", () => {
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
    cy.get(".square").eq(38).click(); // O in Small Board 4

    // Round 7
    cy.get(".square").eq(24).click(); // X in Small Board 2
    cy.get(".square").eq(56).click(); // O in Small Board 6

    // Round 8
    cy.get(".square").eq(18).click(); // X in Small Board 2
    cy.get(".square").eq(37).click(); // O in Small Board 4

    // Round 9
    cy.get(".square").eq(13).click(); // X in Small Board 1
    cy.get(".square").eq(9).click(); // O in Small Board 1

    // Round 10
    cy.get(".square").eq(11).click(); // X in Small Board 1
    cy.get(".square").eq(10).click(); // O in Small Board 1

    // Round 11
    cy.get(".square").eq(15).click(); // X in Small Board 1

    // At this point, X should win
    //  cy.contains(".winner-message", "Winner is: X");
  });
});
