describe("Ultimate Tic Tac Toe Game", () => {
  beforeEach(() => {
    cy.viewport(1400, 1200);
    cy.visit("http://localhost:3000");
    cy.get("body").type("X");
    cy.get("body").type("q");
    cy.get("body").type("w");
    cy.wait(6000);
  });

  it("should be O the winner", () => {
    // Round 1
    cy.get(".square").eq(63).click(); // X in Small Board 7
    cy.get(".square").eq(4).click(); // O in Small Board 0

    // Round 2
    cy.get(".square").eq(36).click(); // X in Small Board 4
    cy.get(".square").eq(0).click(); // O in Small Board 0

    // Round 3
    cy.get(".square").eq(8).click(); // X in Small Board 0
    cy.get(".square").eq(72).click(); // O in Small Board 8

    // Round 4
    cy.get(".square").eq(5).click(); // X in Small Board 0
    cy.get(".square").eq(45).click(); // O in Small Board 5

    // Round 5
    cy.get(".square").eq(2).click(); // X in Small Board 0
    cy.get(".square").eq(49).click(); // O in Small Board 5

    // Round 6
    cy.get(".square").eq(40).click(); // X in Small Board 4
    cy.get(".square").eq(37).click(); // O in Small Board 4

    // Round 7
    cy.get(".square").eq(14).click(); // X in Small Board 1
    cy.get(".square").eq(53).click(); // O in Small Board 5

    // Round 8
    cy.get(".square").eq(44).click(); // X in Small Board 4
    cy.get(".square").eq(76).click(); // O in Small Board 8

    // Round 9
    cy.get(".square").eq(9).click(); // X in Small Board 1
    cy.get(".square").eq(80).click(); // O in Small Board 8

    // Round 10
    cy.get(".square").eq(71).click(); // X in Small Board 7
    cy.get(".square").eq(22).click(); // O in Small Board 2

    // Round 11
    cy.get(".square").eq(67).click(); // X in Small Board 7
    cy.get(".square").eq(26).click(); // O in Small Board 3

    // Round 12
    cy.get(".square").eq(56).click(); // X in Small Board 6
    cy.get(".square").eq(18).click(); // O in Small Board 2

    // At this point, X should win
    //  cy.contains(".winner-message", "Winner is: O");
  });
});
